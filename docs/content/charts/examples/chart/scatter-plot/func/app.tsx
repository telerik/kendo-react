import * as React from 'react';
import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartXAxis,
    ChartXAxisItem,
    ChartYAxis,
    ChartYAxisItem,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';

import data from './ch-scatter-plot-data';

const ChartContainer = () => (
    <Chart>
        <ChartTitle text="Wind Speed vs. Rainfall" />

        <ChartLegend position="top" orientation="horizontal" />

        <ChartSeries>
            <ChartSeriesItem
                type="scatter"
                data={data}
                xField="rainfall"
                yField="windSpeed"
                name="Measurements"
                tooltip={{ visible: true }}
            />
        </ChartSeries>

        <ChartXAxis>
            <ChartXAxisItem title={{ text: 'Rainfall [mm]' }} min={-1} max={9} />
        </ChartXAxis>

        <ChartYAxis>
            <ChartYAxisItem title={{ text: 'Wind Speed [km/h]' }} min={8} max={32} />
        </ChartYAxis>
    </Chart>
);

export default ChartContainer;
