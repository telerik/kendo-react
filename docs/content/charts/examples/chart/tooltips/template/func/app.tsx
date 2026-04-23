import * as React from 'react';

import {
    Chart,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesItemTooltip,
    TooltipContext,
    ChartLegend,
    GridPattern,
    DiagonalStripesPattern
} from '@progress/kendo-react-charts';

const seriesData: number[] = [1, 2, 3];

const defaultTooltipRender = (e: TooltipContext) => `Default Content ${e.point.value}`;

const nestedTooltipRender = ({ point }) => (
    <span>
        <b>Series 1 value: {point.value}</b>
    </span>
);

const myPatterns = {
    grid: {
        type: 'grid',
        background: 'rgb(255, 148, 109)',
        size: 12,
        gap: 1.2
    } as GridPattern,
    diagonalStripes: {
        type: 'diagonalStripes',
        background: 'rgb(172, 88, 255)',
        width: 1.2,
        gap: 12
    } as DiagonalStripesPattern
};

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartTooltip render={defaultTooltipRender} />
        <ChartSeries>
            <ChartSeriesItem
                type="column"
                name="Series A"
                data={seriesData}
                color="rgb(255, 99, 88)"
                pattern={myPatterns.grid}
            />
            <ChartSeriesItem
                type="column"
                name="Series B"
                data={seriesData}
                color="rgb(177, 140, 255)"
                pattern={myPatterns.diagonalStripes}
            >
                <ChartSeriesItemTooltip render={nestedTooltipRender} />
            </ChartSeriesItem>
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
