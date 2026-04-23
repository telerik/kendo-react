import * as React from 'react';

import { Chart, ChartSeries, ChartSeriesItem, ChartLegend } from '@progress/kendo-react-charts';

const ChartContainer = () => {
    const [firstSeries, secondSeries] = [
        [1, 2, 3, 5],
        [5, 3, 2, 1]
    ];

    return (
        <Chart>
            <ChartLegend position="top" orientation="horizontal" />
            <ChartSeries>
                <ChartSeriesItem
                    type="area"
                    name="Series 1"
                    stack={{ type: '100%' }}
                    data={firstSeries}
                    tooltip={{ visible: true }}
                />
                <ChartSeriesItem type="area" name="Series 2" data={secondSeries} tooltip={{ visible: true }} />
            </ChartSeries>
        </Chart>
    );
};

export default ChartContainer;
