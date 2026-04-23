import * as React from 'react';

import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    PlotAreaHoverEvent,
    ChartSeriesItem,
    ChartLegend
} from '@progress/kendo-react-charts';

const data: number[] = [1, 2, 3];
const categories: string[] = ['A', 'B', 'C'];
const crosshair = {
    visible: true,
    tooltip: {
        visible: true,
        format: '#.##'
    }
};

const onPlotAreaHover = (args: PlotAreaHoverEvent) => {
    console.log(`Category: ${args.category}`);
    console.log(`Value: ${args.value}`);
};

const ChartContainer = () => (
    <Chart onPlotAreaHover={onPlotAreaHover}>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={categories} crosshair={crosshair} />
        </ChartCategoryAxis>
        <ChartValueAxis>
            <ChartValueAxisItem crosshair={crosshair} />
        </ChartValueAxis>
        <ChartSeries>
            <ChartSeriesItem name="Series" data={data} tooltip={{ visible: true }} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
