import * as React from 'react';

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartAxisDefaults,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend
} from '@progress/kendo-react-charts';

const seriesData: number[] = [20, 40, 45, 30, 50];
const categories: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartAxisDefaults line={{ color: 'red' }} labels={{ font: '12pt sans-serif' }} />
        <ChartSeries>
            <ChartSeriesItem type="line" name="Miles" data={seriesData} tooltip={{ visible: true }} />
        </ChartSeries>
        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={categories} />
        </ChartCategoryAxis>
    </Chart>
);

export default ChartContainer;
