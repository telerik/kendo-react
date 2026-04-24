import * as React from 'react';

import { Chart, ChartTitle, ChartSeries, ChartSeriesItem, ChartLegend } from '@progress/kendo-react-charts';
import data from './ch-box-plot-data';

const ChartContainer = () => (
    <Chart>
        <ChartTitle text="Monthly Mean Temperatures (&deg;F)" />
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem
                type="boxPlot"
                name="Temperature"
                lowerField="lower"
                q1Field="q1"
                medianField="median"
                q3Field="q3"
                upperField="upper"
                outliersField="outliers"
                meanField="mean"
                categoryField="year"
                data={data}
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
