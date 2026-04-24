import {
    ChartSeriesItemProps,
    VerticalStripesPattern,
    CrosshatchPattern,
    DiagonalStripesPattern,
    GridPattern,
    DotsPattern
} from '@progress/kendo-react-charts';

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

export const series: ChartSeriesItemProps[] = [
    {
        name: 'Series A',
        data: [33],
        color: 'rgb(148, 236, 255)',
        pattern: myPatterns.verticalStripes
    },
    {
        name: 'Series B',
        data: [19],
        color: 'rgb(250, 201, 187)',
        pattern: myPatterns.crosshatch
    },
    {
        name: 'Series C',
        data: [28],
        color: 'rgb(255, 208, 223)',
        pattern: myPatterns.diagonalStripes
    },
    {
        name: 'Series D',
        data: [13],
        color: 'rgb(255, 99, 88)',
        pattern: myPatterns.grid
    },
    {
        name: 'Series E',
        data: [26],
        color: 'rgb(177, 193, 61)',
        pattern: myPatterns.dots
    }
];
