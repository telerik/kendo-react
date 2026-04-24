---
title: NotePosition
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the NotePosition."
api_reference: true
type: inner_api
slug: api_charts_noteposition
---

# NotePosition
Specifies the position of a note.

```jsx
import {
 Chart,
 ChartValueAxis,
 ChartValueAxisItem
} from '@progress/kendo-react-charts';

const data = [{value: 1}];
const position = "right";

const ChartContainer = () => (
 <Chart>
   <ChartValueAxis>
     <ChartValueAxisItem notes={{ data, position }} />
   </ChartValueAxis>
 </Chart>
);
```


`type` NotePosition = "top" | "bottom" | "left" | "right";
