import * as React from 'react';
import { Chart, ChartSeries, ChartSeriesItem, ChartLegend, VerticalStripesPattern } from '@progress/kendo-react-charts';

const seriesData: object[] = [
    { product: 'Chai', sales: 200 },
    { product: 'Chai', sales: 100 },
    { product: 'Others', sales: 250 }
];

const customAggregate = (values) => values.reduce((acc, n) => acc + n, 0);

const verticalStripes: VerticalStripesPattern = {
    type: 'verticalStripes',
    background: 'rgb(75, 96, 250)',
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
                aggregate={customAggregate}
                color="rgb(148, 236, 255)"
                pattern={verticalStripes}
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
