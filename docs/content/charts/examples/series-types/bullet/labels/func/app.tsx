import * as React from 'react';

import {
    Chart,
    ChartTitle,
    ChartTooltip,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeriesLabels,
    TooltipContext
} from '@progress/kendo-react-charts';

const ChartContainer = () => {
    const tempPlotBands = [
        { from: 30, to: 45, color: '#e62325', opacity: 1 },
        { from: 15, to: 30, color: '#ffc000', opacity: 1 },
        { from: 0, to: 15, color: '#37b400', opacity: 1 },
        { from: -10, to: 0, color: '#5392ff', opacity: 1 }
    ];

    const temp = [[25, 22]];

    const tooltipRender = (e: TooltipContext) => {
        const { value } = e.point;
        return (
            <span>
                Maximum: {value.target}
                <br />
                Average: {value.current}
            </span>
        );
    };

    return (
        <div>
            <Chart style={{ height: 120 }}>
                <ChartTitle text="Temperature [&deg;C]" />
                <ChartLegend />
                <ChartSeries>
                    <ChartSeriesItem type="bullet" name="Temperature" color="#e62325" data={temp}>
                        <ChartSeriesLabels position="center" font="bold 12pt sans-serif" />
                    </ChartSeriesItem>
                </ChartSeries>
                <ChartValueAxis>
                    <ChartValueAxisItem min={-10} max={45} plotBands={tempPlotBands} />
                </ChartValueAxis>
                <ChartTooltip render={tooltipRender} />
            </Chart>
        </div>
    );
};

export default ChartContainer;
