---
title: SeriesType
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the SeriesType."
api_reference: true
type: inner_api
slug: api_charts_seriestype
---

# SeriesType
[The series type](https://www.telerik.com/kendo-react-ui/components/charts/series-types#series-type)

```jsx
import {
 Chart,
 ChartSeries,
 ChartSeriesItem
} from '@progress/kendo-react-charts';

const data = [1, 2, 3];
const seriesType = "verticalLine";

const ChartContainer = () => (
 <Chart>
   <ChartSeries>
     <ChartSeriesItem type="line" data={data} type={seriesType} />
   </ChartSeries>
 </Chart>
);
```


`type` SeriesType = "area" | "bar" | "boxPlot" | "bubble" | "bullet" | "candlestick" | "column" | "donut" | "exponentialTrendline" | "funnel" | "pyramid" | "heatmap" | "horizontalWaterfall" | "line" | "linearTrendline" | "logarithmicTrendline" | "movingAverageTrendline" | "ohlc" | "pie" | "polarArea" | "polarLine" | "polarScatter" | "polynomialTrendline" | "powerTrendline" | "radarArea" | "radarColumn" | "radarLine" | "rangeArea" | "rangeBar" | "rangeColumn" | "scatter" | "scatterLine" | "verticalArea" | "verticalBoxPlot" | "verticalBullet" | "verticalLine" | "verticalRangeArea" | "waterfall";
