import * as React from 'react';
import {
    ExcelExport,
    ExcelExportColumn,
    ExcelExportColumnGroup,
    ExcelExportGroupFooterProps
} from '@progress/kendo-react-excel-export';
import { Button } from '@progress/kendo-react-buttons';
import { AggregateDescriptor, AggregateResult, aggregateBy, process } from '@progress/kendo-data-query';
import { fileExcelIcon } from '@progress/kendo-svg-icons';
import './styles.css';

interface SalesRecord {
    region: string;
    salesperson: string;
    product: string;
    category: string;
    q1: number;
    q2: number;
    q3: number;
    q4: number;
    annual: number;
}

const salesData: SalesRecord[] = [
    {
        region: 'North America',
        salesperson: 'Alice Monroe',
        product: 'CloudBase Pro',
        category: 'Software',
        q1: 48200,
        q2: 52100,
        q3: 61400,
        q4: 74300,
        annual: 236000
    },
    {
        region: 'North America',
        salesperson: 'Derek Walsh',
        product: 'DataSync Enterprise',
        category: 'Software',
        q1: 31500,
        q2: 29800,
        q3: 35200,
        q4: 41000,
        annual: 137500
    },
    {
        region: 'North America',
        salesperson: 'Priya Nair',
        product: 'SecureVault',
        category: 'Security',
        q1: 22400,
        q2: 26700,
        q3: 31100,
        q4: 38800,
        annual: 119000
    },
    {
        region: 'North America',
        salesperson: 'Tom Bridges',
        product: 'InsightAI',
        category: 'Analytics',
        q1: 54000,
        q2: 61200,
        q3: 58900,
        q4: 70500,
        annual: 244600
    },
    {
        region: 'Europe',
        salesperson: 'Sofia Larsen',
        product: 'CloudBase Pro',
        category: 'Software',
        q1: 36100,
        q2: 41800,
        q3: 47200,
        q4: 55600,
        annual: 180700
    },
    {
        region: 'Europe',
        salesperson: 'Marco Ricci',
        product: 'DataSync Enterprise',
        category: 'Software',
        q1: 27800,
        q2: 31400,
        q3: 29600,
        q4: 36200,
        annual: 125000
    },
    {
        region: 'Europe',
        salesperson: 'Helena Voss',
        product: 'SecureVault',
        category: 'Security',
        q1: 19500,
        q2: 22100,
        q3: 24800,
        q4: 30100,
        annual: 96500
    },
    {
        region: 'Europe',
        salesperson: 'Luca Ferretti',
        product: 'InsightAI',
        category: 'Analytics',
        q1: 41200,
        q2: 48700,
        q3: 52300,
        q4: 63800,
        annual: 206000
    },
    {
        region: 'Asia Pacific',
        salesperson: 'Yuki Tanaka',
        product: 'CloudBase Pro',
        category: 'Software',
        q1: 29600,
        q2: 33400,
        q3: 40100,
        q4: 47900,
        annual: 151000
    },
    {
        region: 'Asia Pacific',
        salesperson: 'Raj Patel',
        product: 'DataSync Enterprise',
        category: 'Software',
        q1: 18200,
        q2: 21500,
        q3: 25800,
        q4: 32700,
        annual: 98200
    },
    {
        region: 'Asia Pacific',
        salesperson: 'Min-Ji Park',
        product: 'SecureVault',
        category: 'Security',
        q1: 14800,
        q2: 17300,
        q3: 20600,
        q4: 26400,
        annual: 79100
    },
    {
        region: 'Asia Pacific',
        salesperson: 'Aisha Rahman',
        product: 'InsightAI',
        category: 'Analytics',
        q1: 33700,
        q2: 38200,
        q3: 44500,
        q4: 53100,
        annual: 169500
    },
    {
        region: 'Latin America',
        salesperson: 'Carlos Mendez',
        product: 'CloudBase Pro',
        category: 'Software',
        q1: 16400,
        q2: 19200,
        q3: 22700,
        q4: 28300,
        annual: 86600
    },
    {
        region: 'Latin America',
        salesperson: 'Isabela Costa',
        product: 'DataSync Enterprise',
        category: 'Software',
        q1: 11900,
        q2: 14600,
        q3: 17200,
        q4: 21500,
        annual: 65200
    },
    {
        region: 'Latin America',
        salesperson: 'Jorge Reyes',
        product: 'InsightAI',
        category: 'Analytics',
        q1: 21300,
        q2: 24800,
        q3: 29400,
        q4: 36700,
        annual: 112200
    },
    {
        region: 'North America',
        salesperson: 'Dana Fletcher',
        product: 'SupportDesk Plus',
        category: 'Services',
        q1: 28400,
        q2: 31600,
        q3: 35800,
        q4: 43200,
        annual: 139000
    },
    {
        region: 'Europe',
        salesperson: 'Erik Svensson',
        product: 'SupportDesk Plus',
        category: 'Services',
        q1: 21600,
        q2: 24900,
        q3: 27300,
        q4: 33100,
        annual: 106900
    },
    {
        region: 'Asia Pacific',
        salesperson: 'Liu Wei',
        product: 'SupportDesk Plus',
        category: 'Services',
        q1: 15200,
        q2: 17800,
        q3: 21400,
        q4: 26600,
        annual: 81000
    },
    {
        region: 'Latin America',
        salesperson: 'Valentina Cruz',
        product: 'SupportDesk Plus',
        category: 'Services',
        q1: 9800,
        q2: 11400,
        q3: 14200,
        q4: 18100,
        annual: 53500
    }
];

