---
title: BaseUnit
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the BaseUnit."
api_reference: true
type: inner_api
slug: api_charts_baseunit
---

# BaseUnit
The `baseUnit` type of an X or Y axis.

```jsx
import {
 Chart,
 ChartXAxis,
 ChartXAxisItem,
 ChartSeries,
 ChartSeriesItem
} from '@progress/kendo-react-charts';

const baseUnit = "months";
const data = [[new Date(2000, 0, 1), 1], [new Date(2001, 0, 1), 1]];

const ChartContainer = () => (
 <Chart>
   <ChartXAxis>
    <ChartXAxisItem baseUnit={baseUnit} />
   </ChartXAxis>
   <ChartSeries>
     <ChartSeriesItem type="scatter" data={data} />
   </ChartSeries>
 </Chart>
);
```


`type` BaseUnit = "milliseconds" | "seconds" | "minutes" | "hours" | "days" | "weeks" | "months" | "years";
