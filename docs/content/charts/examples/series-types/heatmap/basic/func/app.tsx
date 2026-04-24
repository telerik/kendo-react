import * as React from 'react';

import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartXAxis,
    ChartXAxisItem,
    ChartYAxis,
    ChartYAxisItem
} from '@progress/kendo-react-charts';
import { data } from './ch-commit-data';

const dayLabels: { [index: number]: string } = {
    1: 'Mon',
    3: 'Wed',
    5: 'Fri'
};

const yAxisLabelContent = (e: any) => dayLabels[e.value] || '';

const ChartContainer = () => {
    return (
        <Chart style={{ width: '100%', height: '220px' }}>
            <ChartTitle text="Contributions per day" margin={{ left: 40 }} />

            <ChartLegend position="top" orientation="horizontal" />

            <ChartSeries>
                <ChartSeriesItem
                    type="heatmap"
                    data={data}
                    color="#216e39"
                    labels={{ visible: false }}
                    markers={{ type: 'roundedRect', border: { width: 2 } }}
                    name="Contributions"
                    tooltip={{ visible: true }}
                />
            </ChartSeries>

            <ChartXAxis>
                <ChartXAxisItem visible={false} />
            </ChartXAxis>

            <ChartYAxis>
                <ChartYAxisItem reverse={true} line={{ visible: false }} labels={{ content: yAxisLabelContent }} />
            </ChartYAxis>
        </Chart>
    );
};

export default ChartContainer;