const categoryColors: Record<string, string> = {
    Analytics: '#3b82f6',
    Software: '#10b981',
    Security: '#f59e0b',
    Services: '#8b5cf6'
};

const group: { field: string; aggregates: AggregateDescriptor[] }[] = [
    { field: 'region', aggregates: [{ field: 'annual', aggregate: 'sum' }] }
];

const exportData = process(salesData, { group }).data;

const grandTotal = (aggregateBy(salesData, [{ field: 'annual', aggregate: 'sum' }]) as AggregateResult)['annual']
    .sum as number;

const categoryTotal = (category: string) =>
    salesData.filter((r) => r.category === category).reduce((s, r) => s + r.annual, 0);

const categorySummaries = ['Analytics', 'Software', 'Security', 'Services'].map((cat) => ({
    category: cat,
    annual: categoryTotal(cat),
    color: categoryColors[cat]
}));

const regionSummaries = (() => {
    const map = new Map<string, { annual: number; reps: Set<string> }>();
    for (const r of salesData) {
        const entry = map.get(r.region) ?? { annual: 0, reps: new Set<string>() };
        entry.annual += r.annual;
        entry.reps.add(r.salesperson);
        map.set(r.region, entry);
    }
    return Array.from(map.entries())
        .map(([region, v]) => ({ region, annual: v.annual, reps: v.reps.size }))
        .sort((a, b) => b.annual - a.annual);
})();

const topRegion = regionSummaries.reduce((a, b) => (a.annual > b.annual ? a : b));

const kpis = [
    { label: 'Grand Total Revenue', value: grandTotal, sub: 'all regions combined' },
    { label: 'Top Region', value: topRegion.annual, sub: topRegion.region },
    { label: 'Analytics Revenue', value: categoryTotal('Analytics'), sub: 'InsightAI product line' },
    { label: 'Software Revenue', value: categoryTotal('Software'), sub: 'CloudBase + DataSync' }
];

const formatUSD = (value: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);

const AnnualGroupFooter = (props: ExcelExportGroupFooterProps) => formatUSD(props.aggregates['annual'].sum as number);

const AnnualFooter = () => formatUSD(grandTotal);

