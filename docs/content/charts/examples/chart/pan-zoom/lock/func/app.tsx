import * as React from 'react';

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend
} from '@progress/kendo-react-charts';

interface SeriesData {
    value: number;
    category: Date;
}

const generateSeries = () => {
    const series: SeriesData[] = [];

    for (let idx = 0; idx < 500; idx++) {
        series.push({
            value: Math.floor(Math.random() * 100) + 1,
            category: new Date(2000, 0, idx)
        });
    }

    return series;
};

const series = generateSeries();
const categoryAxisMax = new Date(2000, 1, 0);
const categoryAxisMaxDivisions = 10;

const ChartContainer = () => {
    return (
        <Chart pannable={{ lock: 'y' }} zoomable={{ mousewheel: { lock: 'y' }, selection: { lock: 'y' } }}>
            <ChartLegend />
            <ChartCategoryAxis>
                <ChartCategoryAxisItem max={categoryAxisMax} maxDivisions={categoryAxisMaxDivisions} />
            </ChartCategoryAxis>
            <ChartValueAxis>
                <ChartValueAxisItem labels={{ visible: true, format: '#.00' }} />
            </ChartValueAxis>
            <ChartSeries>
                <ChartSeriesItem
                    name="Series"
                    data={series}
                    field="value"
                    categoryField="category"
                    tooltip={{ visible: true }}
                />
            </ChartSeries>
        </Chart>
    );
};

export default ChartContainer;
