import React from 'react';

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartTooltip
} from '@progress/kendo-react-charts';

import 'hammerjs';

export const BarChartContainer = (props) => (
    <Chart style={{height:300}} zoomable={false}>
        <ChartTooltip />
        <ChartLegend visible={false} />
        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={props.categories} startAngle={45} />
        </ChartCategoryAxis>
        <ChartSeries>
            {props.data.map((item, idx) => (
                <ChartSeriesItem
                    key={idx}
                    type="column"
                    data={item.data}
                    name={item.name}
                />))}
        </ChartSeries>
        <ChartValueAxis>
                <ChartValueAxisItem/>
        </ChartValueAxis>
    </Chart>
);