import * as React from 'react';

import { Chart, ChartSeries, ChartSeriesItem, ChartLegend } from '@progress/kendo-react-charts';

const [firstSeries, secondSeries] = [
    [1, 2, 3, 5],
    [1, 2, 3, 5]
];

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem type="bar" name="Series 1" gap={2} data={firstSeries} tooltip={{ visible: true }} />
            <ChartSeriesItem type="bar" name="Series 2" data={secondSeries} tooltip={{ visible: true }} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
