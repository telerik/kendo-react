import * as React from 'react';

import {
    Chart,
    ChartPlotArea,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
    CrosshatchPattern
} from '@progress/kendo-react-charts';

const seriesData: number[] = [1, 2, 3, 5];

const crosshatchPattern = {
    type: 'crosshatch',
    background: 'rgb(172, 88, 255)',
    width: 1.2,
    gap: 12
} as CrosshatchPattern;

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartPlotArea background="#888" />
        <ChartSeries>
            <ChartSeriesItem
                type="column"
                name="Series"
                data={seriesData}
                color="rgb(148, 236, 255)"
                pattern={crosshatchPattern}
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
