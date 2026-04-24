import * as React from 'react';

import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend
} from '@progress/kendo-react-charts';

const seriesData: object[] = [{ value: 2 }, { value: 4 }, { value: 3 }, { value: 1 }];

const categoryNotes: object = {
    data: [
        {
            value: 1,
            label: {
                text: 'Max'
            }
        },
        {
            value: 3,
            label: {
                text: 'Min'
            }
        }
    ]
};

const valueNotes = {
    data: [
        {
            value: 4,
            text: 'Max'
        },
        {
            value: 1,
            text: 'Min'
        }
    ],
    label: {
        content: (args) => args.dataItem.text
    }
};

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartCategoryAxis>
            <ChartCategoryAxisItem notes={categoryNotes} />
        </ChartCategoryAxis>
        <ChartValueAxis>
            <ChartValueAxisItem notes={valueNotes} />
        </ChartValueAxis>
        <ChartSeries>
            <ChartSeriesItem type="line" name="Values" data={seriesData} field="value" tooltip={{ visible: true }} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
