---
title: CategoryBaseUnit
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the CategoryBaseUnit."
api_reference: true
type: inner_api
slug: api_charts_categorybaseunit
---

# CategoryBaseUnit
The `baseUnit` type of the category axis.

```jsx
import {
 Chart,
 ChartCategoryAxis,
 ChartCategoryAxisItem,
 ChartSeries,
 ChartSeriesItem
} from '@progress/kendo-react-charts';

const baseUnit = "months";
const data = [{ category: new Date(2000, 0, 1), value: 1 }, { category: new Date(2001, 0, 1), value: 1}];

const ChartContainer = () => (
 <Chart>
   <ChartCategoryAxis>
    <ChartCategoryAxisItem baseUnit={baseUnit} />
   </ChartCategoryAxis>
   <ChartSeries>
     <ChartSeriesItem categoryField="category" data={data} />
   </ChartSeries>
 </Chart>
);
```


`type` CategoryBaseUnit = "milliseconds" | "seconds" | "minutes" | "hours" | "days" | "weeks" | "months" | "years" | "auto" | "fit";
