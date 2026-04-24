---
title: PivotGridHandle
description: "Learn how to build custom functionality when working with the React PivotGrid by Kendo UI with the help of the PivotGridHandle."
api_reference: true
type: inner_api
slug: api_pivotgrid_pivotgridhandle
---

# PivotGridHandle
Represents the object which is passed to the [`ref`](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) callback of the PivotGrid component.


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


#### columnHeaderBreadth


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The height of the column header area in pixels.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnHeaderRows


</td>
<td type class="table-cell-type">


<code>


[AxisRow]({% slug api_pivotgrid_axisrow %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The rows that make up the column headers.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataCells


</td>
<td type class="table-cell-type">


<code>


{ cells: [PivotDataItem]({% slug api_pivotgrid_pivotdataitem %})[]; row: string[]; }[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data cells organized by row and column.


</td>
</tr>
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


The DOM element of the PivotGrid component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### props


</td>
<td type class="table-cell-type">


<code>


[PivotGridProps]({% slug api_pivotgrid_pivotgridprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current properties of the PivotGrid component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowHeaderBreadth


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The width of the row header area in pixels.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowHeaderRows


</td>
<td type class="table-cell-type">


<code>


[AxisRow]({% slug api_pivotgrid_axisrow %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The rows that make up the row headers.


</td>
</tr>
</tbody>
</table>



