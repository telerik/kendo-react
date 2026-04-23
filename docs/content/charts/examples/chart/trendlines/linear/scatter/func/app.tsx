import * as React from 'react';

import { Chart, ChartSeries, ChartSeriesItem, ChartTitle, ChartLegend } from '@progress/kendo-react-charts';

const ChartContainer = () => (
    <Chart>
        <ChartTitle text="Trendlines" />
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem
                name="Series A"
                type="scatter"
                data={[
                    [5, 5],
                    [6, 10],
                    [7, 6],
                    [8, 9],
                    [9, 6],
                    [10, 10],
                    [11, 5],
                    [12, 13],
                    [13, 3],
                    [14, 16],
                    [15, 1],
                    [16, 19],
                    [17, 1],
                    [18, 20],
                    [19, 2],
                    [20, 18],
                    [21, 5],
                    [22, 12],
                    [23, 7],
                    [24, 10],
                    [25, 8]
                ]}
                tooltip={{ visible: true }}
            />
            <ChartSeriesItem
                name="Sales Trendline (LINEAR)"
                type="linearTrendline"
                dashType="solid"
                for="Series A"
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
