import * as React from 'react';

import { Chart, ChartSeries, ChartSeriesItem, ChartLegend } from '@progress/kendo-react-charts';

const data = [
    { value: 4.743, low: 4.5, high: 5 },
    { value: 7.295, low: 7, high: 8 },
    { value: 6.376, low: 5, high: 6.5 }
];

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem
                type="line"
                name="Value"
                data={data}
                field="value"
                errorLowField="low"
                errorHighField="high"
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
