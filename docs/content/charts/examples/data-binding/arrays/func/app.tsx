import * as React from 'react';

import { Chart, ChartSeries, ChartSeriesItem, ChartLegend } from '@progress/kendo-react-charts';

const seriesData: number[][] = [
    [1, 1, 10],
    [2, 2, 20],
    [3, 3, 30]
];

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem type="bubble" name="Bubble Series" data={seriesData} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
