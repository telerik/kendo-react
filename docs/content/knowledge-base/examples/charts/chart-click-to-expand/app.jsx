import React from 'react';

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartTitle,
    ChartLegend,
} from '@progress/kendo-react-charts';

const series = [
    { category: '0-14', value: 0.2545, exploded: true },
    { category: '15-24', value: 0.1552, exploded: false },
    { category: '25-54', value: 0.4059, exploded: false },
    { category: '55-64', value: 0.0911, exploded: false },
    { category: '65+', value: 0.0933, exploded: false },
];

const labelContent = (props) => {
    let formatedNumber = Number(props.dataItem.value).toLocaleString(undefined, {
        style: 'percent',
        minimumFractionDigits: 2,
    });
    return `${props.dataItem.category} years old: ${formatedNumber}`;
};

const ChartContainer = () => {
    const [data, setData] = React.useState(series);

    const onSeriesClick = (event) => {
        const newData = data.map((item) => {
            item.exploded = item === event.dataItem ? !item.exploded : false;
            return item;
        });

        setData(newData);
    };
    return (
        <Chart onSeriesClick={onSeriesClick}>
        <ChartTitle text="World Population by Broad Age Groups" />
        <ChartLegend position="bottom" />
        <ChartSeries>
          <ChartSeriesItem
            type="pie"
            data={series}
            field="value"
            categoryField="category"
            explodeField="exploded"
            labels={{ visible: true, content: labelContent }}
          />
        </ChartSeries>
      </Chart>
    );
};

export default ChartContainer;
