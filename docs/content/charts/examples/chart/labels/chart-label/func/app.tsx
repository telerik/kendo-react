import * as React from 'react';

import { Chart, ChartAxisDefaults, ChartSeries, ChartSeriesItem, ChartLegend } from '@progress/kendo-react-charts';

const seriesData: number[] = [2034, 40124, 45234, 30234, 50234];

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartAxisDefaults labels={{ format: 'c0' }} />
        <ChartSeries>
            <ChartSeriesItem type="line" name="Revenue" data={seriesData} tooltip={{ visible: true }} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
