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

const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const revenue = [
    840000, 760000, 960000, 1120000, 1240000, 1160000, 1280000, 1200000, 1080000, 1360000, 1680000, 2040000
];

const profit = [185000, 162000, 221000, 268000, 304000, 278000, 320000, 295000, 249000, 340000, 437000, 551000];

const grossMargin = [0.22, 0.21, 0.23, 0.24, 0.245, 0.24, 0.25, 0.246, 0.23, 0.25, 0.26, 0.27];

const TooltipTemplate = (context) => {
    const { category, series, value } = context.point || context;
    if (!series) return null;
    let formattedValue;
    if (series.name === 'Gross Margin') {
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
        <ChartTitle text="Retail Performance Dashboard (2025)" />

        <ChartLegend position="bottom" />

        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={categories} axisCrossingValue={[0, 12]} />
        </ChartCategoryAxis>

        <ChartValueAxis>
            <ChartValueAxisItem name="amount" title={{ text: 'Amount ($)' }} labels={{ format: 'c0' }} />
            <ChartValueAxisItem
                name="margin"
                title={{ text: 'Gross Margin' }}
                min={0}
                max={0.5}
                labels={{ format: 'p0' }}
            />
        </ChartValueAxis>

        <ChartTooltip render={TooltipTemplate} />

        <ChartSeries>
            <ChartSeriesItem type="column" data={revenue} name="Revenue" axis="amount" tooltip={{ visible: true }} />
            <ChartSeriesItem type="line" data={profit} name="Profit" axis="amount" tooltip={{ visible: true }} />
            <ChartSeriesItem
                type="area"
                data={grossMargin}
                name="Gross Margin"
                axis="margin"
                tooltip={{ visible: true }}
                opacity={0.3}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
