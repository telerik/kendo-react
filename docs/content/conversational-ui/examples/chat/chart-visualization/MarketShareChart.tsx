import * as React from 'react';
import {
    Chart,
    ChartArea,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartLegendItem
} from '@progress/kendo-react-charts';

interface MarketShareData {
    category: string;
    value: number;
    color: string;
}

const data: MarketShareData[] = [
    { category: 'Our Company', value: 32, color: '#9B5CFF' },
    { category: 'Competitor A', value: 28, color: '#FF5A5F' },
    { category: 'Competitor B', value: 10, color: '#FFE36E' },
    { category: 'Competitor C', value: 12, color: '#3DDC84' },
    { category: 'Others', value: 18, color: '#3F5BFF' }
];

const MarketShareChart = React.forwardRef<any>((_props, ref) => (
    <Chart ref={ref} className="chart-responsive">
        <ChartArea background="transparent" />

        <ChartLegend position="bottom">
            <ChartLegendItem markers={{ type: 'rect' }} />
        </ChartLegend>

        <ChartSeries>
            <ChartSeriesItem
                type="pie"
                data={data}
                field="value"
                categoryField="category"
                colorField="color"
                overlay={{ gradient: 'none' }}
                labels={{
                    visible: true,
                    format: '{0}',
                    position: 'center',
                    color: '#ffffff',
                    background: 'transparent'
                }}
                tooltip={{ visible: true, format: '{0}' }}
            />
        </ChartSeries>
    </Chart>
));

MarketShareChart.displayName = 'MarketShareChart';

export default MarketShareChart;
