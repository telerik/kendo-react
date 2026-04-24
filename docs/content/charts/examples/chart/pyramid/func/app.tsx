import * as React from 'react';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
    ChartTooltip,
    ChartLegend,
    TooltipContext,
    ChartSeriesLabels
} from '@progress/kendo-react-charts';
import { data } from './data';

const tooltipRender = (props: TooltipContext) => {
    if (props.point) {
        const { category, percentage } = (props as TooltipContext).point;
        return (
            <span>
                {String(category)}: ({Math.floor(percentage * 100) + '%'})
            </span>
        );
    }
};

const App = () => (
    <Chart style={{ width: 300, margin: '0 auto' }}>
        <ChartTitle text="Sales" />

        <ChartLegend position="top" orientation="horizontal" />

        <ChartSeries>
            <ChartSeriesItem type="pyramid" field="count" categoryField="stat" data={data} name="Sales">
                <ChartSeriesLabels background="none" />
            </ChartSeriesItem>
        </ChartSeries>

        <ChartTooltip render={tooltipRender} />
    </Chart>
);

export default App;
