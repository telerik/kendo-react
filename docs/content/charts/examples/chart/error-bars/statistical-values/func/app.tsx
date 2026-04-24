import * as React from 'react';

import { Chart, ChartSeries, ChartSeriesItem, ChartLegend } from '@progress/kendo-react-charts';

const data: number[] = [1, 3, 2];

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem name="Std Error" data={data} errorBars={{ value: 'stderr' }} tooltip={{ visible: true }} />
            <ChartSeriesItem
                name="Std Dev (0.5)"
                data={data}
                errorBars={{ value: 'stddev(0.5)' }}
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
