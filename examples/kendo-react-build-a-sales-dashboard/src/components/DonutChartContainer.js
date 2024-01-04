import React from 'react';
import 'hammerjs';

import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels
} from '@progress/kendo-react-charts';

import { donutChartData } from '../data/appData';

/* This function's outputted string determines the label contents */
const labelTemplate = (e) => (e.category + '\n'  + (e.percentage*100) +'%');

export const DonutChartContainer = () => (
  <Chart style={{ height: 300 }}>
    <ChartSeries>
      <ChartSeriesItem type="donut" data={donutChartData} categoryField="foodType" field="percentSold" padding={0}>
        <ChartSeriesLabels color="#fff" background="none" content={labelTemplate} />
      </ChartSeriesItem>
    </ChartSeries>
    <ChartLegend visible={false} />
  </Chart>
);