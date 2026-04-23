import * as React from 'react';
import internetGrowthData from './ch-donut-series-data';

import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartArea,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels
} from '@progress/kendo-react-charts';

const labelContent = (e: any) => `${e.category}: \n ${e.value}%`;

const ChartContainer = () => {
    const mapSeries = (series, index, array) => (
        <ChartSeriesItem
            type="donut"
            startAngle={150}
            name={series.name}
            data={series.data}
            field="value"
            categoryField="category"
            colorField="color"
            tooltip={{ visible: true }}
        >
            {index === array.length - 1 && (
                <ChartSeriesLabels position="outsideEnd" background="none" content={labelContent} />
            )}
        </ChartSeriesItem>
    );

    const renderTooltip = (context: any) => {
        const { category, series, value } = context.point || context;
        return (
            <div>
                {category} ({series.name}): {value}%
            </div>
        );
    };

    return (
        <Chart>
            <ChartTitle text="Share of Internet Population Growth" />
            <ChartLegend position="top" orientation="horizontal" />
            <ChartTooltip render={renderTooltip} />
            <ChartArea background="none" />
            <ChartSeries>{internetGrowthData.map(mapSeries)}</ChartSeries>
        </Chart>
    );
};

export default ChartContainer;
