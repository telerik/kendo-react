---
title: AxisTitlePosition
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the AxisTitlePosition."
api_reference: true
type: inner_api
slug: api_charts_axistitleposition
---

# AxisTitlePosition
The position of an axis title.

```jsx
import { Chart, ChartValueAxis, ChartValueAxisItem } from '@progress/kendo-react-charts';

const ChartContainer = () => (
 <Chart>
   <ChartValueAxis>
     <ChartValueAxisItem title={{ text: 'Title', position: "top" }}/>
   </ChartValueAxis>
 </Chart>
);
```


`type` AxisTitlePosition = "top" | "bottom" | "left" | "right" | "center";
