---
title: LegendItemHoverEvent
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the LegendItemHoverEvent."
api_reference: true
type: inner_api
slug: api_charts_legenditemhoverevent
---

# LegendItemHoverEvent
Arguments for the `legendItemHover` event.


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


#### pointIndex


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The point index in the series. Applicable only to the Pie, Donut, Funnel and Pyramid series.


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


An object which contains the series options.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### seriesIndex


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The index of the series in the parent Chart.


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


#### text


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The text of the legend item.


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


If called, the series highlight is not shown as a result of hovering over the legend item.


</td>
</tr>

</tbody>
</table>



