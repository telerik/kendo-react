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

const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
const firstSeries = [123, 276, 310, 212, 240, 156, 98];
const secondSeries = [165, 210, 287, 144, 190, 167, 212];
const thirdSeries = [56, 140, 195, 46, 123, 78, 95];

const ChartContainer = () => {
    return (
        <Chart>
            <ChartTitle text="Units sold" />
            <ChartLegend position="top" orientation="horizontal" />
            <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={categories} title={{ text: 'Months' }} />
            </ChartCategoryAxis>
            <ChartSeries>
                <ChartSeriesItem type="area" name="Series 1" data={firstSeries} tooltip={{ visible: true }} />
                <ChartSeriesItem type="area" name="Series 2" data={secondSeries} tooltip={{ visible: true }} />
                <ChartSeriesItem type="area" name="Series 3" data={thirdSeries} tooltip={{ visible: true }} />
            </ChartSeries>
        </Chart>
    );
};

export default ChartContainer;
