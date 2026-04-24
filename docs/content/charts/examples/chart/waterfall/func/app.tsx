import * as React from 'react';

import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels
} from '@progress/kendo-react-charts';

import data from './ch-waterfall-data';

const pointColor = (point) => {
    let summary = point.dataItem.summary;

    if (summary) {
        return summary === 'total' ? '#555' : 'gray';
    }

    if (point.value > 0) {
        return 'green';
    } else {
        return 'red';
    }
};

const ChartContainer = () => (
    <Chart>
        <ChartTitle text="Cash flow" />

        <ChartLegend position="top" orientation="horizontal" />

        <ChartSeries>
            <ChartSeriesItem
                type="waterfall"
                data={data}
                color={pointColor}
                field="amount"
                categoryField="period"
                summaryField="summary"
                name="Cash flow"
                tooltip={{ visible: true }}
            >
                <ChartSeriesLabels format="C0" position="insideEnd" />
            </ChartSeriesItem>
        </ChartSeries>

        <ChartValueAxis>
            <ChartValueAxisItem />
        </ChartValueAxis>
    </Chart>
);

export default ChartContainer;
