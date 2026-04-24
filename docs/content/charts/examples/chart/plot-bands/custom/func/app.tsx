import * as React from 'react';

import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
    GridPattern
} from '@progress/kendo-react-charts';

const categories = ['A', 'B', 'C'];
const series = [1, 2, 3];

const myPatterns = {
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
        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={categories} />
        </ChartCategoryAxis>
        <ChartValueAxis>
            <ChartValueAxisItem />
        </ChartValueAxis>
        <ChartSeries>
            <ChartSeriesItem
                type="column"
                name="Series"
                data={series}
                color="rgb(255, 99, 88)"
                pattern={myPatterns.grid}
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
