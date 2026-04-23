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
                categoryField="date"
                data={salesByQuarter}
            />
            <ChartSeriesItem
                name="Sales Trendline (M.AVG)"
                type="movingAverageTrendline"
                dashType="dot"
                for="Sales By Quarter"
            />
            <ChartSeriesItem
                name="Sales Forecast (LINEAR)"
                type="linearTrendline"
                for="Sales By Quarter"
                trendline={{ forecast: { before: 2, after: 5 } }}
            />
        </ChartSeries>
        <ChartCategoryAxis>
            <ChartCategoryAxisItem baseUnit="fit" />
        </ChartCategoryAxis>
        <ChartTooltip shared={true} />
        <ChartLegend position="bottom" />
    </Chart>
);

export default ChartContainer;
