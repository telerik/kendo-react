import * as React from 'react';
import * as ReactDOM from 'react-dom';

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

import data from './bubble-data.json';

import 'hammerjs';

const xPlotBands = [
  {
    from: -5000,
    to: 0,
    color: '#00f',
    opacity: 0.05,
  },
];

let categoryColors = {};
const randomColor = (props) => {
  if (categoryColors[props.dataItem.category]) {
    return categoryColors[props.dataItem.category];
  } else {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    categoryColors[props.dataItem.category] = '#' + randomColor;
    return '#' + randomColor;
  }
};

const ChartContainer = () => (
  <Chart>
    <ChartTitle text="Job Growth" />
    <ChartSeries>
      <ChartSeriesItem
        name="MySeriesName"
        type="bubble"
        xField="x"
        color={randomColor}
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
        plotBands={xPlotBands}
        labels={{ format: '{0:N0}', skip: 1, rotation: 'auto' }}
      />
    </ChartXAxis>
    <ChartYAxis>
      <ChartYAxisItem labels={{ format: '{0:N0}' }} />
    </ChartYAxis>
    <ChartLegend visible={true} position="right" />
    <ChartTooltip format="{3}: {2:N0} applications" opacity={1} />
  </Chart>
);

ReactDOM.render(<ChartContainer />, document.querySelector('my-app'));
