import * as React from 'react';

import {
    Chart,
    ChartTooltip,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend
} from '@progress/kendo-react-charts';
import { mockData } from './ch-weather-data';

const data = mockData();

const renderTooltip = ({ point }) => (
    <span>
        {point.category.toDateString()}: {point.value}
    </span>
);

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
            <ChartCategoryAxisItem maxDivisions={10} />
        </ChartCategoryAxis>
        <ChartTooltip render={renderTooltip} />
    </Chart>
);

export default ChartContainer;
