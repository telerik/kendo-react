import * as React from 'react';

import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartCategoryAxisCrosshair,
    ChartCategoryAxisCrosshairTooltip,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend
} from '@progress/kendo-react-charts';

const data = [1, 2, 3];
const categories = ['A', 'B', 'C'];
const crosshair = {
    visible: true,
    tooltip: {
        visible: true,
        format: '#.##'
    }
};

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
            <ChartValueAxisItem crosshair={crosshair} />
        </ChartValueAxis>
        <ChartSeries>
            <ChartSeriesItem name="Series" data={data} tooltip={{ visible: true }} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
