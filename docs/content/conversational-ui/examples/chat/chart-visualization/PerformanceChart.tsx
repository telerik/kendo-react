import * as React from 'react';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartLegend,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartArea
} from '@progress/kendo-react-charts';

interface ChartDataItem {
    category: string;
    value: number;
    color: string;
}

const data: ChartDataItem[] = [
    { category: 'Electronics', value: 92000, color: '#FF5A5F' },
    { category: 'Clothing', value: 56000, color: '#FFE36E' },
    { category: 'Home & Garden', value: 82000, color: '#3DDC84' },
    { category: 'Sports', value: 36000, color: '#3F5BFF' },
    { category: 'Books', value: 74000, color: '#9B5CFF' }
];

const categories: string[] = data.map((item) => item.category);
const categoryAxisNames: string[] = data.map((_, index) => `category-axis-${index}`);
const seriesData: Array<Array<number | null>> = data.map((item, index) =>
    categories.map((_, categoryIndex) => (index === categoryIndex ? item.value : null))
);

const PerformanceChart = React.forwardRef<any>((_props, ref) => (
    <Chart ref={ref} className="chart-responsive">
        <ChartArea background="transparent" />

        <ChartLegend visible={true} position="bottom" />

        <ChartCategoryAxis>
            {categoryAxisNames.map((axisName, index) => (
                <ChartCategoryAxisItem
                    key={axisName}
                    name={axisName}
                    visible={index === 0}
                    categories={categories}
                    labels={{ visible: false }}
                    majorGridLines={{ visible: false }}
                />
            ))}
        </ChartCategoryAxis>

        <ChartValueAxis>
            <ChartValueAxisItem min={0} max={100000} majorUnit={25000} labels={{ format: '{0:n0}' }} />
        </ChartValueAxis>

        <ChartSeries>
            {data.map((item, index) => (
                <ChartSeriesItem
                    key={item.category}
                    type="column"
                    data={seriesData[index]}
                    categoryAxis={categoryAxisNames[index]}
                    name={item.category}
                    color={item.color}
                    spacing={0}
                    gap={0.2}
                    tooltip={{ visible: true, format: '{0:n0}' }}
                />
            ))}
        </ChartSeries>
    </Chart>
));

PerformanceChart.displayName = 'PerformanceChart';

export default PerformanceChart;
