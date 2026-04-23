import * as React from 'react';

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartXAxis,
    ChartXAxisItem,
    ChartYAxis,
    ChartYAxisItem,
    ChartLegend
} from '@progress/kendo-react-charts';

const seriesData = [
    [16.4, 5.4],
    [21.7, 2],
    [25.4, 3],
    [19, 2],
    [10.9, 1],
    [13.6, 3.2],
    [10.9, 7.4],
    [10.9, 0],
    [10.9, 8.2],
    [16.4, 0]
];

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem type="scatter" name="Weather Data" data={seriesData} tooltip={{ visible: true }} />
        </ChartSeries>
        <ChartXAxis>
            <ChartXAxisItem title={{ text: 'Rainfall' }} />
        </ChartXAxis>
        <ChartYAxis>
            <ChartYAxisItem title={{ text: 'Windspeed' }} />
        </ChartYAxis>
    </Chart>
);

export default ChartContainer;
