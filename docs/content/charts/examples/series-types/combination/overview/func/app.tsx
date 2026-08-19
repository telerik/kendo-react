import * as React from 'react';

import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartTooltip
} from '@progress/kendo-react-charts';

import './demo-styles.css';

const ChartContainer = () => {
    const tooltipTemplate1 = (context) => {
        const { series, value } = context.point || context;
        if (!series) return null;
        let formattedValue;
        if (series.name === 'Revenue') {
            formattedValue = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(value);
        } else {
            formattedValue = new Intl.NumberFormat('en-US').format(value);
        }
        return (
            <div>
                <strong>{series.name}</strong>
                <br />
                <strong>{formattedValue}</strong>
            </div>
        );
    };

    const tooltipTemplate2 = (context) => {
        const { series, value } = context.point || context;
        if (!series) return null;
        let formattedValue;
        if (series.name === 'Sales') {
            formattedValue = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(value);
        } else {
            formattedValue = (value * 100).toFixed(0) + '%';
        }
        return (
            <div>
                <strong>{series.name}</strong>
                <br />
                <strong>{formattedValue}</strong>
            </div>
        );
    };

    const tooltipTemplate3 = (context) => {
        const { series, value } = context.point || context;
        if (!series) return null;
        let formattedValue;
        if (series.name === 'Energy') {
            formattedValue = new Intl.NumberFormat('en-US').format(value) + ' MWh';
        } else {
            formattedValue = value + '°C';
        }
        return (
            <div>
                <strong>{series.name}</strong>
                <br />
                <strong>{formattedValue}</strong>
            </div>
        );
    };

    const tooltipTemplate4 = (context) => {
        const { series, value } = context.point || context;
        if (!series) return null;
        let formattedValue;
        if (series.name === 'Visits') {
            formattedValue = new Intl.NumberFormat('en-US').format(value);
        } else {
            formattedValue = (value * 100).toFixed(1) + '%';
        }
        return (
            <div>
                <strong>{series.name}</strong>
                <br />
                <strong>{formattedValue}</strong>
            </div>
        );
    };

    return (
        <div className="charts-grid">
            {/* Column + Line */}
            <Chart>
                <ChartTitle text="Revenue & Orders" />
                <ChartLegend visible={false} />
                <ChartCategoryAxis>
                    <ChartCategoryAxisItem categories={['Q1', 'Q2', 'Q3', 'Q4']} axisCrossingValue={[0, 4]} />
                </ChartCategoryAxis>
                <ChartValueAxis>
                    <ChartValueAxisItem name="amount" labels={{ format: '$#,##', step: 2 }} />
                    <ChartValueAxisItem name="orders" labels={{ format: 'n0', step: 2 }} />
                </ChartValueAxis>
                <ChartTooltip render={tooltipTemplate1} />
                <ChartSeries>
                    <ChartSeriesItem
                        type="column"
                        name="Revenue"
                        data={[210000, 280000, 310000, 420000]}
                        axis="amount"
                        tooltip={{ visible: true }}
                    />
                    <ChartSeriesItem
                        type="line"
                        name="Orders"
                        data={[8400, 11200, 12400, 16800]}
                        axis="orders"
                        tooltip={{ visible: true }}
                    />
                </ChartSeries>
            </Chart>

            {/* Column + Area */}
            <Chart>
                <ChartTitle text="Sales & Margin" />
                <ChartLegend visible={false} />
                <ChartCategoryAxis>
                    <ChartCategoryAxisItem
                        categories={['Electronics', 'Clothing', 'Home', 'Sports']}
                        axisCrossingValue={[0, 4]}
                    />
                </ChartCategoryAxis>
                <ChartValueAxis>
                    <ChartValueAxisItem name="sales" labels={{ format: 'c0', step: 3 }} />
                    <ChartValueAxisItem name="margin" labels={{ format: 'p0' }} />
                </ChartValueAxis>
                <ChartTooltip render={tooltipTemplate2} />
                <ChartSeries>
                    <ChartSeriesItem
                        type="column"
                        name="Sales"
                        data={[185000, 124000, 96000, 142000]}
                        axis="sales"
                        tooltip={{ visible: true }}
                    />
                    <ChartSeriesItem
                        type="area"
                        name="Margin"
                        data={[0.22, 0.35, 0.28, 0.31]}
                        axis="margin"
                        tooltip={{ visible: true }}
                        opacity={0.5}
                    />
                </ChartSeries>
            </Chart>

            {/* Area + Line */}
            <Chart>
                <ChartTitle text="Energy & Temperature" />
                <ChartLegend visible={false} />
                <ChartCategoryAxis>
                    <ChartCategoryAxisItem categories={['Jan', 'Apr', 'Jul', 'Oct']} axisCrossingValue={[0, 4]} />
                </ChartCategoryAxis>
                <ChartValueAxis>
                    <ChartValueAxisItem name="energy" labels={{ format: '## MWh', step: 2 }} />
                    <ChartValueAxisItem
                        name="temp"
                        title={{ text: 'Avg. Temperature (°C)' }}
                        labels={{ format: 'n0', step: 5 }}
                    />
                </ChartValueAxis>
                <ChartTooltip render={tooltipTemplate3} />
                <ChartSeries>
                    <ChartSeriesItem
                        type="area"
                        name="Energy"
                        data={[580, 380, 310, 480]}
                        axis="energy"
                        tooltip={{ visible: true }}
                        opacity={0.6}
                    />
                    <ChartSeriesItem
                        type="line"
                        name="Temperature"
                        data={[2, 14, 25, 8]}
                        axis="temp"
                        tooltip={{ visible: true }}
                    />
                </ChartSeries>
            </Chart>

            {/* Bar + Area */}
            <Chart>
                <ChartTitle text="Traffic Source Performance" />
                <ChartLegend visible={false} />
                <ChartCategoryAxis>
                    <ChartCategoryAxisItem
                        categories={['Organic', 'Paid', 'Social', 'Referral']}
                        axisCrossingValue={[0, 4]}
                    />
                </ChartCategoryAxis>
                <ChartValueAxis>
                    <ChartValueAxisItem name="visits" labels={{ format: '#,##0,', step: 25 }} />
                    <ChartValueAxisItem name="conversion" labels={{ format: 'p0' }} />
                </ChartValueAxis>
                <ChartTooltip render={tooltipTemplate4} />
                <ChartSeries>
                    <ChartSeriesItem
                        type="bar"
                        name="Visits"
                        data={[95000, 72000, 58000, 42000]}
                        axis="visits"
                        tooltip={{ visible: true }}
                    />
                    <ChartSeriesItem
                        type="area"
                        name="Conversion"
                        data={[0.032, 0.045, 0.028, 0.062]}
                        axis="conversion"
                        tooltip={{ visible: true }}
                        opacity={0.5}
                    />
                </ChartSeries>
            </Chart>
        </div>
    );
};

export default ChartContainer;
