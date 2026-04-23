import * as React from 'react';
import { Chart, ChartSeries, ChartSeriesItem, ChartTitle, ChartLegend } from '@progress/kendo-react-charts';
import { series } from './data';

const App = () => (
    <Chart style={{ width: 800, margin: 'auto auto' }}>
        <ChartTitle text="Bar Chart with Patterns" position="top" align="center" />
        <ChartSeries>
            {series.map((item, idx) => (
                <ChartSeriesItem
                    key={idx}
                    type="column"
                    overlay={{ gradient: 'none' }}
                    border={{ width: 0 }}
                    {...item}
                />
            ))}
        </ChartSeries>
        <ChartLegend position="bottom" />
    </Chart>
);

export default App;
