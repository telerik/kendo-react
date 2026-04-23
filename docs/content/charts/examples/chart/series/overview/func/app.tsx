import * as React from 'react';

import { Chart, ChartSeries, ChartSeriesItem, ChartLegend } from '@progress/kendo-react-charts';

const seriesData = {
    one: [
        [10, 10],
        [15, 20],
        [20, 25],
        [32, 40],
        [43, 50],
        [55, 60],
        [60, 70],
        [70, 80],
        [90, 100]
    ],
    two: [
        [10, 40],
        [17, 50],
        [18, 70],
        [35, 90],
        [47, 95],
        [60, 100]
    ]
};

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem type="scatterLine" name="Series One" data={seriesData.one} tooltip={{ visible: true }} />
            <ChartSeriesItem type="scatterLine" name="Series Two" data={seriesData.two} tooltip={{ visible: true }} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
