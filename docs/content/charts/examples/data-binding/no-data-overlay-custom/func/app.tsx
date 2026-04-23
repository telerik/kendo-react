import * as React from 'react';

import { Chart, ChartTitle, ChartSeries, ChartSeriesItem, ChartNoDataOverlay } from '@progress/kendo-react-charts';
import { SvgIcon } from '@progress/kendo-react-common';
import { xCircleIcon } from '@progress/kendo-svg-icons';

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
        <ChartNoDataOverlay>
            <div>
                <SvgIcon icon={xCircleIcon} themeColor="error" size="xxlarge"></SvgIcon>
                <p style={{ paddingTop: '8px' }}>There is no data to display.</p>
            </div>
        </ChartNoDataOverlay>
    </Chart>
);

export default App;
