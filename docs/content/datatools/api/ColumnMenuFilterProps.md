---
title: ColumnMenuFilterProps
description: "Learn how to build custom functionality when working with the React Data Tools by Kendo UI with the help of the ColumnMenuFilterProps."
api_reference: true
type: inner_api
slug: api_data-tools_columnmenufilterprops
---

# ColumnMenuFilterProps



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


#### filter


</td>
<td type class="table-cell-type">


<code>


FilterDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current filter descriptor for the column


</td>
</tr>
<tr>
<td class="table-cell-name">


#### initialFilter?


</td>
<td type class="table-cell-type">


<code>


FilterDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Initial filter descriptor when creating a new filter


</td>
</tr>
<tr>
<td class="table-cell-name">


#### input?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;{ onChange: any; value: any; }&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom input component for filter value entry


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFilterChange


</td>
<td type class="table-cell-type">


<code>


(event: SyntheticEvent&lt;any&gt;, nextFilter: FilterDescriptor, prevFilter: FilterDescriptor) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Event handler for filter changes


</td>
</tr>
<tr>
<td class="table-cell-name">


#### operators?


</td>
<td type class="table-cell-type">


<code>


{ operator: string; text: string; }[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Available filter operators for the column


</td>
</tr>
</tbody>
</table>



