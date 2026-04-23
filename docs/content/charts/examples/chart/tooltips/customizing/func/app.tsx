import * as React from 'react';

import {
    Chart,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesItemTooltip,
    ChartLegend,
    DiagonalStripesPattern,
    DotsPattern
} from '@progress/kendo-react-charts';

const seriesData: number[] = [1, 2, 3];

const myPatterns = {
    diagonalStripes: {
        type: 'diagonalStripes',
        background: 'rgb(255, 146, 184)',
        width: 1.2,
        gap: 12
    } as DiagonalStripesPattern,
    dots: {
        type: 'dots',
        background: 'rgb(172, 88, 255)',
        radius: 6,
        gap: 8
    } as DotsPattern
};

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartTooltip format="Default Content {0}" />
        <ChartSeries>
            <ChartSeriesItem
                type="column"
                name="Series A"
                data={seriesData}
                color="rgb(255, 99, 88)"
                pattern={myPatterns.diagonalStripes}
            />
            <ChartSeriesItem
                type="column"
                name="Series B"
                data={seriesData}
                color="rgb(177, 140, 255)"
                pattern={myPatterns.dots}
            >
                <ChartSeriesItemTooltip format="Series 1 value: {0}" />
            </ChartSeriesItem>
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
