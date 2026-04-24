import * as React from 'react';

import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend
} from '@progress/kendo-react-charts';

const categoryPlotBands = [
    {
        from: 1,
        to: 2,
        color: '#ffd246',
        opacity: 0.8,
        label: {
            text: 'Yellow Zone',
            font: '18px sans-serif',
            color: '#444',
            margin: 5
        }
    }
];

const valuePlotBands = [
    {
        from: 2,
        to: 3,
        color: '#78d237',
        opacity: 0.8,
        label: {
            text: 'Green Zone',
            font: '18px sans-serif',
            color: '#444',
            margin: 5
        }
    }
];

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={['A', 'B', 'C']} plotBands={categoryPlotBands} />
        </ChartCategoryAxis>
        <ChartValueAxis>
            <ChartValueAxisItem plotBands={valuePlotBands} />
        </ChartValueAxis>
        <ChartSeries>
            <ChartSeriesItem name="Series" data={[1, 2, 3]} tooltip={{ visible: true }} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
