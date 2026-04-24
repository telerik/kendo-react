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
    CrosshatchPattern
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
    crosshatch: {
        type: 'crosshatch',
        background: 'rgb(172, 88, 255)',
        width: 1.2,
        gap: 12
    } as CrosshatchPattern
};

const SharedTooltip = (props) => {
    const { category, points } = props;

    return (
        <div>
            <div>{category}</div>
            {points.map((point, i) => (
                <div key={i}>
                    {point.series.name} : {point.value}
                </div>
            ))}
        </div>
    );
};

const sharedTooltipRender = (context) => <SharedTooltip {...context} />;

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartTooltip shared={true} render={sharedTooltipRender} />
        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={categories} />
        </ChartCategoryAxis>
        <ChartSeries>
            <ChartSeriesItem
                type="column"
                name="A"
                data={seriesData}
                color="rgb(148, 236, 255)"
                pattern={myPatterns.verticalStripes}
            />
            <ChartSeriesItem
                type="column"
                name="B"
                data={seriesData}
                color="rgb(177, 140, 255)"
                pattern={myPatterns.crosshatch}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
