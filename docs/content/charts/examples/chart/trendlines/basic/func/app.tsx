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
            <ChartSeriesItem type="line" name="Sales By Quarter" style="smooth" field="count" data={salesByQuarter} />
            <ChartSeriesItem type="linearTrendline" name="Sales Trendline (LINEAR)" for="Sales By Quarter" />
            <ChartSeriesItem
                name="Sales Forecast (M.AVG)"
                type="movingAverageTrendline"
                dashType="dot"
                for="Sales By Quarter"
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
