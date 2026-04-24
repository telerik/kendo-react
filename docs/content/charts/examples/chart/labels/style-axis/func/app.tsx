import * as React from 'react';

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend
} from '@progress/kendo-react-charts';

const categories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const seriesData = [20, 40, 45, 30, 50];

const valueAxisLabels = {
    padding: 3,
    font: 'bold 16px Arial, sans-serif'
};

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={categories} labels={{ color: '#0a0' }} />
        </ChartCategoryAxis>
        <ChartValueAxis>
            <ChartValueAxisItem labels={valueAxisLabels} />
        </ChartValueAxis>
        <ChartSeries>
            <ChartSeriesItem type="line" name="Series" data={seriesData} tooltip={{ visible: true }} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
