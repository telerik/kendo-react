import * as React from 'react';

import { Chart, ChartSeries, ChartSeriesItem, SeriesErrorBars, ChartLegend } from '@progress/kendo-react-charts';

const data: number[] = [1, 3, 2];
const errorBars: SeriesErrorBars = { value: 1 };

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem name="Series" data={data} errorBars={errorBars} tooltip={{ visible: true }} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
