import * as React from 'react';

import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartCategoryAxisCrosshair,
    ChartCategoryAxisCrosshairTooltip,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartValueAxisCrosshair,
    ChartValueAxisCrosshairTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
    DiagonalStripesPattern
} from '@progress/kendo-react-charts';

const seriesData: number[] = [1, 2, 3];
const categories: string[] = ['A', 'B', 'C'];

const diagonalPattern = {
    type: 'diagonalStripes',
    background: 'rgb(172, 88, 255)',
    width: 1.2,
    gap: 12
} as DiagonalStripesPattern;

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={categories}>
                <ChartCategoryAxisCrosshair>
                    <ChartCategoryAxisCrosshairTooltip />
                </ChartCategoryAxisCrosshair>
            </ChartCategoryAxisItem>
        </ChartCategoryAxis>
        <ChartValueAxis>
            <ChartValueAxisItem>
                <ChartValueAxisCrosshair>
                    <ChartValueAxisCrosshairTooltip />
                </ChartValueAxisCrosshair>
            </ChartValueAxisItem>
        </ChartValueAxis>
        <ChartSeries>
            <ChartSeriesItem
                type="column"
                name="Series"
                data={seriesData}
                color="rgb(255, 208, 223)"
                pattern={diagonalPattern}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
