import * as React from 'react';

import {
    Chart,
    ChartArea,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
    VerticalStripesPattern,
    CrosshatchPattern,
    DiagonalStripesPattern,
    GridPattern,
    DotsPattern
} from '@progress/kendo-react-charts';

const data = [1, 2, 3, 5];

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
    } as CrosshatchPattern,
    diagonalStripes: {
        type: 'diagonalStripes',
        background: 'rgb(255, 146, 184)',
        width: 1.2,
        gap: 12
    } as DiagonalStripesPattern,
    grid: {
        type: 'grid',
        background: 'rgb(255, 148, 109)',
        size: 12,
        gap: 1.2
    } as GridPattern,
    dots: {
        type: 'dots',
        background: 'rgba(255, 255, 99, 0.5)',
        radius: 7.2,
        gap: 3.6
    } as DotsPattern
};

const patternList = [
    myPatterns.verticalStripes,
    myPatterns.crosshatch,
    myPatterns.diagonalStripes,
    myPatterns.grid,
    myPatterns.dots
];

const colorList = [
    'rgb(148, 236, 255)',
    'rgb(250, 201, 187)',
    'rgb(255, 208, 223)',
    'rgb(255, 99, 88)',
    'rgb(177, 193, 61)'
];

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartArea background="#eee" margin={30} />
        <ChartSeries>
            <ChartSeriesItem
                type="column"
                name="Fibonacci"
                data={data}
                color={colorList[0]}
                pattern={patternList[0]}
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
