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

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const revenue = [210000, 190000, 240000, 280000, 310000, 290000, 320000, 300000, 270000, 340000, 420000, 510000];
const orders = [8400, 7600, 9600, 11200, 12400, 11600, 12800, 12000, 10800, 13600, 16800, 20400];

const revenuePriorYear = [
    185000, 168000, 212000, 248000, 277000, 262000, 290000, 274000, 246000, 307000, 378000, 462000
];

const TooltipTemplate = (context) => {
    const { category, series, value } = context.point || context;
    if (!series) return null;
    let formattedValue;
    if (series.name === 'Orders') {
        formattedValue = new Intl.NumberFormat('en-US').format(value);
    } else {
        formattedValue = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    }

    return (
        <div>
            <strong>{category}</strong>
            <br />
            {series.name}: <strong>{formattedValue}</strong>
        </div>
    );
};

const ChartContainer = () => (
    <div className="charts-grid">
        {/* Column + Line: Revenue and Order Volume */}
        <Chart>
            <ChartTitle text="Revenue & Order Volume" />
            <ChartLegend position="bottom" />
            <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={months} axisCrossingValue={[0, 12]} labels={{ rotation: 'auto' }} />
            </ChartCategoryAxis>
            <ChartValueAxis>
                <ChartValueAxisItem name="revenue" title={{ text: 'Revenue ($)' }} labels={{ format: 'c0' }} />
                <ChartValueAxisItem name="orders" title={{ text: 'Orders' }} labels={{ format: 'n0' }} />
            </ChartValueAxis>
            <ChartTooltip render={TooltipTemplate} />
            <ChartSeries>
                <ChartSeriesItem
                    type="column"
                    data={revenue}
                    name="Revenue"
                    axis="revenue"
                    tooltip={{ visible: true }}
                />
                <ChartSeriesItem type="line" data={orders} name="Orders" axis="orders" tooltip={{ visible: true }} />
            </ChartSeries>
        </Chart>

        {/* Column + Area: 2025 vs 2024 Revenue */}
        <Chart>
            <ChartTitle text="Revenue: 2025 vs. 2024" />
            <ChartLegend position="bottom" />
            <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={months} labels={{ rotation: 'auto' }} />
            </ChartCategoryAxis>
            <ChartValueAxis>
                <ChartValueAxisItem labels={{ format: 'c0' }} />
            </ChartValueAxis>
            <ChartTooltip render={TooltipTemplate} />
            <ChartSeries>
                <ChartSeriesItem type="column" data={revenue} name="2025 Revenue" tooltip={{ visible: true }} />
                <ChartSeriesItem
                    type="area"
                    data={revenuePriorYear}
                    name="2024 Revenue"
                    tooltip={{ visible: true }}
                    opacity={0.5}
                />
            </ChartSeries>
        </Chart>
    </div>
);

export default ChartContainer;
