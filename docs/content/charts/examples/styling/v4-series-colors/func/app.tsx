import * as React from 'react';

import { Chart, ChartSeries, ChartSeriesItem } from '@progress/kendo-react-charts';

const chartDefaultV4Colors: string[] = ['#ff6358', '#ffd246', '#78d237', '#28b4c8', '#2d73f5', '#aa46be'];

const chartBootstrapV4Colors: string[] = ['#0275d8', '#5bc0de', '#5cb85c', '#f0ad4e', '#e67d4a', '#d9534f'];

const chartMaterialV4Colors: string[] = ['#3f51b5', '#2196f3', '#43a047', '#ffc107', '#ff5722', '#e91e63'];

const ChartContainer = () => (
    <Chart seriesColors={chartDefaultV4Colors}>
        <ChartSeries>
            <ChartSeriesItem data={[1, 2, 3, 4, 5]} />
            <ChartSeriesItem data={[5, 4, 3, 2, 1]} />
            <ChartSeriesItem data={[1, 3, 5, 3, 1]} />
            <ChartSeriesItem data={[5, 3, 1, 3, 5]} />
            <ChartSeriesItem data={[3, 1, 5, 1, 3]} />
            <ChartSeriesItem data={[2, 4, 2, 4, 2]} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
