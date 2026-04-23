import * as React from 'react';

import { Chart, ChartLegend, ChartSeries, ChartSeriesItem, ChartSeriesLabels } from '@progress/kendo-react-charts';

import data from './ch-power-distribution-data';

const labelContent = (e) => e.category;

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem
                type="donut"
                name="Power Distribution"
                data={data}
                categoryField="kind"
                field="share"
                tooltip={{ visible: true }}
            >
                <ChartSeriesLabels color="#fff" background="none" content={labelContent} />
            </ChartSeriesItem>
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
