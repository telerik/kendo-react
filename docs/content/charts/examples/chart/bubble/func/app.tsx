import * as React from 'react';

import {
    Chart,
    ChartTooltip,
    ChartTitle,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartXAxis,
    ChartXAxisItem,
    ChartYAxis,
    ChartYAxisItem
} from '@progress/kendo-react-charts';
import bubbleChartData from './ch-bubble-data';

const xPlotBands = [
    {
        from: -5000,
        to: 0,
        color: '#00f',
        opacity: 0.05
    }
];

const ChartContainer = () => (
    <Chart>
        <ChartTitle text="Job Growth" />
        <ChartSeries>
            <ChartSeriesItem
                type="bubble"
                xField="x"
                yField="y"
                sizeField="size"
                categoryField="category"
                data={bubbleChartData}
            />
        </ChartSeries>
        <ChartXAxis>
            <ChartXAxisItem
                axisCrossingValue={-5000}
                majorUnit={2000}
                plotBands={xPlotBands}
                labels={{ format: '{0:N0}', skip: 1, rotation: 'auto' }}
            />
        </ChartXAxis>
        <ChartYAxis>
            <ChartYAxisItem labels={{ format: '{0:N0}' }} />
        </ChartYAxis>
        <ChartLegend visible={true} />
        <ChartTooltip format="{3}: {2:N0} applications" opacity={1} />
    </Chart>
);

export default ChartContainer;
