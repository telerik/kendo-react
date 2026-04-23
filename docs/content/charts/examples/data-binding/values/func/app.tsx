import * as React from 'react';

import { Chart, ChartSeries, ChartSeriesItem, ChartLegend, GridPattern } from '@progress/kendo-react-charts';

const seriesData = [1, 2, 3, 5];

const myPattern = {
    type: 'grid',
    background: 'rgb(255, 148, 109)',
    size: 12,
    gap: 1.2
} as GridPattern;

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem
                type="column"
                name="Series"
                data={seriesData}
                color="rgb(255, 99, 88)"
                pattern={myPattern}
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
