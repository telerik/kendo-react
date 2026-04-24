import * as React from 'react';
import { Chart, ChartSeries, ChartSeriesItem, ChartLegend, CrosshatchPattern } from '@progress/kendo-react-charts';

const seriesData = [
    { product: 'Chai', sales: 200 },
    { product: 'Others', sales: 250 }
];

const myPatterns = {
    crosshatch: {
        type: 'crosshatch',
        background: 'rgb(172, 88, 255)',
        width: 1.2,
        gap: 12
    } as CrosshatchPattern
};

const ChartContainer = () => (
    <Chart>
        <ChartLegend />
        <ChartSeries>
            <ChartSeriesItem
                type="column"
                name="Sales"
                data={seriesData}
                field="sales"
                categoryField="product"
                color="rgb(250, 201, 187)"
                pattern={myPatterns.crosshatch}
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
