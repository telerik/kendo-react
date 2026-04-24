import * as React from 'react';

import {
    Chart,
    ChartLegend,
    ChartAxisDefaultsCrosshairTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartXAxis,
    ChartXAxisCrosshair,
    ChartXAxisItem,
    ChartYAxis,
    ChartYAxisCrosshair,
    ChartYAxisCrosshairTooltip,
    ChartYAxisItem
} from '@progress/kendo-react-charts';
import { makeDataObjects } from './ch-make-data-objects';

const data = makeDataObjects(10, 10);

const ChartContainer = () => {
    return (
        <Chart>
            <ChartLegend position="top" orientation="horizontal" />

            <ChartSeries>
                <ChartSeriesItem type="heatmap" data={data} xField="a" yField="b" field="value" name="Heatmap" />
            </ChartSeries>

            <ChartXAxis>
                <ChartXAxisItem visible={false}>
                    <ChartXAxisCrosshair width={0.5} color="red">
                        <ChartAxisDefaultsCrosshairTooltip />
                    </ChartXAxisCrosshair>
                </ChartXAxisItem>
            </ChartXAxis>

            <ChartYAxis>
                <ChartYAxisItem visible={false}>
                    <ChartYAxisCrosshair width={0.5} color="red">
                        <ChartYAxisCrosshairTooltip />
                    </ChartYAxisCrosshair>
                </ChartYAxisItem>
            </ChartYAxis>
        </Chart>
    );
};

export default ChartContainer;
