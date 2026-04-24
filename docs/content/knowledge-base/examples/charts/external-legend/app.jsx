import React from 'react';

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTitle,
    ChartLegend,
} from '@progress/kendo-react-charts';

const categories = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009];
const seriesData = [
    {
        name: 'India',
        data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.89, 8.238],
        visible: true,
        color: 'red',
    },
    {
        name: 'Russian Federation',
        data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832],
        visible: true,
        color: 'blue',
    },
    {
        name: 'Germany',
        data: [0.01, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127],
        visible: true,
        color: 'green',
    },
    {
        name: 'World',
        data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245],
        visible: true,
        color: 'pink',
    },
];

const ChartContainer = () => {
    const [series, setSeries] = React.useState(seriesData);
    const handleLegendItemClick = (e, seriesItem) => {
        let newSeries = series.map((item) => {
            if (item.name === seriesItem.name) {
                item.visible = !item.visible;
            }
            return item;
        });
        setSeries(newSeries);
    };
    return (
        <div>
            <Chart onLegendItemClick={handleLegendItemClick}>
                <ChartTitle text="Gross domestic product growth GDP annual" />
                <ChartLegend visible={false} />
                <ChartCategoryAxis>
                    <ChartCategoryAxisItem categories={categories} startAngle={45} />
                </ChartCategoryAxis>
                <ChartSeries>
                    {series.map((item, idx) => {
                        return (
                            <ChartSeriesItem
                                key={idx}
                                type="column"
                                data={item.data}
                                name={item.name}
                                visible={item.visible}
                                color={item.color}
                            />
                        );
                    })}
                </ChartSeries>
            </Chart>
            <div>
                <h5>Legend</h5>
                {series.map((item, idx) => {
                    return (
                        <p
                            key={idx}
                            style={{ color: item.color, opacity: item.visible ? 1 : 0.5 }}
                            onClick={(e) => handleLegendItemClick(e, item)}
                        >
                            {item.name}
                        </p>
                    );
                })}
            </div>
        </div>
    );
};

export default ChartContainer;
