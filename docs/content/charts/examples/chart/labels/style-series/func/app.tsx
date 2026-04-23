import * as React from 'react';
import { Chart, ChartSeries, ChartSeriesItem, ChartLegend } from '@progress/kendo-react-charts';

const seriesData = [20, 40, 45, 30, 50];

const seriesLabels = {
    visible: true,
    padding: 3,
    font: 'bold 16px Arial, sans-serif'
};

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem
                type="line"
                name="Series"
                data={seriesData}
                labels={seriesLabels}
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
