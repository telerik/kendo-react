import * as React from 'react';
import {
  Chart,
  ChartTooltip,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
} from '@progress/kendo-react-charts';
import 'hammerjs';
const generateData = () => {
  let data = [];
  for (var i = 0; i < 100; i++) {
    data.push({ period: i, value: Math.random() * 1000 });
  }
  return data;
};
const curveValues = generateData();

const ChartContainer = () => (
  <Chart>
    <ChartSeries>
      <ChartSeriesItem
        renderAs={'canvas'}
        data={curveValues}
        type="line"
        field="value"
        markers={{ visible: false }}
        categoryField="period"
      />
    </ChartSeries>
    <ChartCategoryAxis>
      <ChartCategoryAxisItem
        maxDivisions={30}
        labels={{
          step: 15,
        }}
      />
    </ChartCategoryAxis>
    <ChartTooltip format="{0}" />
  </Chart>
);

export default ChartContainer;