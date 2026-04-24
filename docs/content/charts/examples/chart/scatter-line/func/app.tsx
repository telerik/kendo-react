import * as React from 'react';
import {
    Chart,
    ChartTitle,
    ChartTooltip,
    ChartXAxis,
    ChartXAxisItem,
    ChartYAxis,
    ChartYAxisItem,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';

import data from './ch-scatter-line-data';

const mapSeries = (series, idx) => (
    <ChartSeriesItem
        key={idx}
        type="scatterLine"
        data={series.stats}
        name={series.current}
        xField="time"
        yField="charge"
    />
);

const ChartContainer = () => (
    <Chart>
        <ChartTitle text="Charge current vs. charge time" />
        <ChartTooltip format="{1}% in {0} minutes" />
        <ChartSeries>{data.map(mapSeries)}</ChartSeries>
        <ChartXAxis>
            <ChartXAxisItem title={{ text: 'Time' }} max={90} labels={{ format: '{0}m' }} />
        </ChartXAxis>
        <ChartYAxis>
            <ChartYAxisItem title={{ text: 'Charge' }} max={100} labels={{ format: '{0}m' }} />
        </ChartYAxis>
    </Chart>
);

export default ChartContainer;
