import * as React from 'react';

import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';

import data from './ch-radar-data';

const ChartContainer = () => (
    <Chart>
        <ChartTitle text="Market Value of Major Banks /bln/" />

        <ChartLegend position="bottom" />

        <ChartSeries>
            <ChartSeriesItem
                type="radarLine"
                data={data}
                field="pre"
                categoryField="name"
                name="Market value as of 2007"
                tooltip={{ visible: true }}
            />
            <ChartSeriesItem
                type="radarLine"
                data={data}
                field="post"
                categoryField="name"
                name="Market value as of 2009"
                tooltip={{ visible: true }}
            />
        </ChartSeries>

        <ChartValueAxis>
            <ChartValueAxisItem labels={{ format: 'C0' }} />
        </ChartValueAxis>
    </Chart>
);

export default ChartContainer;
