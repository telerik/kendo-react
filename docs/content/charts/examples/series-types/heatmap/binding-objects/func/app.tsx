import * as React from 'react';

import { Chart, ChartLegend, ChartSeries, ChartSeriesItem } from '@progress/kendo-react-charts';
import { makeDataObjects } from './ch-make-data-objects';

const data = makeDataObjects(10, 10);

const ChartContainer = () => {
    return (
        <Chart>
            <ChartLegend position="top" orientation="horizontal" />

            <ChartSeries>
                <ChartSeriesItem
                    type="heatmap"
                    data={data}
                    xField="a"
                    yField="b"
                    field="value"
                    name="Heatmap values"
                    tooltip={{ visible: true }}
                />
            </ChartSeries>
        </Chart>
    );
};

export default ChartContainer;
