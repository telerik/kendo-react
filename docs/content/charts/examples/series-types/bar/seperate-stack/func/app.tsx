import * as React from 'react';

import { Chart, ChartSeries, ChartSeriesItem, ChartLegend } from '@progress/kendo-react-charts';

const [firstSeries, secondSeries, thirdSeries]: number[][] = [
    [1, 2, 3],
    [1, 1, 1],
    [1, 1, 1]
];

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem
                type="bar"
                name="Series A"
                stack={{ group: 'a' }}
                data={firstSeries}
                tooltip={{ visible: true }}
            />
            <ChartSeriesItem
                type="bar"
                name="Series B"
                stack={{ group: 'a' }}
                data={secondSeries}
                tooltip={{ visible: true }}
            />
            <ChartSeriesItem
                type="bar"
                name="Series C"
                stack={{ group: 'b' }}
                data={thirdSeries}
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
