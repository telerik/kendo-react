import * as React from 'react';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTitle,
    ChartLegend
} from '@progress/kendo-react-charts';

const categories = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];
const series = [
    {
        name: 'India',
        data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.89, 8.238, 9.552, 6.855]
    },
    {
        name: 'Russian Federation',
        data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3]
    },
    {
        name: 'Germany',
        data: [0.01, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.69, 2.995]
    },
    {
        name: 'World',
        data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
    }
];

const ChartContainer = () => (
    <div style={{ direction: 'rtl' }}>
        <Chart>
            <ChartTitle text="Gross domestic product growth GDP annual" />
            <ChartLegend position="top" orientation="horizontal" />
            <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={categories} startAngle={45} />
            </ChartCategoryAxis>
            <ChartSeries>
                {series.map((item, idx) => (
                    <ChartSeriesItem key={idx} type="column" data={item.data} name={item.name} />
                ))}
            </ChartSeries>
        </Chart>
    </div>
);

export default ChartContainer;
