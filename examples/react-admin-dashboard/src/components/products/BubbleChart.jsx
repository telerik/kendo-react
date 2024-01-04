import * as React from 'react';
import {
  Chart,
  ChartTooltip,
  ChartTitle,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartXAxis,
  ChartXAxisItem,
  ChartYAxis,
  ChartYAxisItem,
} from '@progress/kendo-react-charts';
import data from '../../data/bubble-chart.json';
import 'hammerjs';

export const BubbleChart = () => (
  <Chart>
    <ChartTitle text="Reveenue per Product Type" align="left"/>
    <ChartSeries>
      <ChartSeriesItem
        type="bubble"
        xField="x"
        yField="y"
        sizeField="size"
        categoryField="category"
        data={data}
      />
    </ChartSeries>
    <ChartXAxis>
      <ChartXAxisItem
        axisCrossingValue={-5000}
        majorUnit={2000}
        labels={{
          format: '{0:N0}',
          skip: 1,
          rotation: 'auto',
        }}
      />
    </ChartXAxis>
    <ChartYAxis>
      <ChartYAxisItem
        labels={{
          format: '{0:N0}',
        }}
      />
    </ChartYAxis>
    <ChartLegend visible={true} />
    <ChartTooltip format="{3}: {2:N0} revenue" opacity={1} />
  </Chart>
);
