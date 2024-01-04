import * as React from "react";
import { Chart, ChartLegend, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem } from "@progress/kendo-react-charts";

export const PerformanceChart = () => {
const categories = ['Mon', 'Tu', 'Wed', 'Thru', 'Fri'];
const series = [
  {
    name: 'Male',
    data: [30, 30, 16, 2, 30],
    color: 'blue',
  },
  {
    name: 'Female',
    data: [20, 15, 40, 10, 20],
    color: 'purple',
  },
];

  return <Chart>
  <ChartLegend position="bottom" orientation="horizontal" />
  <ChartCategoryAxis>
    <ChartCategoryAxisItem categories={categories} />
  </ChartCategoryAxis>
  <ChartSeries>
    
    {series.map((item, idx) => (
      <ChartSeriesItem
        key={idx}
        type="column"
        data={item.data}
        name={item.name}
        gap={10}
        color={item.color}
      />
    ))}
  </ChartSeries>
</Chart>
};