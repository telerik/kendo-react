import * as React from 'react';
import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartArea,
    ChartValueAxis,
    ChartValueAxisItem
} from '@progress/kendo-react-charts';

const categories: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const data: number[] = [45000, 52000, 68000, 61000, 73000, 79000];

const TrendsChart = React.forwardRef<any>((_props, ref) => (
    <Chart ref={ref} className="chart-responsive">
        <ChartArea />

        <ChartLegend visible={true} position="bottom" align="center" />

        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={categories} />
        </ChartCategoryAxis>

        <ChartValueAxis>
            <ChartValueAxisItem labels={{ step: 2, format: '{0:n0}' }} majorGridLines={{ step: 2 }} />
        </ChartValueAxis>

        <ChartSeries>
            <ChartSeriesItem
                type="line"
                data={data}
                markers={{ visible: true }}
                tooltip={{ visible: true, format: '{0:n0}' }}
            />
        </ChartSeries>
    </Chart>
));

TrendsChart.displayName = 'TrendsChart';

export default TrendsChart;
