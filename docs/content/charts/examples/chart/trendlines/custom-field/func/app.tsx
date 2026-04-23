import * as React from 'react';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend,
    ChartValueAxis,
    ChartValueAxisItem
} from '@progress/kendo-react-charts';

import { stockDataSample } from './ch-stock-data-sample';

const ChartContainer = () => (
    <Chart>
        <ChartTitle text="Trendlines" />
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem
                name="Stock Data"
                type="ohlc"
                openField="Open"
                highField="High"
                lowField="Low"
                closeField="Close"
                categoryField="Date"
                data={stockDataSample}
                tooltip={{ visible: true }}
            />
            <ChartSeriesItem name="Sales Trendline (LINEAR)" type="linearTrendline" field="low" for="Stock Data" />
        </ChartSeries>
        <ChartCategoryAxis>
            <ChartCategoryAxisItem type="date" baseUnit="fit" maxDivisions={50} />
        </ChartCategoryAxis>
        <ChartValueAxis>
            <ChartValueAxisItem min={50} />
        </ChartValueAxis>
    </Chart>
);

export default ChartContainer;
