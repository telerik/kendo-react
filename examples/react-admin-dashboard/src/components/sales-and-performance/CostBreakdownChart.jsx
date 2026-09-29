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
    color: 'var(--kendo-color-primary)',
  },
  {
    category: 'Services',
    value: 6000,
    color: 'var(--kendo-color-info)',
  },
  {
    category: 'R&D',
    value: 6000,
    color: 'var(--kendo-color-success)',
  },
  {
    category: 'Outsourcing',
    value: 6000,
    color: 'var(--kendo-color-warning)',
  },
  {
    category: 'Marketing',
    value: 6000,
    color: 'var(--kendo-color-error)',
  },
  {
    category: 'Strategy',
    value: 6000,
    color: 'var(--kendo-color-secondary)',
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