---
title: AxisLabelsPosition
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the AxisLabelsPosition."
api_reference: true
type: inner_api
slug: api_charts_axislabelsposition
---

# AxisLabelsPosition
The position of the axis labels.

```jsx
import { Chart, ChartValueAxis, ChartValueAxisItem } from '@progress/kendo-react-charts';

const ChartContainer = () => (
 <Chart>
   <ChartValueAxis>
     <ChartValueAxisItem labels={{ position: "end" }}/>
   </ChartValueAxis>
 </Chart>
);
```


`type` AxisLabelsPosition = "start" | "end" | "onAxis" | "";
