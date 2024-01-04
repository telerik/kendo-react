import * as React from "react";
import { Chart, ChartSeries, ChartSeriesItem, ChartCategoryAxis} from "@progress/kendo-react-charts";

const firstSeries = [123, 276, 310, 212, 240, 156, 98];
const secondSeries = [165, 210, 287, 144, 190, 167, 212];

export const SalesRevenueChart = () => {
  return <Chart>
        <ChartCategoryAxis>
        </ChartCategoryAxis>
        <ChartSeries>
          <ChartSeriesItem type="area" data={firstSeries}  color={'#FFD246'}
/>
          <ChartSeriesItem type="area" data={secondSeries} color={'#78D237'}/>
        </ChartSeries>
      </Chart>;
};