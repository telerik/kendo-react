import * as React from 'react';

import { Chart, ChartTitle, ChartSeries, ChartSeriesItem, ChartNoDataOverlay } from '@progress/kendo-react-charts';

const seriesData: object[] = [
    /* Uncomment to display chart

    {
        product: 'Chai',
        sales: 200
    }, {
        product: 'Others',
        sales: 250
    }
    */
];

const App = () => (
    <Chart>
        <ChartTitle text="Chart Title" />
        <ChartSeries>
            <ChartSeriesItem data={seriesData} type="column" field="sales" categoryField="product" />
        </ChartSeries>
        <ChartNoDataOverlay />
    </Chart>
);

export default App;
