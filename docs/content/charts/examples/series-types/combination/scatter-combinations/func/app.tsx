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
    ChartYAxisItem,
    ChartTooltip
} from '@progress/kendo-react-charts';

const scatterData = [
    { x: 20, y: 10 },
    { x: 40, y: 50 },
    { x: 50, y: 25 },
    { x: 80, y: 90 },
    { x: 90, y: 100 },
    { x: 100, y: 70 },
    { x: 110, y: 120 },
    { x: 120, y: 140 }
];

const trendlineData = [
    { x: 20, y: 20 },
    { x: 120, y: 130 }
];

const TooltipTemplate = (context) => {
    const { series, value } = context.point || context;
    if (!series) return null;
    if (series.name === 'Data Points') {
        return (
            <div>
                <strong>{series.name}</strong>
                <br />
                X: {value.x}, Y: {value.y}
            </div>
        );
    }
    return null;
};

const ChartContainer = () => (
    <Chart style={{ height: '380px' }}>
        <ChartTitle text="Property Size vs. Sale Price with Trend Line" />

        <ChartLegend position="bottom" />

        <ChartXAxis>
            <ChartXAxisItem title={{ text: 'Size (sq ft)' }} min={0} max={150} labels={{ format: 'n0' }} />
        </ChartXAxis>

        <ChartYAxis>
            <ChartYAxisItem title={{ text: 'Price ($1000s)' }} min={0} max={150} labels={{ format: 'n0' }} />
        </ChartYAxis>

        <ChartTooltip render={TooltipTemplate} />

        <ChartSeries>
            <ChartSeriesItem
                type="scatter"
                data={scatterData}
                name="Data Points"
                tooltip={{ visible: true }}
                size={10}
            />
            <ChartSeriesItem
                type="scatterLine"
                data={trendlineData}
                name="Trend Line"
                tooltip={{ visible: false }}
                style="smooth"
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
