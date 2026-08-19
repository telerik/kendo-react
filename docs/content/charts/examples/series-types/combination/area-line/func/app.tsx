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

const energyConsumption = [580, 520, 460, 380, 320, 290, 310, 300, 340, 410, 480, 560];

const avgTemperature = [2, 4, 8, 14, 18, 22, 25, 24, 20, 14, 8, 3];

const TooltipTemplate = (context) => {
    const { category, series, value } = context.point || context;
    if (!series) return null;
    let formattedValue;
    if (series.name === 'Avg. Temperature') {
        formattedValue = new Intl.NumberFormat('en-US').format(value) + '°C';
    } else {
        formattedValue = new Intl.NumberFormat('en-US').format(value) + ' MWh';
    }
    return (
        <div>
            <strong>{category}</strong>
            <br />
            {series.name}: <strong>{formattedValue}</strong>
        </div>
    );
};

const ChartContainer = () => (
    <Chart style={{ height: '320px' }}>
        <ChartTitle text="Monthly Energy Consumption vs. Average Temperature (2025)" />

        <ChartLegend position="bottom" />

        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={months} axisCrossingValue={[0, 12]} />
        </ChartCategoryAxis>

        <ChartValueAxis>
            <ChartValueAxisItem name="energy" title={{ text: 'Energy (MWh)' }} labels={{ format: 'n0' }} />
            <ChartValueAxisItem
                name="temp"
                title={{ text: 'Avg. Temperature (°C)' }}
                labels={{ format: 'n0' }}
                min={-5}
                max={35}
            />
        </ChartValueAxis>

        <ChartTooltip render={TooltipTemplate} />

        <ChartSeries>
            <ChartSeriesItem
                type="area"
                data={energyConsumption}
                name="Energy Consumption"
                axis="energy"
                tooltip={{ visible: true }}
                opacity={0.6}
            />
            <ChartSeriesItem
                type="line"
                data={avgTemperature}
                name="Avg. Temperature"
                axis="temp"
                tooltip={{ visible: true }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
