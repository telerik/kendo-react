import * as React from 'react';

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTitle,
    ChartLegend
} from '@progress/kendo-react-charts';

const categories = [2002, 2003, 2004];
const series = [
    {
        name: 'India',
        data: [3.907, 7.943, 7.848]
    },
    {
        name: 'Russian Federation',
        data: [4.743, 7.295, 7.175]
    },
    {
        name: 'Germany',
        data: [0.21, 0.375, 1.161]
    },
    {
        name: 'World',
        data: [1.988, 2.733, 3.994]
    }
];

const areaData = [
    {
        name: 'World',
        data: [3.988, 3.733, 3.994]
    },
    {
        name: 'Germany',
        data: [2.21, 2.375, 2.161]
    },
    {
        name: 'Russian Federation',
        data: [1.743, 1.295, 1.175]
    },
    {
        name: 'India',
        data: [0.907, 0.943, 0.848]
    }
];

const pieData = [
    {
        name: 'India',
        share: 0.24
    },
    {
        name: 'Russian Federation',
        share: 0.26,
        explode: true
    },
    {
        name: 'Germany',
        share: 0.1
    },
    {
        name: 'World',
        share: 0.4
    }
];

const ChartContainer = () => (
    <>
        <div className="row mb-3">
            <div className="col-6">
                <div className="k-card">
                    <Chart style={{ height: 350 }}>
                        <ChartTitle text="Column Chart" />
                        <ChartLegend position="top" orientation="horizontal" />
                        <ChartCategoryAxis>
                            <ChartCategoryAxisItem categories={categories} startAngle={45} />
                        </ChartCategoryAxis>
                        <ChartSeries>
                            {series.map((item, idx) => (
                                <ChartSeriesItem
                                    key={idx}
                                    type="column"
                                    tooltip={{ visible: true }}
                                    data={item.data}
                                    name={item.name}
                                />
                            ))}
                        </ChartSeries>
                    </Chart>
                </div>
            </div>
            <div className="col-6">
                <div className="k-card">
                    <Chart style={{ height: 350 }}>
                        <ChartTitle text="Line Chart" />
                        <ChartLegend position="top" orientation="horizontal" />
                        <ChartCategoryAxis>
                            <ChartCategoryAxisItem categories={categories} startAngle={45} />
                        </ChartCategoryAxis>
                        <ChartSeries>
                            {series.map((item, idx) => (
                                <ChartSeriesItem
                                    key={idx}
                                    type="line"
                                    tooltip={{ visible: true }}
                                    data={item.data}
                                    name={item.name}
                                />
                            ))}
                        </ChartSeries>
                    </Chart>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-6">
                <div className="k-card">
                    <Chart style={{ height: 350 }}>
                        <ChartTitle text="Area Chart" />
                        <ChartLegend position="top" orientation="horizontal" />
                        <ChartCategoryAxis>
                            <ChartCategoryAxisItem categories={categories} startAngle={45} />
                        </ChartCategoryAxis>
                        <ChartSeries>
                            {areaData.map((item, idx) => (
                                <ChartSeriesItem
                                    key={idx}
                                    type="area"
                                    tooltip={{ visible: true }}
                                    data={item.data}
                                    name={item.name}
                                />
                            ))}
                        </ChartSeries>
                    </Chart>
                </div>
            </div>
            <div className="col-6">
                <div className="k-card">
                    <Chart style={{ height: 350 }}>
                        <ChartTitle text="Pie Chart" />
                        <ChartLegend position="top" orientation="horizontal" />
                        <ChartSeries>
                            <ChartSeriesItem
                                type="pie"
                                overlay={{ gradient: 'sharpBevel' }}
                                tooltip={{ visible: true }}
                                data={pieData}
                                categoryField="name"
                                field="share"
                            />
                        </ChartSeries>
                    </Chart>
                </div>
            </div>
        </div>
    </>
);

export default ChartContainer;
