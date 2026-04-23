import * as React from 'react';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartLegend,
    ChartTitle
} from '@progress/kendo-react-charts';

const categories = ['Q1', 'Q2', 'Q3'];

const staticSeries = [
    { name: 'Product A', values: [120, 150, 180], color: '#4FC3F7' },
    { name: 'Product B', values: [80, 100, 90], color: '#81C784' },
    { name: 'Product C', values: [50, 70, 60], color: '#FFB74D' }
];

const computeTotals = (series: typeof staticSeries) => {
    return categories.map((_, idx) => series.reduce((sum, s) => sum + (s.values[idx] || 0), 0));
};

const App = () => {
    const totals = computeTotals(staticSeries);

    const totalsData = totals.map((total) => ({
        value: 0,
        label: total
    }));

    return (
        <Chart>
            <ChartTitle text="Quarterly Sales by Product" />
            <ChartLegend position="bottom" />
            <ChartCategoryAxis>
                <ChartCategoryAxisItem categories={categories} />
            </ChartCategoryAxis>
            <ChartValueAxis>
                <ChartValueAxisItem title={{ text: 'Sales (thousands)' }} />
            </ChartValueAxis>
            <ChartSeries>
                {staticSeries.map((series, index) => (
                    <ChartSeriesItem
                        key={index}
                        type="bar"
                        stack={true}
                        name={series.name}
                        data={series.values}
                        color={series.color}
                    />
                ))}
                <ChartSeriesItem
                    type="bar"
                    stack={true}
                    name="Total"
                    data={totalsData}
                    field="value"
                    color="black"
                    labels={{
                        visible: true,
                        position: 'right',
                        color: '#333',
                        background: 'transparent',
                        font: 'bold 12px sans-serif',
                        content: (e) => e.dataItem.label
                    }}
                    tooltip={{ visible: false }}
                />
            </ChartSeries>
        </Chart>
    );
};

export default App;
