import * as React from 'react';

import { Chart, ChartLegend, ChartSeries, ChartSeriesItem, ChartTitle } from '@progress/kendo-react-charts';

const series = [
    { category: '0-14', value: 0.2545 },
    { category: '15-24', value: 0.1552 },
    { category: '25-54', value: 0.4059 },
    { category: '55-64', value: 0.0911 },
    { category: '65+', value: 0.0933 }
];

const labelContent = (props) => {
    let formatedNumber = Number(props.dataItem.value).toLocaleString(undefined, {
        style: 'percent',
        minimumFractionDigits: 2
    });
    return `${props.dataItem.category} years old: ${formatedNumber}`;
};

const ChartContainer = () => (
    <Chart>
        <ChartTitle text="World Population by Broad Age Groups" />
        <ChartLegend position="bottom" />
        <ChartSeries>
            <ChartSeriesItem
                type="pie"
                data={series}
                field="value"
                categoryField="category"
                labels={{ visible: true, content: labelContent }}
            />
        </ChartSeries>
    </Chart>
);

export default ChartContainer;
