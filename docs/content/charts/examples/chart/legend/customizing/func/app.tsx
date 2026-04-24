import * as React from 'react';

import { Chart, ChartLegend, ChartSeries, ChartSeriesItem } from '@progress/kendo-react-charts';

const seriesData: number[] = [1, 2, 3, 5];
const ChartContainer = () => (
    <Chart>
        <ChartLegend position="custom" offsetX={40} offsetY={25} />
        <ChartSeries>
            <ChartSeriesItem name="Fibonacci" data={seriesData} tooltip={{ visible: true }} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
