import * as React from 'react';

import { Chart, ChartSeries, ChartSeriesItem, ChartSeriesLabels, ChartLegend } from '@progress/kendo-react-charts';

const seriesData = [2034, 40124, 45234, 30234, 50234];

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem type="line" name="Revenue" data={seriesData} tooltip={{ visible: true }}>
                <ChartSeriesLabels format="c0" />
            </ChartSeriesItem>
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
