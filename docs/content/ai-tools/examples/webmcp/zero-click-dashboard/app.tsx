import * as React from 'react';
import { Grid, GridColumn as Column, GridColumnMenuFilter, GridColumnMenuProps } from '@progress/kendo-react-grid';
import { filterIcon } from '@progress/kendo-svg-icons';
import { process, DataResult, State } from '@progress/kendo-data-query';
import {
    Chart,
    ChartTitle,
    ChartTooltip,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem
} from '@progress/kendo-react-charts';
import { Scheduler, DayView, WeekView, MonthView } from '@progress/kendo-react-scheduler';
import { WebMcpProvider } from '@progress/kendo-react-webmcp';
import { salesReps, buildChartData, makeAppointments } from './data';
import type { SalesRep, ChartMetric, SchedulerEvent } from './data';
import './styles.css';

const ColumnMenu = (props: GridColumnMenuProps) => (
    <div>
        <GridColumnMenuFilter {...props} expanded={true} />
    </div>
);

// ---------------------------------------------------------------------------
// KPI helpers
// ---------------------------------------------------------------------------
function formatCurrency(n: number): string {
    if (n >= 1_000_000) {
        return '$' + (n / 1_000_000).toFixed(1) + 'M';
    }
    return '$' + (n / 1_000).toFixed(0) + 'K';
}

// ---------------------------------------------------------------------------
// Custom chart tool hook — registers chart-set-metric via navigator.modelContext
// ---------------------------------------------------------------------------
function useChartTool(
    allReps: SalesRep[],
    onUpdate: (region: string, quarter: string, mode: string, reps: string[]) => void
) {
    const callbackRef = React.useRef(onUpdate);
    callbackRef.current = onUpdate;

    React.useEffect(() => {
        const mc = (navigator as any).modelContext;
        if (!mc) {
            return;
        }

        const regions = [
            'All',
            ...Array.from(new Set(allReps.map((r) => r.region))).sort((a, b) => a.localeCompare(b))
        ];
        const quarters = ['All', 'Q1', 'Q2', 'Q3', 'Q4'];
        const repNames = Array.from(new Set(allReps.map((r) => r.rep))).sort((a, b) => a.localeCompare(b));

        let handle: { unregister: () => void } | null = null;
        try {
            handle = mc.registerTool({
                name: 'chart-set-metric',
                description:
                    'Update the Performance Chart. Supports two modes: by-region (default) groups Revenue vs Target by region; ' +
                    'by-rep shows individual sales reps with their Revenue vs Target bars. Use by-rep mode when the user asks to ' +
                    'visualize, chart, or compare specific people, underperformers, or highlighted reps. ' +
                    'Optionally pass a reps array to chart only those people.',
                inputSchema: {
                    type: 'object',
                    properties: {
                        region: { type: 'string', enum: regions, description: 'Region filter, or All' },
                        quarter: { type: 'string', enum: quarters, description: 'Quarter filter, or All' },
                        mode: {
                            type: 'string',
                            enum: ['by-region', 'by-rep'],
                            description:
                                'by-region groups data per region; by-rep shows individual reps. Default: by-region.'
                        },
                        reps: {
                            type: 'array',
                            items: { type: 'string', enum: repNames },
                            description:
                                'Optional list of rep names to include when mode is by-rep. Omit to show all reps matching the region/quarter filter.'
                        }
                    },
                    required: ['region', 'quarter']
                },
                execute: async (args: Record<string, unknown>) => {
                    const r = (args.region as string) || 'All';
                    const q = (args.quarter as string) || 'All';
                    const m = (args.mode as string) || 'by-region';
                    const rp = (args.reps as string[]) || [];
                    callbackRef.current(r, q, m, rp);
                    const label = m === 'by-rep' ? 'rep-level view' : `${r} / ${q}`;
                    return { content: [{ type: 'text', text: `Performance Chart updated: ${label}.` }] };
                }
            });
        } catch {
            // Already registered — skip
        }

        return () => {
            handle?.unregister();
        };
    }, [allReps]);
}

