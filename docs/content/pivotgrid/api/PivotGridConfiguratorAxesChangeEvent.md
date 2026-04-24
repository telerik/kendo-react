---
title: PivotGridConfiguratorAxesChangeEvent
description: "Learn how to build custom functionality when working with the React PivotGrid by Kendo UI with the help of the PivotGridConfiguratorAxesChangeEvent."
api_reference: true
type: inner_api
slug: api_pivotgrid_pivotgridconfiguratoraxeschangeevent
---

# PivotGridConfiguratorAxesChangeEvent
Represents the event arguments of the [`onColumnAxesChange`](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridconfiguratorprops#toc-oncolumnaxeschange), [`onRowAxesChange`](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridconfiguratorprops#toc-onrowaxeschange) and [`onMeasureAxesChange`](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridconfiguratorprops#toc-onmeasureaxeschange) callbacks of the [`PivotGridConfigurator`](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridconfigurator) component.


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


"null" | [PivotGridConfiguratorHandle]({% slug api_pivotgrid_pivotgridconfiguratorhandle %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The handle of the PivotGridConfigurator component.


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



