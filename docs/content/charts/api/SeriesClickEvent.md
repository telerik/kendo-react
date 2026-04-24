---
title: SeriesClickEvent
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the SeriesClickEvent."
api_reference: true
type: inner_api
slug: api_charts_seriesclickevent
---

# SeriesClickEvent
Arguments for the `seriesClick` event.


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


#### category


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data point category.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItem


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The original data item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### nativeEvent


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The original user event that triggered the drag action.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### percentage


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The point value represented as a percentage value. Available only for the Donut, Pie, and 100% stacked charts.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### point


</td>
<td type class="table-cell-type">


<code>


[SeriesPointType]({% slug api_charts_seriespointtype %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The clicked series point.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### series


</td>
<td type class="table-cell-type">


<code>


[EventSeriesOptions]({% slug api_charts_eventseriesoptions %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The clicked point series options.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### stackValue


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The cumulative point value on the stack. Available only for the stackable series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### target


</td>
<td type class="table-cell-type">


<code>


[Charts]({% slug api_charts_charts %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `Chart` component that triggered the event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data point value.


</td>
</tr>
</tbody>
</table>