const App = () => {
    const exporter = React.useRef<ExcelExport>(null);

    const handleExport = () => {
        exporter.current?.save();
    };

    return (
        <div className="demo-container">
            <div className="report-header">
                <div>
                    <h3 className="report-title">Annual Sales Performance Report — 2025</h3>
                    <p className="report-meta">
                        {salesData.length} sales reps · 4 regions · {formatUSD(grandTotal)} total revenue
                    </p>
                </div>
                <Button themeColor="primary" svgIcon={fileExcelIcon} onClick={handleExport}>
                    Export Full Report
                </Button>
            </div>

            <div className="kpi-row">
                {kpis.map((kpi) => (
                    <div key={kpi.label} className="kpi-card">
                        <span className="kpi-label">{kpi.label}</span>
                        <span className="kpi-value">{formatUSD(kpi.value)}</span>
                        <span className="kpi-sub">{kpi.sub}</span>
                    </div>
                ))}
            </div>

            <div className="breakdown-row">
                <div className="breakdown-panel">
                    <h4 className="panel-title">By Category</h4>
                    {categorySummaries.map((cat) => (
                        <div key={cat.category} className="breakdown-item">
                            <div className="breakdown-label">
                                <span className="cat-dot" style={{ background: cat.color }} />
                                {cat.category}
                            </div>
                            <div className="breakdown-bar-wrap">
                                <div
                                    className="breakdown-bar"
                                    style={{ width: `${(cat.annual / grandTotal) * 100}%`, background: cat.color }}
                                />
                            </div>
                            <span className="breakdown-value">{formatUSD(cat.annual)}</span>
                        </div>
                    ))}
                </div>

                <div className="breakdown-panel">
                    <h4 className="panel-title">By Region</h4>
                    {regionSummaries.map((reg) => (
                        <div key={reg.region} className="breakdown-item">
                            <div className="breakdown-label">{reg.region}</div>
                            <div className="breakdown-bar-wrap">
                                <div
                                    className="breakdown-bar bar-region"
                                    style={{ width: `${(reg.annual / grandTotal) * 100}%` }}
                                />
                            </div>
                            <span className="breakdown-value">{formatUSD(reg.annual)}</span>
                        </div>
                    ))}
                </div>
            </div>

            <p className="export-hint">
                Click <strong>Export Full Report</strong> to generate an Excel workbook with all sales records grouped
                by region, quarterly breakdowns, subtotals per group, and a grand-total footer row.
            </p>

            <ExcelExport
                data={exportData}
                group={group}
                collapsible={true}
                fileName="Sales-Performance-2025.xlsx"
                ref={exporter}
            >
                <ExcelExportColumn field="salesperson" title="Sales Rep" width={160} locked={true} />
                <ExcelExportColumn field="product" title="Product" width={180} />
                <ExcelExportColumn field="category" title="Category" width={110} />
                <ExcelExportColumnGroup
                    title="Quarterly Revenue"
                    headerCellOptions={{ textAlign: 'center', bold: true }}
                >
                    <ExcelExportColumn
                        field="q1"
                        title="Q1"
                        width={90}
                        cellOptions={{ format: '$#,##0', textAlign: 'right' }}
                    />
                    <ExcelExportColumn
                        field="q2"
                        title="Q2"
                        width={90}
                        cellOptions={{ format: '$#,##0', textAlign: 'right' }}
                    />
                    <ExcelExportColumn
                        field="q3"
                        title="Q3"
                        width={90}
                        cellOptions={{ format: '$#,##0', textAlign: 'right' }}
                    />
                    <ExcelExportColumn
                        field="q4"
                        title="Q4"
                        width={90}
                        cellOptions={{ format: '$#,##0', textAlign: 'right' }}
                    />
                </ExcelExportColumnGroup>
                <ExcelExportColumn
                    field="annual"
                    title="Annual Total"
                    width={120}
                    cellOptions={{ format: '$#,##0', textAlign: 'right', bold: true }}
                    groupFooterCellOptions={{ format: '$#,##0', textAlign: 'right', bold: true, background: '#dbeafe' }}
                    footerCellOptions={{ format: '$#,##0', textAlign: 'right', bold: true, background: '#bfdbfe' }}
                    groupFooter={AnnualGroupFooter}
                    footer={AnnualFooter}
                />
                <ExcelExportColumn field="region" hidden={true} />
            </ExcelExport>
        </div>
    );
};

export default App;
