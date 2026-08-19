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

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const revenue = [45000, 52000, 48000, 61000, 55000, 67000];

const expenses = [28000, 32000, 30000, 38000, 35000, 42000];

const profit = [17000, 20000, 18000, 23000, 20000, 25000];

const TooltipTemplate = (context) => {
    const { series, value } = context.point || context;
    if (!series) return null;
    const formattedValue = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
    return (
        <div>
            <strong>{series.name}</strong>
            <br />
            <strong>{formattedValue}</strong>
        </div>
    );
};

const ChartContainer = () => (
    <Chart style={{ height: '350px' }}>
        <ChartTitle text="Financial Overview - Shared Axis" />

        <ChartLegend position="bottom" />

        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={months} />
        </ChartCategoryAxis>

        <ChartValueAxis>
            <ChartValueAxisItem title={{ text: 'Amount ($)' }} labels={{ format: 'c0' }} />
        </ChartValueAxis>

        <ChartTooltip render={TooltipTemplate} />

        <ChartSeries>
            <ChartSeriesItem type="column" data={revenue} name="Revenue" tooltip={{ visible: true }} />
            <ChartSeriesItem type="column" data={expenses} name="Expenses" tooltip={{ visible: true }} />
            <ChartSeriesItem type="line" data={profit} name="Profit" tooltip={{ visible: true }} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
