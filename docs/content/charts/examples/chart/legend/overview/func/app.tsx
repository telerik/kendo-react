import * as React from 'react';

import { Chart, ChartLegend, ChartSeries, ChartSeriesItem } from '@progress/kendo-react-charts';

const seriesData = [1, 2, 3, 5];
const ChartContainer = () => (
    <Chart>
        <ChartLegend position="bottom" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem name="Fibonacci" data={seriesData} tooltip={{ visible: true }} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
