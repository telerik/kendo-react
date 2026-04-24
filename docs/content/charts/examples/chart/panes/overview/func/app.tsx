import * as React from 'react';

import {
    Chart,
    ChartPanes,
    ChartPane,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
    CrosshatchPattern
} from '@progress/kendo-react-charts';

const seriesData = [
    [1, 2, 3, 5],
    [0, 1, 0, 1]
];

const crosshatchPattern = {
    type: 'crosshatch',
    background: 'rgb(172, 88, 255)',
    width: 1.2,
    gap: 12
} as CrosshatchPattern;

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartPanes>
            <ChartPane name="top" />
            <ChartPane name="bottom" height={100} />
        </ChartPanes>
        <ChartValueAxis>
            <ChartValueAxisItem name="top" />
            <ChartValueAxisItem name="bottom" pane="bottom" />
        </ChartValueAxis>
        <ChartSeries>
            <ChartSeriesItem
                type="column"
                name="Series A"
                data={seriesData[0]}
                color="rgb(148, 236, 255)"
                pattern={crosshatchPattern}
                tooltip={{ visible: true }}
            />
            <ChartSeriesItem
                type="line"
                name="Series B"
                data={seriesData[1]}
                axis="bottom"
                color="rgb(250, 201, 187)"
                pattern={crosshatchPattern}
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
