import * as React from 'react';
import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesItemProps,
    VerticalStripesPattern,
    CrosshatchPattern,
    DiagonalStripesPattern,
    GridPattern,
    DotsPattern
} from '@progress/kendo-react-charts';

const categories: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const values: number[] = [33, 19, 28, 13, 26];

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

const series: ChartSeriesItemProps[] = [
    {
        name: 'Mon',
        data: categories.map((_, i) => (i === 0 ? values[0] : null)),
        color: 'rgb(148, 236, 255)',
        pattern: myPatterns.verticalStripes
    },
    {
        name: 'Tue',
        data: categories.map((_, i) => (i === 1 ? values[1] : null)),
        color: 'rgb(250, 201, 187)',
        pattern: myPatterns.crosshatch
    },
    {
        name: 'Wed',
        data: categories.map((_, i) => (i === 2 ? values[2] : null)),
        color: 'rgb(255, 208, 223)',
        pattern: myPatterns.diagonalStripes
    },
    {
        name: 'Thu',
        data: categories.map((_, i) => (i === 3 ? values[3] : null)),
        color: 'rgb(255, 99, 88)',
        pattern: myPatterns.grid
    },
    {
        name: 'Fri',
        data: categories.map((_, i) => (i === 4 ? values[4] : null)),
        color: 'rgb(177, 193, 61)',
        pattern: myPatterns.dots
    }
];

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />

        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={categories} />
        </ChartCategoryAxis>

        <ChartSeries>
            {series.map((s) => (
                <ChartSeriesItem
                    key={s.name}
                    type="column"
                    name={s.name}
                    data={s.data as any}
                    color={s.color}
                    pattern={s.pattern as any}
                    stack={true}
                    tooltip={{ visible: true }}
                />
            ))}
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
