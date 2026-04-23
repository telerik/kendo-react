import * as React from 'react';

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartLegend
} from '@progress/kendo-react-charts';

const seriesData: number[] = [20, 40, 45, 30, 50];
const suffix = ' ms';
const labelContent = (e: any) => e.value + suffix;

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartValueAxis>
            <ChartValueAxisItem labels={{ content: labelContent }} />
        </ChartValueAxis>
        <ChartSeries>
            <ChartSeriesItem type="line" name="Response Time" data={seriesData} tooltip={{ visible: true }} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
