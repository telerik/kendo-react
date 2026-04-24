import * as React from 'react';

import { Chart, ChartSeries, ChartSeriesItem, ChartLegend } from '@progress/kendo-react-charts';

const seriesData: object[] = [{ value: 2 }, { value: 4, extremum: 'Max' }, { value: 3 }, { value: 1, extremum: 'Min' }];

const notes: object = {
    label: {
        position: 'outside'
    },
    line: {
        length: 20
    },
    icon: {
        type: 'square'
    },
    position: 'bottom'
};

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
                notes={notes}
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
