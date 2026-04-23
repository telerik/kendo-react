import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
    ChartLegend,
    ChartTooltip
} from '@progress/kendo-react-charts';
import { gdpGrowthSeries } from './ch-gdp-data';

const labelsAriaContent = (e: any) => `GDP Growth for ${e.series.name} in ${e.category} is ${e.value}%.`;

const ChartContainer = () => (
    <>
        <Chart>
            <ChartTitle
                text="Gross domestic product growth /GDP annual %/"
                description="A chart that visualizes the trends in GDP across different countries for the period 2002-2011"
            />
            <ChartLegend position="bottom" orientation="horizontal" />
            <ChartTooltip format="{0}%"></ChartTooltip>
            <ChartSeries>
                {gdpGrowthSeries.map((item, idx) => (
                    <ChartSeriesItem
                        key={idx}
                        type="line"
                        style="smooth"
                        tooltip={{ visible: true }}
                        data={item.data}
                        name={item.name}
                        labels={{ content: labelsAriaContent, visible: false }}
                    />
                ))}
            </ChartSeries>
        </Chart>
    </>
);

export default ChartContainer;
