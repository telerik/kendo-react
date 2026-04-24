import * as React from 'react';

import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
    VerticalStripesPattern,
    DotsPattern
} from '@progress/kendo-react-charts';

const seriesData: number[] = [1, 2, 3];
const categories: string[] = ['A', 'B', 'C'];

const myPatterns = {
    verticalStripes: {
        type: 'verticalStripes',
        background: 'rgb(75, 96, 250)',
        width: 1.2,
        gap: 12
    } as VerticalStripesPattern,
    dots: {
        type: 'dots',
        background: 'rgba(255, 255, 99, 0.5)',
        radius: 7.2,
        gap: 3.6
    } as DotsPattern
};

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartTooltip shared={true} />
        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={categories} />
        </ChartCategoryAxis>
        <ChartSeries>
            <ChartSeriesItem
                type="column"
                name="Series A"
                data={seriesData}
                color="rgb(148, 236, 255)"
                pattern={myPatterns.verticalStripes}
            />
            <ChartSeriesItem
                type="column"
                name="Series B"
                data={seriesData}
                color="rgb(177, 193, 61)"
                pattern={myPatterns.dots}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
