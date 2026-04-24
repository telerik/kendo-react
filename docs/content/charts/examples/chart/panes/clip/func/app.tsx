import * as React from 'react';

import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartPane,
    ChartPanes,
    ChartSeries,
    ChartSeriesItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartLegend,
    VerticalStripesPattern,
    CrosshatchPattern
} from '@progress/kendo-react-charts';

const seriesData = [1, 2, 3, 5];

const verticalPattern = {
    type: 'verticalStripes',
    background: 'rgb(75, 96, 250)',
    width: 1.2,
    gap: 12
} as VerticalStripesPattern;

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
            <ChartPane name="top" clip={false} title="Clipping Disabled" />
            <ChartPane name="bottom" title="Clipping enabled (default)" />
        </ChartPanes>
        <ChartCategoryAxis>
            <ChartCategoryAxisItem justified={true} />
        </ChartCategoryAxis>
        <ChartValueAxis>
            <ChartValueAxisItem name="top" />
            <ChartValueAxisItem name="bottom" pane="bottom" />
        </ChartValueAxis>
        <ChartSeries>
            <ChartSeriesItem
                type="column"
                name="Top Pane"
                data={seriesData}
                color="rgb(148, 236, 255)"
                pattern={verticalPattern}
                tooltip={{ visible: true }}
            />
            <ChartSeriesItem
                type="column"
                name="Bottom Pane"
                data={seriesData}
                axis="bottom"
                color="rgb(250, 201, 187)"
                pattern={crosshatchPattern}
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
