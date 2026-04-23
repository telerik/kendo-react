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
    ChartSeriesItem,
    ChartSeriesLabels
} from '@progress/kendo-react-charts';

import data from './ch-polar-data';

const labelContent = (e: any) => `${e.dataItem.time.substring(0, 2)}h`;

const ChartContainer = () => (
    <Chart>
        <ChartTitle text="Sun position at equinox" />

        <ChartLegend position="top" orientation="horizontal" />

        <ChartSeries>
            <ChartSeriesItem
                type="polarLine"
                data={data}
                xField="azimuth"
                yField="altitude"
                name="Sun position"
                tooltip={{ visible: true }}
            >
                <ChartSeriesLabels position="below" content={labelContent} />
            </ChartSeriesItem>
        </ChartSeries>

        <ChartXAxis>
            <ChartXAxisItem startAngle={-90} majorUnit={30} />
        </ChartXAxis>

        <ChartYAxis>
            <ChartYAxisItem labels={{ visible: false }} />
        </ChartYAxis>
    </Chart>
);

export default ChartContainer;
