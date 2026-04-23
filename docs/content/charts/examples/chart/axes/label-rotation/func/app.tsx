import * as React from 'react';

import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend
} from '@progress/kendo-react-charts';
import { mockData } from './ch-weather-data';

const data = mockData();

const ChartContainer = () => (
    <Chart>
        <ChartTitle text="Daily Max (&deg;C)" />
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem
                type="column"
                name="Daily Max"
                field="TMax"
                categoryField="Date"
                data={data}
                tooltip={{ visible: true }}
            />
        </ChartSeries>
        <ChartCategoryAxis>
            <ChartCategoryAxisItem labels={{ format: 'd', rotation: 'auto' }} />
        </ChartCategoryAxis>
    </Chart>
);

export default ChartContainer;
