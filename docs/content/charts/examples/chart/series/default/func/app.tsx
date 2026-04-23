import * as React from 'react';

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeriesDefaults,
    ChartLegend,
    VerticalStripesPattern,
    GridPattern
} from '@progress/kendo-react-charts';

const salesData = [20, 40, 45, 30, 50];
const purchaseData = [12, 30, 30, 45, 10];
const categories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const myPatterns = {
    verticalStripes: {
        type: 'verticalStripes',
        background: 'rgb(75, 96, 250)',
        width: 1.2,
        gap: 12
    } as VerticalStripesPattern,
    grid: {
        type: 'grid',
        background: 'rgb(255, 148, 109)',
        size: 12,
        gap: 1.2
    } as GridPattern
};

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeriesDefaults type="bar" labels={{ format: 'c' }} />
        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={categories} />
        </ChartCategoryAxis>
        <ChartSeries>
            <ChartSeriesItem
                name="Sales"
                data={salesData}
                color="rgb(148, 236, 255)"
                pattern={myPatterns.verticalStripes}
                tooltip={{ visible: true }}
            />
            <ChartSeriesItem
                name="Purchases"
                data={purchaseData}
                color="rgb(255, 99, 88)"
                pattern={myPatterns.grid}
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
