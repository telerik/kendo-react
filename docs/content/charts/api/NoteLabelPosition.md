---
title: NoteLabelPosition
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the NoteLabelPosition."
api_reference: true
type: inner_api
slug: api_charts_notelabelposition
---

# NoteLabelPosition
The position of a note label.

```jsx
import {
 Chart,
 ChartValueAxis,
 ChartValueAxisItem
} from '@progress/kendo-react-charts';

const data = [{value: 1, label: { text: 'Foo' }}];
const position = "outside";

const ChartContainer = () => (
 <Chart>
   <ChartValueAxis>
     <ChartValueAxisItem notes={{ data, label: { position } }} />
   </ChartValueAxis>
 </Chart>
);
```


`type` NoteLabelPosition = "inside" | "outside";
