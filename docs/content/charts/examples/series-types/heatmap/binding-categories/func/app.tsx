import * as React from 'react';

import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartXAxis,
    ChartXAxisItem,
    ChartYAxis,
    ChartYAxisItem
} from '@progress/kendo-react-charts';

const categories = {
    x: ['A1', 'A2', 'A3', 'A4'],
    y: ['B1', 'B2', 'B3', 'B4']
};

const data = [['A2', 'B3', 5]];

const ChartContainer = () => {
    return (
        <Chart style={{ width: '100%', height: '220px' }}>
            <ChartLegend position="top" orientation="horizontal" />

            <ChartSeries>
                <ChartSeriesItem type="heatmap" data={data} name="Heatmap" tooltip={{ visible: true }} />
            </ChartSeries>

            <ChartXAxis>
                <ChartXAxisItem categories={categories.x} />
            </ChartXAxis>

            <ChartYAxis>
                <ChartYAxisItem categories={categories.y} />
            </ChartYAxis>
        </Chart>
    );
};

export default ChartContainer;
