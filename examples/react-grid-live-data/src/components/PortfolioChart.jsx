import 'hammerjs';
import * as React from 'react';
import { Chart, ChartTitle, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem, ChartTooltip } from '@progress/kendo-react-charts';
const categories = ['Mon', 'Tue', 'Wed', 'Thru', 'Fri', 'Sat', 'Sun'];
const firstSeries = [123, 276, 310, 212, 240, 156, 98];


export const PortfolioChart = () => {

  const defaultTooltipRender = ({ point }) => `$${point.value}`;

  return <Chart>
        <ChartTooltip render={defaultTooltipRender}/>
        <ChartTitle/>
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={categories} />
        </ChartCategoryAxis>
        <ChartSeries>
          
          <ChartSeriesItem type="area" data={firstSeries} line={{
          style: 'smooth'
        }} />
        </ChartSeries>
      </Chart>
};
 