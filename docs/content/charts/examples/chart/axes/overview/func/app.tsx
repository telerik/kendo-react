import * as React from 'react';

import {
    Chart,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend
} from '@progress/kendo-react-charts';

const seriesData = [20, 40, 45, 30, 50];
const categories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartValueAxis>
            <ChartValueAxisItem title={{ text: 'Miles' }} min={0} max={100} />
        </ChartValueAxis>
        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={categories} />
        </ChartCategoryAxis>
        <ChartSeries>
            <ChartSeriesItem name="Miles" data={seriesData} type="line" tooltip={{ visible: true }} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
