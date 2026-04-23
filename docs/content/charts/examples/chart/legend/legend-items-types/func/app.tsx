import * as React from 'react';

import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem
} from '@progress/kendo-react-charts';

import { categories, series } from './data';

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="left" />
        <ChartSeries>
            {series.map((s) => (
                <ChartSeriesItem {...s} key={s.name} tooltip={{ visible: true }} />
            ))}
        </ChartSeries>
        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={categories} />
        </ChartCategoryAxis>
    </Chart>
);

export default ChartContainer;
