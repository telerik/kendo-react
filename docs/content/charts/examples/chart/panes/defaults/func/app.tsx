import * as React from 'react';

import {
    Chart,
    ChartPane,
    ChartPaneDefaults,
    ChartPaneDefaultsTitle,
    ChartPanes,
    ChartSeries,
    ChartSeriesItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartLegend,
    VerticalStripesPattern,
    DiagonalStripesPattern
} from '@progress/kendo-react-charts';

const seriesData = [
    [1, 2, 3, 5],
    [5, 4, 3, 1]
];

const verticalPattern = {
    type: 'verticalStripes',
    background: 'rgb(75, 96, 250)',
    width: 1.2,
    gap: 12
} as VerticalStripesPattern;

const diagonalPattern = {
    type: 'diagonalStripes',
    background: 'rgb(255, 146, 184)',
    width: 1.2,
    gap: 12
} as DiagonalStripesPattern;

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartPaneDefaults margin={10}>
            <ChartPaneDefaultsTitle font="700 18px sans-serif" />
        </ChartPaneDefaults>
        <ChartPanes>
            <ChartPane name="top" title="Sales" />
            <ChartPane name="bottom" title="Inventory" />
        </ChartPanes>
        <ChartValueAxis>
            <ChartValueAxisItem name="top" />
            <ChartValueAxisItem name="bottom" pane="bottom" />
        </ChartValueAxis>
        <ChartSeries>
            <ChartSeriesItem
                type="column"
                name="Sales"
                data={seriesData[0]}
                color="rgb(148, 236, 255)"
                pattern={verticalPattern}
                tooltip={{ visible: true }}
            />
            <ChartSeriesItem
                type="column"
                name="Inventory"
                data={seriesData[1]}
                axis="bottom"
                color="rgb(255, 208, 223)"
                pattern={diagonalPattern}
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
