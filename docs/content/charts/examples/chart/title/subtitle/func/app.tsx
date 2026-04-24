import * as React from 'react';

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartSubtitle,
    ChartTitle,
    ChartLegend,
    GridPattern,
    CrosshatchPattern
} from '@progress/kendo-react-charts';

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
        <ChartTitle text="Main Title" />
        <ChartSubtitle text="Subtitle" />
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem
                name="Fibonacci"
                type="column"
                data={[1, 2, 3, 5]}
                color="rgb(255, 99, 88)"
                pattern={myPatterns.grid}
                tooltip={{ visible: true }}
            />
            <ChartSeriesItem
                name="Squares"
                type="column"
                data={[0, 1, 4, 9]}
                color="rgb(177, 140, 255)"
                pattern={myPatterns.crosshatch}
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
