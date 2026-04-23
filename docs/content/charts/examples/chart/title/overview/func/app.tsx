import * as React from 'react';

import { Chart, ChartTitle } from '@progress/kendo-react-charts';

const ChartContainer = () => (
    <Chart>
        <ChartTitle text="A Lovely Title" color="blue" background="#ccff00" font="19pt sans-serif" />
    </Chart>
);

export default ChartContainer;
