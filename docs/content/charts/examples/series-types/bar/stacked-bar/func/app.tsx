import * as React from 'react';

import { Chart, ChartSeries, ChartSeriesItem, ChartLegend } from '@progress/kendo-react-charts';

const [firstSeries, secondSeries, thirdSeries] = [
    [1, 2, 3],
    [1, -1, 1],
    [1, -1, 1]
];

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem type="bar" name="Series 1" stack={true} data={firstSeries} tooltip={{ visible: true }} />
            <ChartSeriesItem type="bar" name="Series 2" data={secondSeries} tooltip={{ visible: true }} />
            <ChartSeriesItem type="bar" name="Series 3" data={thirdSeries} tooltip={{ visible: true }} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
