---
title: Chart
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the Chart."
api_reference: true
type: inner_api
slug: api_charts_chart
---

# Chart
Represents the [KendoReact Chart component](https://www.telerik.com/kendo-react-ui/components/charts/chart).




```jsx
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartTitle,
    ChartLegend
} from '@progress/kendo-react-charts';

const categories = [ 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011 ];
const series = [ {
    name: 'India',
    data: [ 3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855 ]
}, {
    name: 'Russian Federation',
    data: [ 4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3 ]
}, {
    name: 'Germany',
    data: [ 0.010, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.690, 2.995 ]
}, {
    name: 'World',
    data: [ 1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727 ]
} ];

const ChartContainer = () => (
    <Chart>
        <ChartTitle text="Gross domestic product growth GDP annual" />
        <ChartLegend position="top" orientation="horizontal" />
        <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={categories} startAngle={45} />
        </ChartCategoryAxis>
        <ChartSeries>
            {series.map((item, idx) => (
                <ChartSeriesItem
                    key={idx}
                    type="column"
                    data={item.data}
                    name={item.name}
                />))}
        </ChartSeries>
    </Chart>
);
```



<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### element


</td>
<td type class="table-cell-type">


<code>


"null" | HTMLDivElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The DOM element of the Chart.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### props


</td>
<td type class="table-cell-type">


<code>


Readonly&lt;[ChartProps]({% slug api_charts_chartprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the Chart component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### surface


</td>
<td type class="table-cell-type">


<code>


"null" | Surface


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Drawing `Surface` of the Chart.


</td>
</tr>
</tbody>
</table>



