import * as React from 'react';

import {
    Chart,
    ChartYAxis,
    ChartYAxisItem,
    ChartXAxis,
    ChartXAxisItem,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';

const seriesData: number[][] = [
    [1, 1],
    [2, 2],
    [3, 3]
];

const ChartContainer = () => (
    <Chart>
        <ChartXAxis>
            <ChartXAxisItem crosshair={{ visible: true, tooltip: { visible: true } }} />
        </ChartXAxis>
        <ChartYAxis>
            <ChartYAxisItem crosshair={{ visible: true, tooltip: { visible: true } }} />
        </ChartYAxis>
        <ChartSeries>
            <ChartSeriesItem type="scatter" data={seriesData} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
