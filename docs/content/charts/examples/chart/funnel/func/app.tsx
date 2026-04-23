import * as React from 'react';
import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels
} from '@progress/kendo-react-charts';

import data from './ch-funnel-data';

const tooltipRender = (props: any) => {
    if (props.point) {
        return props.point.dataItem.stat;
    }
};

const ChartContainer = () => (
    <Chart style={{ margin: '0 auto', width: 300 }}>
        <ChartTitle text="Sales funnel" />
        <ChartSeries>
            <ChartSeriesItem type="funnel" data={data} categoryField="stat" field="count" colorField="color">
                <ChartSeriesLabels color="white" background="none" format="N0" />
            </ChartSeriesItem>
        </ChartSeries>
        <ChartTooltip render={tooltipRender} />
        <ChartLegend visible={false} />
    </Chart>
);

export default ChartContainer;
