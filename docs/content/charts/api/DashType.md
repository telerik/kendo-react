---
title: DashType
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the DashType."
api_reference: true
type: inner_api
slug: api_charts_dashtype
---

# DashType
The dash line type.

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
     <ChartSeriesItem type="line" data={data} dashType="dot" />
   </ChartSeries>
 </Chart>
);
```


`type` DashType = "dash" | "dashDot" | "dot" | "longDash" | "longDashDot" | "longDashDotDot" | "solid";
