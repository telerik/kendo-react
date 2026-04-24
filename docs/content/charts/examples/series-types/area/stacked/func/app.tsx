import * as React from 'react';

import { Chart, ChartSeries, ChartSeriesItem, ChartLegend } from '@progress/kendo-react-charts';

const ChartContainer = () => {
    const [firstSeries, secondSeries] = [
        [1, 1, 1],
        [1, 0, -1]
    ];

    return (
        <Chart>
            <ChartLegend position="top" orientation="horizontal" />
            <ChartSeries>
                <ChartSeriesItem
                    type="area"
                    name="Series 1"
                    stack={true}
                    data={firstSeries}
                    color="red"
                    opacity={0.5}
                    tooltip={{ visible: true }}
                />
                <ChartSeriesItem
                    type="area"
                    name="Series 2"
                    data={firstSeries}
                    color="green"
                    opacity={0.5}
                    tooltip={{ visible: true }}
                />
                <ChartSeriesItem
                    type="area"
                    name="Series 3"
                    data={secondSeries}
                    color="blue"
                    opacity={0.5}
                    tooltip={{ visible: true }}
                />
            </ChartSeries>
        </Chart>
    );
};

export default ChartContainer;