// ---------------------------------------------------------------------------
// Column cell renderers
// ---------------------------------------------------------------------------
const RevenueCell = (props: any) => {
    const cls = props.dataItem.delta >= 0 ? 'revenue-pos' : 'revenue-neg';
    return (
        <td style={{ textAlign: 'right' }}>
            <span className={cls}>{formatCurrency(props.dataItem.revenue)}</span>
        </td>
    );
};

const DeltaCell = (props: any) => {
    const delta = props.dataItem.delta as number;
    const cls = delta >= 0 ? 'delta-pos' : 'delta-neg';
    const sign = delta >= 0 ? '+' : '';
    return (
        <td style={{ textAlign: 'right' }}>
            <span className={cls}>
                {sign}
                {delta.toFixed(1)}%
            </span>
        </td>
    );
};

const TargetCell = (props: any) => {
    return <td style={{ textAlign: 'right' }}>{formatCurrency(props.dataItem.target)}</td>;
};

// ---------------------------------------------------------------------------
// Sample prompts
// ---------------------------------------------------------------------------
const heroPrompts = [
    {
        label: 'Hero prompt',
        text: "Show me European region Q4 performance vs targets, highlight underperformers, visualize them in the chart, export a PDF named 'europe-q4-review' and schedule a 30-minute 'Q4 Europe Review' meeting today at 4 PM."
    },
    {
        label: 'Region drill',
        text: 'Focus the dashboard on NA Q4 — filter the grid, update the chart, and highlight anyone below target.'
    },
    {
        label: 'APAC variant',
        text: 'Show APAC Q4, chart it, flag underperformers, export to PDF and schedule a 30-minute APAC review tomorrow at 9 AM.'
    }
];

// ---------------------------------------------------------------------------
// Scheduler data change helper
// ---------------------------------------------------------------------------
function applySchedulerChanges(
    prev: SchedulerEvent[],
    created: any[] | undefined,
    updated: any[] | undefined,
    deleted: any[] | undefined
): SchedulerEvent[] {
    let next = [...prev];
    if (deleted?.length) {
        const deletedIds = new Set(deleted.map((d: any) => d.id));
        next = next.filter((e) => !deletedIds.has(e.id));
    }
    if (updated?.length) {
        next = next.map((e) => {
            const upd = updated.find((u: any) => u.id === e.id);
            return upd ? { ...e, ...upd } : e;
        });
    }
    if (created?.length) {
        const maxId = next.reduce((m, e) => Math.max(m, e.id), 0);
        created.forEach((c: any, i: number) => {
            next.push({ ...c, id: maxId + i + 1 });
        });
    }
    return next;
}

