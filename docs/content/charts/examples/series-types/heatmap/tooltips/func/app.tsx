import * as React from 'react';

import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartTooltip,
    ChartXAxis,
    ChartXAxisItem,
    ChartYAxis,
    ChartYAxisItem
} from '@progress/kendo-react-charts';

import { data } from './ch-commit-data';

const TooltipRenderer: any = ({ point }) => (
    <React.Fragment>
        {point.value.value} contributions on week
        {point.value.x}, day {point.value.y}
    </React.Fragment>
);

const ChartContainer = () => {
    return (
        <Chart>
            <ChartLegend position="top" orientation="horizontal" />

            <ChartTooltip render={TooltipRenderer} />

            <ChartSeries>
                <ChartSeriesItem type="heatmap" data={data} name="Contributions" />
            </ChartSeries>

            <ChartXAxis>
                <ChartXAxisItem visible={false} />
            </ChartXAxis>

            <ChartYAxis>
                <ChartYAxisItem visible={false} />
            </ChartYAxis>
        </Chart>
    );
};

export default ChartContainer;
