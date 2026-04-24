import * as React from 'react';
import { Chart, ChartSeries, ChartSeriesItem, ChartLegend, DiagonalStripesPattern } from '@progress/kendo-react-charts';

const seriesData: object[] = [
    { product: 'Chai', sales: 200 },
    { product: 'Chai', sales: 100 },
    { product: 'Others', sales: 250 }
];

const diagonalStripes: DiagonalStripesPattern = {
    type: 'diagonalStripes',
    background: 'rgb(255, 146, 184)',
    width: 1.2,
    gap: 12
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
                color="rgb(255, 208, 223)"
                pattern={diagonalStripes}
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
