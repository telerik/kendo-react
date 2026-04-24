---
title: PivotGridAxesChangeEvent
description: "Learn how to build custom functionality when working with the React PivotGrid by Kendo UI with the help of the PivotGridAxesChangeEvent."
api_reference: true
type: inner_api
slug: api_pivotgrid_pivotgridaxeschangeevent
---

# PivotGridAxesChangeEvent
Represents the event arguments of the [`onColumnAxesChange`](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridprops#toc-oncolumnaxeschange) and [`onRowAxesChange`](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridprops#toc-onrowaxeschange) callbacks of the [`PivotGrid`](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgrid) component.


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


#### syntheticEvent


</td>
<td type class="table-cell-type">


<code>


SyntheticEvent&lt;Element&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The DOM event that triggered the change.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### target


</td>
<td type class="table-cell-type">


<code>


"null" | [PivotGridHandle]({% slug api_pivotgrid_pivotgridhandle %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The handle of the PivotGrid component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


[PivotGridAxis]({% slug api_pivotgrid_pivotgridaxis %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The new axes configuration value.


</td>
</tr>
</tbody>
</table>



