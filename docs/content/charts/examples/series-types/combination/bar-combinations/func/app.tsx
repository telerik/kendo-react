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

const categories = ['Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Automotive', 'Beauty'];

const categorySales = [185, 124, 96, 78, 142, 58];
const profitMargin = [0.22, 0.35, 0.28, 0.31, 0.18, 0.42];

const categoryOrders = [370, 1550, 800, 1200, 355, 1290];
const returnRate = [0.15, 0.25, 0.08, 0.1, 0.05, 0.12];

const TooltipTemplate = (context) => {
    const { series, value } = context.point || context;
    if (!series) return null;
    let formattedValue;

    if (series.name === 'Profit Margin' || series.name === 'Return Rate') {
        formattedValue = new Intl.NumberFormat('en-US', {
            style: 'percent',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    } else if (series.name === 'Sales') {
        formattedValue = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value * 1000);
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

const ChartContainer = () => (
    <div className="charts-grid">
        {/* Bar + Line: Sales and Profit Margin */}
        <Chart>
            <ChartTitle text="Category Sales & Profit Margin" />
            <ChartLegend position="bottom" />
            <ChartCategoryAxis>
                <ChartCategoryAxisItem
                    categories={categories}
                    axisCrossingValue={[0, 6]}
                    labels={{ rotation: 'auto' }}
                />
            </ChartCategoryAxis>
            <ChartValueAxis>
                <ChartValueAxisItem
                    name="sales"
                    title={{ text: 'Sales ($)' }}
                    labels={{ format: '$#K', step: 2, rotation: 'auto' }}
                />
                <ChartValueAxisItem
                    name="margin"
                    title={{ text: 'Profit Margin' }}
                    orientation="right"
                    labels={{ format: 'p0' }}
                    min={0}
                    max={0.6}
                />
            </ChartValueAxis>
            <ChartTooltip render={TooltipTemplate} />
            <ChartSeries>
                <ChartSeriesItem
                    type="bar"
                    data={categorySales}
                    name="Sales"
                    axis="sales"
                    tooltip={{ visible: true }}
                />
                <ChartSeriesItem
                    type="line"
                    data={profitMargin}
                    name="Profit Margin"
                    axis="margin"
                    tooltip={{ visible: true }}
                />
            </ChartSeries>
        </Chart>

        {/* Bar + Area: Orders and Return Rate */}
        <Chart>
            <ChartTitle text="Category Orders & Return Rate" />
            <ChartLegend position="bottom" />
            <ChartCategoryAxis>
                <ChartCategoryAxisItem
                    categories={categories}
                    axisCrossingValue={[0, 6]}
                    labels={{ rotation: 'auto' }}
                />
            </ChartCategoryAxis>
            <ChartValueAxis>
                <ChartValueAxisItem
                    name="orders"
                    title={{ text: 'Orders' }}
                    labels={{ format: 'n0', rotation: 'auto' }}
                />
                <ChartValueAxisItem
                    name="returns"
                    title={{ text: 'Return Rate' }}
                    orientation="right"
                    labels={{ format: 'p0' }}
                    min={0}
                    max={0.4}
                />
            </ChartValueAxis>
            <ChartTooltip render={TooltipTemplate} />
            <ChartSeries>
                <ChartSeriesItem
                    type="bar"
                    data={categoryOrders}
                    name="Orders"
                    axis="orders"
                    tooltip={{ visible: true }}
                />
                <ChartSeriesItem
                    type="area"
                    data={returnRate}
                    name="Return Rate"
                    axis="returns"
                    tooltip={{ visible: true }}
                    opacity={0.6}
                />
            </ChartSeries>
        </Chart>
    </div>
);

export default ChartContainer;
