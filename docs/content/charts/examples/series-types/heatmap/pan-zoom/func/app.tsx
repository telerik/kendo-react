import * as React from 'react';

import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartXAxis,
    ChartXAxisItem,
    ChartYAxis,
    ChartYAxisItem
} from '@progress/kendo-react-charts';
import { makeDataObjects } from './ch-make-data-objects';

const data = makeDataObjects(25, 25);

const ChartContainer = () => {
    return (
        <Chart pannable={true} zoomable={true} renderAs="canvas">
            <ChartLegend position="top" orientation="horizontal" />

            <ChartSeries>
                <ChartSeriesItem
                    type="heatmap"
                    data={data}
                    xField="a"
                    yField="b"
                    field="value"
                    labels={{ visible: false }}
                    name="Heatmap"
                    tooltip={{ visible: true }}
                />
            </ChartSeries>

            <ChartXAxis>
                <ChartXAxisItem min={10} max={15} labels={{ rotation: 'auto' }} />
            </ChartXAxis>

            <ChartYAxis>
                <ChartYAxisItem min={10} max={15} />
            </ChartYAxis>
        </Chart>
    );
};

export default ChartContainer;
