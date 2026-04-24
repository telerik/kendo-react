---
title: MarkerType
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the MarkerType."
api_reference: true
type: inner_api
slug: api_charts_markertype
---

# MarkerType
Specifies the marker type.

> Note that `"rect"` is an alias for `"square"`.

```jsx
import {
 Chart,
 ChartSeries,
 ChartSeriesItem
} from '@progress/kendo-react-charts';

const data = [1, 2, 3];
const markerType = "cross";

const ChartContainer = () => (
 <Chart>
   <ChartSeries>
     <ChartSeriesItem type="line" data={data} markers={{ type: markerType }} />
   </ChartSeries>
 </Chart>
);
```


`type` MarkerType = "square" | "circle" | "triangle" | "cross" | "rect" | "roundedRect";
