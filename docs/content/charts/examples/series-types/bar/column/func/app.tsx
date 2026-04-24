import * as React from 'react';

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
    VerticalStripesPattern,
    CrosshatchPattern
} from '@progress/kendo-react-charts';

const [firstSeries, secondSeries]: number[][] = [
    [1, 2, 3, 5],
    [-1, -2, -3, -5]
];

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

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem
                type="column"
                name="Positive"
                data={firstSeries}
                color="rgb(148, 236, 255)"
                pattern={myPatterns.verticalStripes}
                tooltip={{ visible: true }}
            />
            <ChartSeriesItem
                type="column"
                name="Negative"
                data={secondSeries}
                color="rgb(250, 201, 187)"
                pattern={myPatterns.crosshatch}
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
