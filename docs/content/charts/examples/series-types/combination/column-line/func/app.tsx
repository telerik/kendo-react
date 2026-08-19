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

const monthlyRevenue = [210000, 190000, 240000, 280000, 310000, 290000, 320000, 300000, 270000, 340000, 420000, 510000];

const monthlyOrders = [8400, 7600, 9600, 11200, 12400, 11600, 12800, 12000, 10800, 13600, 16800, 20400];

const TooltipTemplate = (context) => {
    const { category, series, value } = context.point || context;
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
            <strong>{category}</strong>
            <br />
            {series.name}: <strong>{formattedValue}</strong>
        </div>
    );
};

const ChartContainer = () => (
    <Chart style={{ height: '350px' }}>
        <ChartTitle text="Monthly E-Commerce Performance (2025)" />

        <ChartLegend position="bottom" />

        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={categories} axisCrossingValue={[0, 12]} />
        </ChartCategoryAxis>

        <ChartValueAxis>
            <ChartValueAxisItem name="revenue" title={{ text: 'Revenue ($)' }} labels={{ format: 'c0' }} />
            <ChartValueAxisItem name="orders" title={{ text: 'Orders' }} labels={{ format: 'n0' }} />
        </ChartValueAxis>

        <ChartTooltip render={TooltipTemplate} />

        <ChartSeries>
            <ChartSeriesItem
                type="column"
                data={monthlyRevenue}
                name="Revenue"
                axis="revenue"
                tooltip={{ visible: true }}
            />
            <ChartSeriesItem type="line" data={monthlyOrders} name="Orders" axis="orders" tooltip={{ visible: true }} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
