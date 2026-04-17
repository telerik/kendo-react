import { useState } from 'react';
import {
    Chart,
    ChartArea,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartLegend,
    ChartLegendItem,
    ChartTooltip
} from '@progress/kendo-react-charts';
import type { SeriesVisualArgs, LegendItemVisualArgs } from '@progress/kendo-react-charts';
import { drawing, geometry } from '@progress/kendo-drawing';
import { ArcGauge } from '@progress/kendo-react-gauges';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { Button } from '@progress/kendo-react-buttons';
import { exportButtonIcon } from '../icons/customIcons';
import PageHeading from '../components/PageHeading';
import {
    vitalsData,
    alertsOverTimeData,
    alertsByCategoryData,
    labResultsRangeData,
    riskScoreData,
    patientOptions
} from '../data/sampleData';

const donutLabelContent = (e: { category: string }) => e.category;

function circleLegendItemVisual(args: LegendItemVisualArgs) {
    const { options, series, pointIndex } = args;
    const dataItem = pointIndex != null && series?.data ? series.data[pointIndex] : undefined;
    const color =
        options?.markers?.background || options?.markers?.border?.color || dataItem?.color || series?.color || '#000';
    const labelText =
        pointIndex != null && dataItem?.value != null
            ? `${pointIndex}:${dataItem.value}`
            : options?.text || series?.name || '';
    const labelFont = options?.labels?.font || '12px sans-serif';
    const labelColor = options?.labels?.color || '#333';

    const group = new drawing.Group();

    // Draw circle marker
    const circleCenter = new geometry.Point(7, 7);
    const circleGeom = new geometry.Circle(circleCenter, 6);
    group.append(
        new drawing.Circle(circleGeom, {
            fill: { color },
            stroke: { width: 0 }
        })
    );

    // Draw label text (y offset aligns baseline with circle center)
    const textPosition = new geometry.Point(18, -4);
    const text = new drawing.Text(labelText, textPosition, {
        font: labelFont,
        fill: { color: labelColor }
    });
    group.append(text);

    return group;
}

const CORNER_RADIUS = 10;

function flatColumnVisual(args: SeriesVisualArgs) {
    const { rect: rectArg } = args;
    const x = rectArg.origin.x;
    const y = rectArg.origin.y;
    const w = rectArg.size.width;
    const h = rectArg.size.height;

    const path = new drawing.Path({
        fill: { color: args.options.color as string },
        stroke: { width: 0 }
    });
    path.moveTo(x, y + h)
        .lineTo(x, y)
        .lineTo(x + w, y)
        .lineTo(x + w, y + h)
        .close();

    return path;
}

function roundedTopColumnVisual(args: SeriesVisualArgs) {
    const { rect: rectArg } = args;
    const origin = rectArg.origin;
    const size = rectArg.size;
    const x = origin.x;
    const y = origin.y;
    const w = size.width;
    const h = size.height;
    const r = Math.min(CORNER_RADIUS, w / 2, h / 2);

    // Path: start bottom-left, go up, round top-left, across top, round top-right, down, close
    const path = new drawing.Path({
        fill: { color: args.options.color as string },
        stroke: { width: 0 }
    });
    path.moveTo(x, y + h)
        .lineTo(x, y + r)
        .curveTo([x, y], [x, y], [x + r, y])
        .lineTo(x + w - r, y)
        .curveTo([x + w, y], [x + w, y], [x + w, y + r])
        .lineTo(x + w, y + h)
        .close();

    return path;
}

const CHART_HEIGHT_VITALS = 360;
const CHART_HEIGHT_ALERTS = 300;
const CHART_HEIGHT_LAB_RANGE = 100;
const CHART_HEIGHT_DONUT = 340;

const RISK_COLOR_HIGH = '#F27C7C';
const RISK_COLOR_MEDIUM = '#C5A839';
const RISK_COLOR_LOW = '#28A745';

const RISK_LEGEND = [
    { color: RISK_COLOR_HIGH, label: 'High Risk', range: '0-39' },
    { color: RISK_COLOR_MEDIUM, label: 'Medium Risk', range: '40-69' },
    { color: RISK_COLOR_LOW, label: 'Low Risk', range: '70-100' }
];

