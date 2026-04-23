import * as React from 'react';

import { Chart, ChartSeries, ChartSeriesItem, ChartLegend } from '@progress/kendo-react-charts';

const data: object[] = [
    { x: 6.4, y: 13.4, xLow: 5, xHigh: 7, yLow: 12, yHigh: 14 },
    { x: 1.7, y: 11, xLow: 1, xHigh: 3, yLow: 11, yHigh: 14 },
    { x: 5.4, y: 8, xLow: 3, xHigh: 6, yLow: 5, yHigh: 8 }
];

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem
                type="scatterLine"
                name="Measurements"
                data={data}
                xErrorLowField="xLow"
                xErrorHighField="xHigh"
                yErrorLowField="yLow"
                yErrorHighField="yHigh"
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
