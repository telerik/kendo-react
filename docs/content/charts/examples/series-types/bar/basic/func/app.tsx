import * as React from 'react';

import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisTitle,
    ChartCategoryAxisItem,
    ChartLegend
} from '@progress/kendo-react-charts';

const [firstSeries, secondSeries, thirdSeries, fourthSeries] = [
    [100, 123, 234, 343],
    [120, 67, 231, 196],
    [45, 124, 189, 143],
    [87, 154, 210, 215]
];
const categories = ['Q1', 'Q2', 'Q3', 'Q4'];

const ChartContainer = () => (
    <Chart>
        <ChartTitle text="Units sold" />
        <ChartLegend position="top" orientation="horizontal" />
        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={categories}>
                <ChartCategoryAxisTitle text="Months" />
            </ChartCategoryAxisItem>
        </ChartCategoryAxis>
        <ChartSeries>
            <ChartSeriesItem
                type="bar"
                name="Series 1"
                gap={2}
                spacing={0.25}
                data={firstSeries}
                tooltip={{ visible: true }}
            />
            <ChartSeriesItem type="bar" name="Series 2" data={secondSeries} tooltip={{ visible: true }} />
            <ChartSeriesItem type="bar" name="Series 3" data={thirdSeries} tooltip={{ visible: true }} />
            <ChartSeriesItem type="bar" name="Series 4" data={fourthSeries} tooltip={{ visible: true }} />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
