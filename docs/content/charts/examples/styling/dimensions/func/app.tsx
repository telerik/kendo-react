import * as React from 'react';

import { Chart, ChartSeries, ChartSeriesItem, ChartLegend } from '@progress/kendo-react-charts';

const seriesData = [1, 2, 3, 5];

const ChartContainer = () => (
    <Chart style={{ width: 300, height: 200 }}>
        <ChartLegend />
        <ChartSeries>
            <ChartSeriesItem name="Series" data={seriesData} tooltip={{ visible: true }} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
