---
title: LineStyle
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the LineStyle."
api_reference: true
type: inner_api
slug: api_charts_linestyle
---

# LineStyle
The line style of the series.

```jsx
import {
 Chart,
 ChartSeries,
 ChartSeriesItem
} from '@progress/kendo-react-charts';

const data = [1, 2, 3];

const ChartContainer = () => (
 <Chart>
   <ChartSeries>
     <ChartSeriesItem type="line" data={data} style="smooth" />
   </ChartSeries>
 </Chart>
);
```


`type` LineStyle = "normal" | "step" | "smooth";
