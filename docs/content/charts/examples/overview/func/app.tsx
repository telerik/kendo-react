import * as React from 'react';
import './styles.css';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    ChartSeriesItemTooltip,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartLegend,
    ChartTooltip,
    SharedTooltipContext,
    TooltipContext,
    Sparkline,
    Sankey,
    SankeyLinkDefaults,
    SankeyTooltip,
    TooltipContentProps,
    SankeyNodeDataItem,
    SankeyLinkDataItem,
    StockChart,
    ChartNavigator,
    ChartNavigatorSelect,
    ChartNavigatorSeries,
    ChartNavigatorSeriesItem
} from '@progress/kendo-react-charts';
import {
    monthlyRevenueData,
    productCategoryData,
    kpiMetrics,
    revenueFlowData,
    stockPriceData,
    StockDataPoint
} from './data';

const months = monthlyRevenueData.map((d) => d.month);
const currentRevenue = monthlyRevenueData.map((d) => d.revenue);
const previousRevenue = monthlyRevenueData.map((d) => d.previousYear);
const targetValues = monthlyRevenueData.map((d) => d.target);

const formatCurrency = (value: number): string => {
    if (value >= 1000000) return `$${(value / 1000000).toFixed(2)}M`;
    if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
    return `$${value}`;
};

const totalRevenue = formatCurrency(productCategoryData.reduce((sum, item) => sum + item.value, 0));

const donutLabelContent = (args: { category: string; percentage: number }): string =>
    `${args.category}\n${(args.percentage * 100).toFixed(1)}%`;

const revenueTooltipRender = (e: SharedTooltipContext) => (
    <div>
        <strong>{String(e.points[0]?.category)}</strong>
        {e.points.map((point, i) => (
            <div key={i}>
                {point.series.name}: {formatCurrency(point.value as number)}
            </div>
        ))}
    </div>
);

const donutTooltipRender = ({ point }: TooltipContext) => {
    if (!point) {
        return <div />;
    }

    return (
        <div>
            <strong>{String(point.category ?? '')}</strong>
            <br />
            Revenue: {formatCurrency((point.value as number | undefined) ?? 0)}
        </div>
    );
};

const stockTooltipRender = ({ point }: TooltipContext) => {
    const dataItem = point.dataItem as StockDataPoint;

    return (
        <div>
            <strong>{dataItem.date.toLocaleDateString('en-US', { dateStyle: 'medium' })}</strong>
            <br />
            Open: {formatCurrency(dataItem.open)}
            <br />
            High: {formatCurrency(dataItem.high)}
            <br />
            Low: {formatCurrency(dataItem.low)}
            <br />
            Close: {formatCurrency(dataItem.close)}
        </div>
    );
};

const NodeTooltip: React.ComponentType<TooltipContentProps> = ({ dataItem }) => {
    const node = dataItem as SankeyNodeDataItem;
    const nodeValue = (dataItem as SankeyNodeDataItem & { value?: number }).value;

    return (
        <div>
            <strong>{node.label.text}</strong>: {nodeValue ?? 0} orders
        </div>
    );
};

const LinkTooltip: React.ComponentType<TooltipContentProps> = ({ dataItem }) => {
    const link = dataItem as SankeyLinkDataItem;
    return (
        <div>
            {link.source.label.text} → {link.target.label.text}: {link.value} orders
        </div>
    );
};

const sankeyLinks: SankeyLinkDefaults = { colorType: 'source' };
const sankeyTooltip: SankeyTooltip = { nodeComponent: NodeTooltip, linkComponent: LinkTooltip };

const donutCenterRender = () => (
    <div className="center-template">
        <p className="center-value">{totalRevenue}</p>
        <p className="center-label">Total</p>
    </div>
);

