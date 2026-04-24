---
title: Dimension
description: "Learn how to build custom functionality when working with the React PivotGrid by Kendo UI with the help of the Dimension."
api_reference: true
type: inner_api
slug: api_pivotgrid_dimension
---

# Dimension
Represents the PivotGrid dimension object. Applicable for local data binding.


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


#### caption


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The caption of the dimension.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### displayValue


</td>
<td type class="table-cell-type">


<code>


(item: any) => string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function returning the value which will be rendered in the PivotGrid from the passed data item.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### sortValue


</td>
<td type class="table-cell-type">


<code>


(displayValue: string) => any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function returning the value which will be used for sorting.





</td>
</tr>
</tbody>
</table>



