import * as React from 'react';

import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartLegend
} from '@progress/kendo-react-charts';

const categories: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

const ChartContainer = () => {
    return (
        <Chart>
            <ChartTitle text="Units sold" />
            <ChartLegend position="top" orientation="horizontal" />
            <ChartCategoryAxis>
                <ChartCategoryAxisItem
                    title={{ text: 'Months' }}
                    categories={categories}
                    justified={true}
                />
            </ChartCategoryAxis>
            <ChartSeries>
                <ChartSeriesItem
                    type="line"
                    name="Product A"
                    data={[123, 276, 310, 212, 240, 156, 98]}
                    tooltip={{ visible: true }}
                />
                <ChartSeriesItem
                    type="line"
                    name="Product B"
                    data={[165, 210, 287, 144, 190, 167, 212]}
                    tooltip={{ visible: true }}
                />
                <ChartSeriesItem
                    type="line"
                    name="Product C"
                    data={[56, 140, 195, 46, 123, 78, 95]}
                    tooltip={{ visible: true }}
                />
            </ChartSeries>
        </Chart>
    );
};

export default ChartContainer;
