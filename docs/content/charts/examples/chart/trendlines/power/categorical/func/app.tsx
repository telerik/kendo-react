import * as React from 'react';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTooltip,
    ChartLegend
} from '@progress/kendo-react-charts';

import { salesByQuarter } from './ch-sales-data';

const ChartContainer = () => (
    <Chart>
        <ChartTitle text="Trendlines" />
        <ChartSeries>
            <ChartSeriesItem
                name="Sales By Quarter"
                type="line"
                style="smooth"
                field="count"
                categoryField="period"
                data={salesByQuarter}
            />
            <ChartSeriesItem name="Sales Trendline (POW)" type="powerTrendline" for="Sales By Quarter" />
        </ChartSeries>
        <ChartCategoryAxis>
            <ChartCategoryAxisItem labels={{ step: 5 }} />
        </ChartCategoryAxis>
        <ChartTooltip shared={true} />
        <ChartLegend position="bottom" />
    </Chart>
);

export default ChartContainer;
