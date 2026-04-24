import * as React from 'react';

import { Chart, ChartSeries, ChartSeriesItem } from '@progress/kendo-react-charts';

const data = [1, 2, 3, 5, 8, 13];

const ChartContainer = () => (
    <Chart>
        <ChartSeries>
            <ChartSeriesItem data={data} name="Fibonacci" tooltip={{ visible: true }} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
