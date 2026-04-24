import * as React from 'react';
import { Chart, ChartSeries, ChartSeriesItem, ChartLegend, GridPattern } from '@progress/kendo-react-charts';

const seriesData: object[] = [
    { product: 'Chai', sales: 200 },
    { product: 'Chai', sales: 100 },
    { product: 'Others', sales: 250 }
];

const gridPattern: GridPattern = {
    type: 'grid',
    background: 'rgb(255, 148, 109)',
    size: 12,
    gap: 1.2
};

const ChartContainer = () => (
    <Chart>
        <ChartLegend />
        <ChartSeries>
            <ChartSeriesItem
                type="column"
                name="Count"
                data={seriesData}
                field="sales"
                categoryField="product"
                aggregate="count"
                color="rgb(255, 99, 88)"
                pattern={gridPattern}
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