const getRiskLabel = (score: number) => {
    if (score <= 39) return 'High Risk';
    if (score <= 69) return 'Medium Risk';
    return 'Low Risk';
};

const getRiskColor = (score: number) => {
    if (score <= 39) return RISK_COLOR_HIGH;
    if (score <= 69) return RISK_COLOR_MEDIUM;
    return RISK_COLOR_LOW;
};

function RiskScoreCenterLabel() {
    return (
        <span
            style={{
                fontSize: 36,
                fontWeight: 700,
                color: getRiskColor(riskScoreData.value)
            }}
        >
            {riskScoreData.value}%
        </span>
    );
}

export default function ClinicalAnalytics() {
    const [selectedPatient, setSelectedPatient] = useState(
        patientOptions.find((p) => p.text.includes('James Wilson')) || patientOptions[0]
    );

    return (
        <>
            <PageHeading
                title="Clinical Analytics"
                subtitle="Patient trends, vitals, lab results, and risk assessment overview"
                actions={
                    <>
                        <DropDownList
                            data={patientOptions}
                            textField="text"
                            dataItemKey="value"
                            value={selectedPatient}
                            onChange={(e) => setSelectedPatient(e.value)}
                            rounded="full"
                            popupSettings={{ popupClass: 'popup-rounded' }}
                            className="analytics-patient-filter"
                        />
                        <Button svgIcon={exportButtonIcon} themeColor="base" rounded="full">
                            Export
                        </Button>
                    </>
                }
            />

            {/* Vitals Over Time */}
            <div className="chart-card chart-card--mb">
                <h3>Vitals Over Time</h3>
                <p className="chart-card-subtitle">
                    Multi-series tracking of blood pressure, heart rate, SpO2, and temperature
                </p>
                <Chart style={{ height: CHART_HEIGHT_VITALS }}>
                    <ChartArea background="transparent" />
                    <ChartLegend position="bottom">
                        <ChartLegendItem visual={circleLegendItemVisual} />
                    </ChartLegend>
                    <ChartTooltip />
                    <ChartCategoryAxis>
                        <ChartCategoryAxisItem categories={vitalsData.categories} />
                    </ChartCategoryAxis>
                    <ChartValueAxis>
                        <ChartValueAxisItem />
                    </ChartValueAxis>
                    <ChartSeries>
                        {vitalsData.series.map((s) => (
                            <ChartSeriesItem
                                key={s.name}
                                type="line"
                                data={s.data}
                                name={s.name}
                                color={s.color}
                                markers={{ visible: true, size: 6 }}
                                width={2}
                            />
                        ))}
                    </ChartSeries>
                </Chart>
            </div>

            {/* Alerts Over Time - Stacked Column */}
            <div className="chart-card chart-card--mb">
                <h3>Alerts Over Time</h3>
                <p className="chart-card-subtitle">Alert count trend by severity level</p>
                <Chart style={{ height: CHART_HEIGHT_ALERTS }}>
                    <ChartArea background="transparent" />
                    <ChartLegend position="bottom">
                        <ChartLegendItem visual={circleLegendItemVisual} />
                    </ChartLegend>
                    <ChartTooltip />
                    <ChartCategoryAxis>
                        <ChartCategoryAxisItem categories={alertsOverTimeData.categories} />
                    </ChartCategoryAxis>
                    <ChartValueAxis>
                        <ChartValueAxisItem />
                    </ChartValueAxis>
                    <ChartSeries>
                        {alertsOverTimeData.series.map((s, i) => (
                            <ChartSeriesItem
                                key={s.name}
                                type="column"
                                stack={true}
                                data={s.data}
                                name={s.name}
                                color={s.color}
                                visual={
                                    i === alertsOverTimeData.series.length - 1
                                        ? roundedTopColumnVisual
                                        : flatColumnVisual
                                }
                            />
                        ))}
                    </ChartSeries>
                </Chart>
            </div>

            {/* Lab Results Range */}
            <div className="chart-card chart-card--mb">
                <h3>Lab Results Range</h3>
                <p className="chart-card-subtitle">
                    Multi-metric range chart showing latest lab results against optimal ranges
                </p>
                <div className="lab-ranges-list">
                    {labResultsRangeData.map((lab) => {
                        const third = lab.max / 3;
                        return (
                            <div key={lab.metric}>
                                <Chart style={{ height: CHART_HEIGHT_LAB_RANGE }}>
                                    <ChartArea background="transparent" margin={{ top: 20 }} />
                                    <ChartTooltip
                                        render={() => (
                                            <span>
                                                Max: {lab.max}
                                                <br /> Ave: {lab.current}
                                            </span>
                                        )}
                                    />
                                    <ChartSeries>
                                        <ChartSeriesItem
                                            type="bullet"
                                            data={[[lab.current, lab.current * 0.9]]}
                                            color={lab.optimalColor}
                                            target={{
                                                color: '#333',
                                                line: { width: 2 }
                                            }}
                                        />
                                    </ChartSeries>
                                    <ChartValueAxis>
                                        <ChartValueAxisItem
                                            min={0}
                                            max={lab.total}
                                            majorUnit={5}
                                            plotBands={[
                                                { from: 0, to: third, color: '#bfbfbf', opacity: 1 },
                                                {
                                                    from: third,
                                                    to: third * 2,
                                                    color: '#d4d4d4',
                                                    opacity: 1
                                                },
                                                {
                                                    from: third * 2,
                                                    to: lab.max,
                                                    color: '#e8e8e8',
                                                    opacity: 1
                                                }
                                            ]}
                                            notes={{
                                                position: 'top',
                                                icon: { visible: false },
                                                line: { length: 46 },
                                                label: {
                                                    font: '11px Poppins, sans-serif',
                                                    color: '#333'
                                                },
                                                data: [
                                                    {
                                                        value: lab.current * 0.9,
                                                        label: { text: 'MIN' }
                                                    }
                                                ]
                                            }}
                                        />
                                    </ChartValueAxis>
                                </Chart>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Alerts by Category + Risk Score */}
            <div className="chart-grid-2col">
                {/* Alerts by Category - Donut Chart */}
                <div className="chart-card">
                    <h3>Alerts by Category</h3>
                    <p className="chart-card-subtitle">Distribution of alerts by clinical category</p>
                    <Chart style={{ height: CHART_HEIGHT_DONUT }}>
                        <ChartArea background="transparent" />
                        <ChartLegend position="bottom">
                            <ChartLegendItem visual={circleLegendItemVisual} />
                        </ChartLegend>
                        <ChartTooltip />
                        <ChartSeries>
                            <ChartSeriesItem
                                type="donut"
                                data={alertsByCategoryData}
                                categoryField="category"
                                field="value"
                                colorField="color"
                                holeSize={70}
                                size={40}
                            >
                                <ChartSeriesLabels
                                    content={donutLabelContent}
                                    position="outsideEnd"
                                    background="none"
                                    color="var(--kendo-color-on-app-surface)"
                                />
                            </ChartSeriesItem>
                        </ChartSeries>
                    </Chart>
                </div>

                {/* Risk Score - ArcGauge */}
                <div className="chart-card chart-card--flex-col">
                    <h3>Risk Score</h3>
                    <p className="chart-card-subtitle">Patient health risk assessment</p>
                    <div className="risk-score-center">
                        <ArcGauge
                            value={riskScoreData.value}
                            colors={riskScoreData.colors}
                            style={{ width: 280, height: 180 }}
                            scale={{ rangeSize: 24 }}
                            centerRender={RiskScoreCenterLabel}
                        />
                        <span className="risk-score-out-of">Out of 100</span>
                        <div className="risk-score-legend">
                            {RISK_LEGEND.map((item) => (
                                <div key={item.label} className="risk-score-legend-item">
                                    <span className="risk-score-legend-label">
                                        <span className="risk-score-legend-dot" style={{ background: item.color }} />
                                        {item.label}
                                        {getRiskLabel(riskScoreData.value) === item.label && ' ●'}
                                    </span>
                                    <span className="risk-score-legend-range">{item.range}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
