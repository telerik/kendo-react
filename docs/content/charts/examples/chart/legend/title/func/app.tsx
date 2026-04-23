import * as React from 'react';

import {
    Chart,
    ChartLegend,
    ChartLegendTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
    ChartCategoryAxis,
    ChartCategoryAxisItem
} from '@progress/kendo-react-charts';

const series: any[] = [
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
    }
];

const categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];

const ChartContainer = () => (
    <Chart>
        <ChartTitle text="Gross domestic product growth /GDP annual %/" />
        <ChartLegend position="right">
            <ChartLegendTitle text="Countries" font="18px Arial" />
        </ChartLegend>
        <ChartSeries>
            {series.map((s) => (
                <ChartSeriesItem name={s.name} data={s.data} type="line" key={s.name} tooltip={{ visible: true }} />
            ))}
        </ChartSeries>
        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={categories} />
        </ChartCategoryAxis>
    </Chart>
);

export default ChartContainer;
