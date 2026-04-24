import * as React from 'react';

import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartTooltip,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    ChartSeriesLabelsFrom,
    ChartSeriesLabelsTo,
    TooltipContext
} from '@progress/kendo-react-charts';

import data from './ch-range-data';

const tooltipRender = (props: TooltipContext) => (
    <div>
        Avg Min Temp : {props.point.value && props.point.value.from} °C
        <br />
        Avg Max Temp : {props.point.value && props.point.value.to} °C
    </div>
);

const labelContentFrom = (e: any) => `${e.value.from} °C`;
const labelContentTo = (e: any) => `${e.value.to} °C`;

const ChartContainer = () => (
    <Chart>
        <ChartTitle text="Average Weather Conditions" />

        <ChartLegend position="top" orientation="horizontal" />

        <ChartSeries>
            <ChartSeriesItem
                type="rangeArea"
                data={data}
                fromField="min"
                toField="max"
                categoryField="month"
                name="Temperature range"
            >
                <ChartSeriesLabels>
                    <ChartSeriesLabelsFrom content={labelContentFrom} />
                    <ChartSeriesLabelsTo content={labelContentTo} />
                </ChartSeriesLabels>
            </ChartSeriesItem>
        </ChartSeries>

        <ChartCategoryAxis>
            <ChartCategoryAxisItem labels={{ rotation: 'auto' }} />
        </ChartCategoryAxis>

        <ChartTooltip render={tooltipRender} />
    </Chart>
);

export default ChartContainer;
