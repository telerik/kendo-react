import * as React from 'react';
import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
} from '@progress/kendo-react-charts';
import 'hammerjs';

const series = [
  {
    category: 'Infrastructure',
    value: 6000,
    color: '#4B5FFA',
  },
  {
    category: 'Services',
    value: 6000,
    color: '#2196F3',
  },
  {
    category: 'R&D',
    value: 6000,
    color: '#43A047',
  },
  {
    category: 'Outsourcing',
    value: 6000,
    color: '#FFC107',
  },
  {
    category: 'Marketing',
    value: 6000,
    color: '#FF5722',
  },
  {
    category: 'Strategy',
    value: 6000,
    color: '#E91E63',
  },
];

export const CostBreakdownChart = () => (
   <div className="total-cost-container">
     <Chart>
    <ChartLegend position="right" orientation="vertical" />
    <ChartSeries>
      <ChartSeriesItem
        type="pie"
        data={series}
        field="value"
        categoryField="category"
      />
    </ChartSeries>
  </Chart>
   </div>
);