import * as React from 'react';

import {
    Chart,
    ChartTitle,
    ChartTooltip,
    ChartLegend,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';

const baseYear = 2000;
const generateData = () => {
    const data: any = {
        categories: [],
        series: {
            name: 'My data over time',
            data: []
        }
    };

    for (let i = 0; i < 200; i++) {
        data.categories.push(baseYear + i);
        data.series.data.push(Math.floor(Math.random() * 200));
    }

    return data;
};

const ChartContainer = () => {
    const data = generateData();

    return (
        <Chart pannable={{ lock: 'y' }} zoomable={{ mousewheel: { lock: 'y' } }}>
            <ChartTitle text="My line chart" />
            <ChartTooltip format="{0}" />
            <ChartLegend position="bottom" orientation="horizontal" />
            <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={data.categories} max={20} labels={{ rotation: 'auto' }} />
            </ChartCategoryAxis>
            <ChartSeries>
                <ChartSeriesItem data={data.series.data} type="line" style="smooth" name={data.series.name} />
            </ChartSeries>
        </Chart>
    );
};

export default ChartContainer;
