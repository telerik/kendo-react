import * as React from 'react';

import { Chart, ChartSeries, ChartSeriesItem, ChartSeriesLabels, ChartLegend } from '@progress/kendo-react-charts';

const weatherData: object[] = [
    { windSpeed: 16.4, rainfall: 5.4 },
    { windSpeed: 21.7, rainfall: 2 },
    { windSpeed: 25.4, rainfall: 3 },
    { windSpeed: 18, rainfall: 4 },
    { windSpeed: 10.9, rainfall: 1 },
    { windSpeed: 13.6, rainfall: 3.2 },
    { windSpeed: 10.9, rainfall: 7.4 },
    { windSpeed: 10.9, rainfall: 5 },
    { windSpeed: 15.9, rainfall: 8.2 },
    { windSpeed: 30.4, rainfall: 7 },
    { windSpeed: 16.4, rainfall: 1.8 },
    { windSpeed: 6.6, rainfall: 0.3 },
    { windSpeed: 29.9, rainfall: 0.4 },
    { windSpeed: 27.1, rainfall: 2.3 },
    { windSpeed: 24.4, rainfall: 5 }
];

const ChartContainer = () => (
    <Chart>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartSeries>
            <ChartSeriesItem
                type="scatter"
                name="Weather"
                data={weatherData}
                xField="rainfall"
                yField="windSpeed"
                tooltip={{ visible: true }}
            >
                <ChartSeriesLabels format="{1:N1} mm; {0:N1} km/h" />
            </ChartSeriesItem>
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
