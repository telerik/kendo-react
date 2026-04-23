---
title: SeriesHoverEvent
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the SeriesHoverEvent."
api_reference: true
type: inner_api
slug: api_charts_serieshoverevent
---

# SeriesHoverEvent
Arguments for the `seriesHover` event.


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


#### categoryPoints


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A list of all points that are in the same category. Each item has the same fields&mdash;`value`, `series`, `dataItem`, and other.


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


The hovered series point.


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


The hovered point series options.


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



## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### isDefaultPrevented


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns `true` if the event was prevented by any of its subscribers.





</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


boolean


</code>


</td>
<td>


`true` if the default action was prevented.
Otherwise, returns `false`.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### preventDefault


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Prevents the default action for a specified event. In this way, the source component suppresses the built-in behavior that follows the event.


</td>
</tr>

</tbody>
</table>



