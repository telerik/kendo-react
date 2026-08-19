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

const categories = ['Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Automotive', 'Beauty'];

const categorySales = [185000, 124000, 96000, 78000, 142000, 58000];

const profitMargin = [0.22, 0.35, 0.28, 0.31, 0.18, 0.42];

const TooltipTemplate = (context) => {
    const { category, series, value } = context.point || context;
    if (!series) return null;
    let formattedValue;
    if (series.name === 'Profit Margin') {
        formattedValue = new Intl.NumberFormat('en-US', { style: 'percent' }).format(value);
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
    <Chart style={{ height: '350px' }}>
        <ChartTitle text="Product Category Sales vs. Profit Margin (Q4 2025)" />

        <ChartLegend position="bottom" />

        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={categories} axisCrossingValue={[0, 6]} />
        </ChartCategoryAxis>

        <ChartValueAxis>
            <ChartValueAxisItem name="sales" title={{ text: 'Sales ($)' }} labels={{ format: 'c0' }} />
            <ChartValueAxisItem
                name="margin"
                title={{ text: 'Profit Margin' }}
                labels={{ format: 'p0' }}
                min={0}
                max={0.6}
            />
        </ChartValueAxis>

        <ChartTooltip render={TooltipTemplate} />

        <ChartSeries>
            <ChartSeriesItem type="bar" data={categorySales} name="Sales" axis="sales" tooltip={{ visible: true }} />
            <ChartSeriesItem
                type="line"
                data={profitMargin}
                name="Profit Margin"
                axis="margin"
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
