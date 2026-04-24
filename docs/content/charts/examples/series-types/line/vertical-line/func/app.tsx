import * as React from 'react';

import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem
} from '@progress/kendo-react-charts';

const categories: string[] = ['Jan', 'Feb', 'Mar', 'Apr'];

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />

        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={categories} />
        </ChartCategoryAxis>

        <ChartSeries>
            <ChartSeriesItem type="verticalLine" data={[1, 2, 3, 5]} tooltip={{ visible: true }} />
            <ChartSeriesItem type="verticalLine" data={[-1, -2, -3, -5]} tooltip={{ visible: true }} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
