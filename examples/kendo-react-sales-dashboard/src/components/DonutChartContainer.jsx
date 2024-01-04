import React from 'react';

import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
  ChartTooltip,
  ChartSeriesItemTooltip
} from '@progress/kendo-react-charts';

const labelContent = (e) => (Math.floor(e.value*100));
const tooltipContent = (e) => {
  if(e.point){
    return e.point.category
  }
}

export const DonutChartContainer = (props) => (
  <Chart style={{height:300}}>
    <ChartTooltip />
    <ChartSeries>
      <ChartSeriesItem type="donut" data={props.data} categoryField="kind" field="share" padding={0}>
        <ChartSeriesItemTooltip render={tooltipContent}/>
        <ChartSeriesLabels color="#fff" background="none" content={labelContent} />
      </ChartSeriesItem>
    </ChartSeries>
    <ChartLegend visible={false} />
  </Chart>
);
