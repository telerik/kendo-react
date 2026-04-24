---
title: AxisLabelClickEvent
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the AxisLabelClickEvent."
api_reference: true
type: inner_api
slug: api_charts_axislabelclickevent
---

# AxisLabelClickEvent
Arguments for the `axisLabelClick` event.


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


#### axis


</td>
<td type class="table-cell-type">


<code>


[EventAxisOptions]({% slug api_charts_eventaxisoptions %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The axis options to which the label belongs.


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


The original data item that is used to generate the label. Available only for category axes which are populated from the `categoryField` of the series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### index


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The label sequential or category index.


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


The label text.


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


The label value or category name.


</td>
</tr>
</tbody>
</table>



