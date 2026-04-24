import * as React from 'react';

import { Chart, ChartSeries, ChartSeriesItem, SeriesErrorBars, ChartLegend } from '@progress/kendo-react-charts';

const data: number[] = [1, 3, 2];

const errorBars: SeriesErrorBars = {
    value: function (data) {
        const value = data.value;
        const lowPercentage = value * 0.05;
        const highPercentage = value * 0.1;

        return [lowPercentage, highPercentage];
    }
};

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem name="Series" data={data} errorBars={errorBars} tooltip={{ visible: true }} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
