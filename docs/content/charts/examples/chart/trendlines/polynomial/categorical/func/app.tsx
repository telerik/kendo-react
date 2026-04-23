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
            <ChartSeriesItem
                name="Sales Trendline (POLY)"
                type="polynomialTrendline"
                for="Sales By Quarter"
                trendline={{ order: 3 }}
            />
        </ChartSeries>
        <ChartCategoryAxis>
            <ChartCategoryAxisItem labels={{ step: 5 }} />
        </ChartCategoryAxis>
        <ChartTooltip shared={true} />
        <ChartLegend position="bottom" />
    </Chart>
);

export default ChartContainer;
