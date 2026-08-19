import * as React from 'react';

import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartTooltip
} from '@progress/kendo-react-charts';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const sessions = [24000, 28000, 31000, 35000, 38000, 42000, 45000, 43000, 39000, 47000, 55000, 68000];

const conversionRate = [0.032, 0.031, 0.034, 0.035, 0.033, 0.036, 0.038, 0.037, 0.035, 0.039, 0.041, 0.043];

const TooltipTemplate = (context) => {
    const { category, points } = context;
    if (!points) return null;
    return (
        <div>
            <strong>{category}</strong>
            {points.map((point, i) => {
                const name = point.series.name;
                const val = point.value;
                const formatted =
                    name === 'Sessions'
                        ? new Intl.NumberFormat('en-US').format(val)
                        : new Intl.NumberFormat('en-US', {
                              style: 'percent',
                              minimumFractionDigits: 1,
                              maximumFractionDigits: 1
                          }).format(val);
                return (
                    <div key={i}>
                        {name}: <strong>{formatted}</strong>
                    </div>
                );
            })}
        </div>
    );
};

const ChartContainer = () => (
    <Chart style={{ height: '350px' }}>
        <ChartTitle text="Monthly Website Sessions vs. Conversion Rate (2025)" />

        <ChartLegend visible={true} position="bottom" />

        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={months} axisCrossingValue={[0, 12]} />
        </ChartCategoryAxis>

        <ChartValueAxis>
            <ChartValueAxisItem name="sessions" title={{ text: 'Sessions' }} labels={{ format: 'n0' }} min={0} />
            <ChartValueAxisItem
                name="rate"
                title={{ text: 'Conversion Rate' }}
                labels={{ format: 'p1' }}
                min={0}
                max={0.06}
            />
        </ChartValueAxis>

        <ChartTooltip shared={true} render={TooltipTemplate} />

        <ChartSeries>
            <ChartSeriesItem
                type="column"
                data={sessions}
                name="Sessions"
                axis="sessions"
                tooltip={{ visible: true }}
            />
            <ChartSeriesItem
                type="line"
                data={conversionRate}
                name="Conversion Rate"
                axis="rate"
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