// ---------------------------------------------------------------------------
// Main App
// ---------------------------------------------------------------------------
const App = () => {
    // ---- Grid state ----
    const [dataState, setDataState] = React.useState<State>({ sort: [], filter: undefined });
    const gridData = React.useMemo<DataResult>(() => process(salesReps, dataState), [dataState]);
    const [highlightDescriptor, setHighlightDescriptor] = React.useState<any>({});

    // ---- Chart state ----
    const [chartFilterRegion, setChartFilterRegion] = React.useState('All');
    const [chartFilterQuarter, setChartFilterQuarter] = React.useState('All');
    const [chartData, setChartData] = React.useState<ChartMetric[]>(() => buildChartData(salesReps));
    const [chartTitle, setChartTitle] = React.useState('Revenue by Region');

    const filterChipLabel =
        (chartFilterRegion === 'All' ? 'All Regions' : chartFilterRegion) +
        ' · ' +
        (chartFilterQuarter === 'All' ? 'All Quarters' : chartFilterQuarter);

    const handleChartUpdate = React.useCallback((region: string, quarter: string, mode: string, reps: string[]) => {
        setChartFilterRegion(region);
        setChartFilterQuarter(quarter);

        let filtered: SalesRep[] = salesReps;
        if (region !== 'All') {
            filtered = filtered.filter((r) => r.region === region);
        }
        if (quarter !== 'All') {
            filtered = filtered.filter((r) => r.quarter === quarter);
        }

        const data = buildChartData(filtered, mode as 'by-region' | 'by-rep', reps);
        setChartData(data);

        if (mode === 'by-rep') {
            const regionLabel = region === 'All' ? '' : ` — ${region}`;
            const quarterLabel = quarter === 'All' ? '' : ` ${quarter}`;
            setChartTitle(`Revenue vs Target by Rep${regionLabel}${quarterLabel}`);
        } else {
            setChartTitle('Revenue by Region');
        }
    }, []);

    // ---- Custom chart MCP tool ----
    useChartTool(salesReps, handleChartUpdate);

    // ---- Scheduler state ----
    const [appointments, setAppointments] = React.useState<SchedulerEvent[]>(makeAppointments);
    const [schedulerDate, setSchedulerDate] = React.useState(new Date());
    const [schedulerView, setSchedulerView] = React.useState('month');

    const handleSchedulerDataChange = React.useCallback(({ created, updated, deleted }: any) => {
        setAppointments((prev) => applySchedulerChanges(prev, created, updated, deleted));
    }, []);

    // ---- KPI calculations ----
    const totalRevenue = salesReps.reduce((s, r) => s + r.revenue, 0);
    const totalDeals = salesReps.reduce((s, r) => s + r.deals, 0);

    // ---- Grid webMcp config with custom tool descriptions ----
    const gridWebMcp = React.useMemo(
        () => ({
            dataName: 'sales-reps',
            tools: (tools: any[]) => {
                return tools.map((t) => {
                    switch (t.name) {
                        case 'filter':
                            return {
                                ...t,
                                description:
                                    'Narrow the Sales Grid to a subset of rows. Use this whenever the user asks to see, show, focus on, ' +
                                    'or look at reps from a specific region or quarter. Available column fields: region (values: Europe, NA, APAC, LATAM, MEA), ' +
                                    'quarter (values: Q1, Q2, Q3, Q4), country, rep, revenue (number), target (number), delta (number, percent above/below target — ' +
                                    'negative means below target), deals (number). Always call this BEFORE chart-set-metric or grid-highlight when the user mentions a region or quarter.'
                            };
                        case 'sort':
                            return {
                                ...t,
                                description:
                                    "Sort the Sales Grid by a column. Use this for prompts like 'sort by revenue', 'rank by delta', or 'top performers first'."
                            };
                        case 'highlight':
                            return {
                                ...t,
                                description:
                                    'Mark Sales Grid rows visually to flag them. Use this AFTER filtering to call out underperformers (delta less than 0). ' +
                                    "For 'highlight underperformers' or 'flag who missed target', filter by field=delta, operator=lt, value=0."
                            };
                        case 'clear_highlight':
                            return {
                                ...t,
                                description: 'Remove all row highlights from the Sales Grid.'
                            };
                        case 'export_pdf':
                            return {
                                ...t,
                                description:
                                    'Export the CURRENT state of the Sales Grid (after any active filters, sorts, and highlights) to a PDF file.'
                            };
                        default:
                            return t;
                    }
                });
            }
        }),
        []
    );

    return (
        <div className="zcd">
            {/* ---- Top bar ---- */}
            <div className="zcd-topbar">
                <div className="zcd-brand">
                    <span className="zcd-brand-dot" />
                    <span>Finance Dashboard</span>
                    <span className="zcd-brand-tag">WebMCP Powered</span>
                </div>
                <div className="zcd-tools-count">20 tools registered</div>
            </div>

            {/* ---- Section header ---- */}
            <div className="zcd-section-head">
                <h1>Regional Performance</h1>
                <div className="zcd-filter-chip">{filterChipLabel}</div>
            </div>

            {/* ---- KPI row ---- */}
            <div className="zcd-kpi-row">
                <div className="zcd-kpi-card">
                    <div className="zcd-kpi-label">Revenue</div>
                    <div className="zcd-kpi-value">{formatCurrency(totalRevenue)}</div>
                    <div className="zcd-kpi-delta delta-up">↑ 8.2% vs target</div>
                </div>
                <div className="zcd-kpi-card">
                    <div className="zcd-kpi-label">Deals Closed</div>
                    <div className="zcd-kpi-value">{totalDeals}</div>
                    <div className="zcd-kpi-delta delta-up">↑ 12 vs target</div>
                </div>
                <div className="zcd-kpi-card">
                    <div className="zcd-kpi-label">Pipeline</div>
                    <div className="zcd-kpi-value">$8.1M</div>
                    <div className="zcd-kpi-delta delta-down">↓ 3.1% vs target</div>
                </div>
                <div className="zcd-kpi-card">
                    <div className="zcd-kpi-label">NPS Score</div>
                    <div className="zcd-kpi-value">72</div>
                    <div className="zcd-kpi-delta delta-up">↑ 5 pts</div>
                </div>
            </div>

            <WebMcpProvider>
                {/* ---- Mid row: Grid + Chart ---- */}
                <div className="zcd-mid-row">
                    <div className="zcd-panel">
                        <div className="zcd-panel-title">Sales Grid</div>
                        <Grid
                            data={gridData}
                            dataItemKey="id"
                            sortable={true}
                            columnMenu={ColumnMenu}
                            columnMenuIcon={filterIcon}
                            reorderable={true}
                            resizable={true}
                            selectable={{ enabled: true, mode: 'multiple' }}
                            onSelectionChange={() => {}}
                            onHeaderSelectionChange={() => {}}
                            onHighlightChange={(e) => setHighlightDescriptor(e.highlight)}
                            highlight={highlightDescriptor}
                            pdf={true}
                            sort={dataState.sort}
                            filter={dataState.filter}
                            onDataStateChange={(e) => setDataState(e.dataState)}
                            style={{ height: 320 }}
                            webMcp={gridWebMcp}
                        >
                            <Column field="rep" title="Rep" minWidth={140} />
                            <Column field="region" title="Region" minWidth={90} />
                            <Column field="country" title="Country" minWidth={110} />
                            <Column field="quarter" title="Qtr" minWidth={70} />
                            <Column field="revenue" title="Revenue" minWidth={110} cells={{ data: RevenueCell }} />
                            <Column field="target" title="Target" minWidth={110} cells={{ data: TargetCell }} />
                            <Column field="delta" title="Delta %" minWidth={90} cells={{ data: DeltaCell }} />
                        </Grid>
                    </div>

                    <div className="zcd-panel">
                        <div className="zcd-panel-title">Performance Chart</div>
                        <Chart style={{ height: 320 }}>
                            <ChartTitle text={chartTitle} color="#cbd5e1" />
                            <ChartTooltip />
                            <ChartLegend visible={true} position="bottom" />
                            <ChartSeries>
                                <ChartSeriesItem
                                    type="column"
                                    data={chartData}
                                    field="revenue"
                                    categoryField="category"
                                    name="Revenue"
                                    color="#22d3ee"
                                />
                                <ChartSeriesItem
                                    type="column"
                                    data={chartData}
                                    field="target"
                                    categoryField="category"
                                    name="Target"
                                    color="#475569"
                                />
                            </ChartSeries>
                            <ChartCategoryAxis>
                                <ChartCategoryAxisItem labels={{ color: '#94a3b8' }} />
                            </ChartCategoryAxis>
                            <ChartValueAxis>
                                {/* eslint-disable-next-line no-template-curly-in-string */}
                                <ChartValueAxisItem labels={{ format: '${0}', color: '#94a3b8' }} />
                            </ChartValueAxis>
                        </Chart>
                    </div>
                </div>

                {/* ---- Bottom row: Scheduler ---- */}
                <div className="zcd-bottom-row">
                    <div className="zcd-panel">
                        <div className="zcd-panel-title">Team Scheduler</div>
                        <Scheduler
                            data={appointments}
                            date={schedulerDate}
                            view={schedulerView}
                            onDateChange={(e) => setSchedulerDate(e.value)}
                            onViewChange={(e) => setSchedulerView(e.value)}
                            onDataChange={handleSchedulerDataChange}
                            editable={true}
                            style={{ height: 505 }}
                            webMcp={{ dataName: 'team' }}
                        >
                            <DayView startTime="08:00" endTime="20:00" />
                            <WeekView />
                            <MonthView />
                        </Scheduler>
                    </div>
                </div>
            </WebMcpProvider>

            {/* ---- Sample prompts ---- */}
            {/* <div className="zcd-prompts">
                {heroPrompts.map((p) => (
                    <div key={p.label} className="zcd-prompt-row">
                        <span className="zcd-prompt-label">{p.label}:</span>
                        <span>{p.text}</span>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default App;
