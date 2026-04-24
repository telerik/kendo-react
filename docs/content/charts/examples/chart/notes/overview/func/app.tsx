import * as React from 'react';

import { Chart, ChartSeries, ChartSeriesItem, ChartLegend } from '@progress/kendo-react-charts';

const seriesData = [{ value: 2 }, { value: 4, extremum: 'Max' }, { value: 3 }, { value: 1, extremum: 'Min' }];

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem
                type="line"
                name="Values"
                data={seriesData}
                field="value"
                noteTextField="extremum"
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
