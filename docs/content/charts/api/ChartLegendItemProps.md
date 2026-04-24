---
title: ChartLegendItemProps
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the ChartLegendItemProps."
api_reference: true
type: inner_api
slug: api_charts_chartlegenditemprops
---

# ChartLegendItemProps
Represents the props of the KendoReact ChartLegendItem component.


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


#### area?


</td>
<td type class="table-cell-type">


<code>


[LegendItemArea]({% slug api_charts_legenditemarea %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the configuration of the legend items of type `area`.
By default, all series except line and scatter use this legend type.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### cursor?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The cursor style of the legend item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### highlight?


</td>
<td type class="table-cell-type">


<code>


[LegendItemHighlight]({% slug api_charts_legenditemhighlight %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The highlight configuration of the legend item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### line?


</td>
<td type class="table-cell-type">


<code>


[LegendItemLine]({% slug api_charts_legenditemline %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the configuration of the legend items of type `line`.
This is the default legend item type for all line and scatter series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### markers?


</td>
<td type class="table-cell-type">


<code>


[LegendItemMarkers]({% slug api_charts_legenditemmarkers %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The markers configuration of the legend item.
Defaults to the series options.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### type?


</td>
<td type class="table-cell-type">


<code>


[LegendItemType]({% slug api_charts_legenditemtype %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the type of the legend item.
The default value is based on the series type.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### visual?


</td>
<td type class="table-cell-type">


<code>


(e: [LegendItemVisualArgs]({% slug api_charts_legenditemvisualargs %})) => Element


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function for creating a custom visual for the legend items.

The available argument fields are:
- `options`&mdash;The item options.
- `createVisual`&mdash;A function for getting the default visual.
- `series`&mdash;The item series.
- `pointIndex`&mdash;The index of the point in the series. Available for the Pie, Donut, and Funnel series.


</td>
</tr>
</tbody>
</table>



