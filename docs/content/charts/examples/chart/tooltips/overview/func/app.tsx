import * as React from 'react';

import {
    Chart,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesItemTooltip,
    ChartLegend,
    GridPattern,
    CrosshatchPattern
} from '@progress/kendo-react-charts';

const seriesData: number[] = [1, 2, 3];

const myPatterns = {
    grid: {
        type: 'grid',
        background: 'rgb(255, 148, 109)',
        size: 12,
        gap: 1.2
    } as GridPattern,
    crosshatch: {
        type: 'crosshatch',
        background: 'rgb(172, 88, 255)',
        width: 1.2,
        gap: 12
    } as CrosshatchPattern
};

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartTooltip />
        <ChartSeries>
            <ChartSeriesItem
                name="Series A"
                type="column"
                data={seriesData}
                color="rgb(255, 99, 88)"
                pattern={myPatterns.grid}
            />
            <ChartSeriesItem
                name="Series B"
                type="column"
                data={seriesData}
                color="rgb(177, 140, 255)"
                pattern={myPatterns.crosshatch}
            >
                <ChartSeriesItemTooltip background="green" />
            </ChartSeriesItem>
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