const App = () => (
    <div className="demo-container">
        <div className="kpi-row">
            {kpiMetrics.map((kpi) => (
                <div key={kpi.label} className="kpi-card">
                    <div className="kpi-top">
                        <div className="kpi-info">
                            <p className="kpi-label">{kpi.label}</p>
                            <p className="kpi-value">{kpi.value}</p>
                        </div>
                        <p className={`kpi-change ${kpi.change > 0 ? 'positive' : 'negative'}`}>
                            {kpi.change > 0 ? '\u25b2' : '\u25bc'} {Math.abs(kpi.change)}%
                        </p>
                    </div>
                    <Sparkline
                        className="kpi-sparkline"
                        data={kpi.trend}
                        type={kpi.change < 0 ? 'area' : 'line'}
                        seriesColors={kpi.change >= 0 ? ['var(--kendo-color-success)'] : ['var(--kendo-color-error)']}
                    />
                </div>
            ))}
        </div>

        <div className="charts-grid">
            <div className="chart-card">
                <div className="chart-header">
                    <h3 className="chart-title">Monthly Revenue</h3>
                    <p className="chart-subtitle">Current year vs. previous year with targets</p>
                </div>
                <Chart className="revenue-chart">
                    <ChartCategoryAxis>
                        <ChartCategoryAxisItem categories={months} />
                    </ChartCategoryAxis>
                    <ChartSeries>
                        <ChartSeriesItem type="column" data={currentRevenue} name="2025 Revenue" />
                        <ChartSeriesItem
                            type="line"
                            data={previousRevenue}
                            name="2024 Revenue"
                            markers={{ visible: true, size: 4 }}
                            style="smooth"
                        />
                        <ChartSeriesItem
                            type="line"
                            data={targetValues}
                            name="Target"
                            dashType="dash"
                            markers={{ visible: false }}
                        />
                    </ChartSeries>
                    <ChartValueAxis>
                        <ChartValueAxisItem labels={{ format: 'c0' }} />
                    </ChartValueAxis>
                    <ChartLegend position="bottom" />
                    <ChartTooltip shared={true} render={revenueTooltipRender} />
                </Chart>
            </div>

            <div className="chart-card">
                <div className="chart-header">
                    <h3 className="chart-title">Revenue by Category</h3>
                    <p className="chart-subtitle">Product category distribution</p>
                </div>
                <Chart className="donut-chart" donutCenterRender={donutCenterRender}>
                    <ChartSeries>
                        <ChartSeriesItem
                            type="donut"
                            data={productCategoryData}
                            categoryField="category"
                            field="value"
                            holeSize={70}
                        >
                            <ChartSeriesLabels position="outsideEnd" content={donutLabelContent} background="none" />
                            <ChartSeriesItemTooltip render={donutTooltipRender} />
                        </ChartSeriesItem>
                    </ChartSeries>
                    <ChartLegend position="bottom" />
                </Chart>
            </div>

            <div className="chart-card full-width">
                <div className="chart-header">
                    <h3 className="chart-title">Revenue Flow</h3>
                    <p className="chart-subtitle">Traffic source → product category → order outcome</p>
                </div>
                <Sankey className="sankey-chart" data={revenueFlowData} links={sankeyLinks} tooltip={sankeyTooltip} />
            </div>

            <div className="chart-card full-width">
                <div className="chart-header">
                    <h3 className="chart-title">Daily Stock Price</h3>
                    <p className="chart-subtitle">Candlestick chart with navigator (Jan–Mar 2025)</p>
                </div>
                <StockChart className="stock-chart">
                    <ChartSeries>
                        <ChartSeriesItem
                            type="candlestick"
                            data={stockPriceData}
                            openField="open"
                            closeField="close"
                            lowField="low"
                            highField="high"
                            categoryField="date"
                        />
                    </ChartSeries>
                    <ChartValueAxis>
                        <ChartValueAxisItem labels={{ format: 'c0' }} />
                    </ChartValueAxis>
                    <ChartNavigator>
                        <ChartNavigatorSelect from={new Date(2025, 0, 2)} to={new Date(2025, 2, 7)} />
                        <ChartNavigatorSeries>
                            <ChartNavigatorSeriesItem
                                type="area"
                                data={stockPriceData}
                                field="close"
                                categoryField="date"
                            />
                        </ChartNavigatorSeries>
                    </ChartNavigator>
                    <ChartTooltip render={stockTooltipRender} />
                </StockChart>
            </div>
        </div>
    </div>
);

export default App;
