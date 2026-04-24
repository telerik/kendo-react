import * as React from 'react';

import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem
} from '@progress/kendo-react-charts';

const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

const ChartContainer = () => (
    <Chart>
        <ChartTitle text="Units sold" />

        <ChartLegend position="top" orientation="horizontal" />

        <ChartCategoryAxis>
            <ChartCategoryAxisItem title={{ text: 'Months' }} categories={categories} />
        </ChartCategoryAxis>

        <ChartSeries>
            <ChartSeriesItem
                type="line"
                data={[123, 276, 310, 212, 240, 156, 98]}
                name="Product A"
                tooltip={{ visible: true }}
            />
            <ChartSeriesItem
                type="line"
                data={[165, 210, 287, 144, 190, 167, 212]}
                name="Product B"
                tooltip={{ visible: true }}
            />
            <ChartSeriesItem
                type="line"
                data={[56, 140, 195, 46, 123, 78, 95]}
                name="Product C"
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
