---
title: TreeListBooleanFilterProps
description: "Learn how to build custom functionality when working with the React TreeList by Kendo UI with the help of the TreeListBooleanFilterProps."
api_reference: true
type: inner_api
slug: api_treelist_treelistbooleanfilterprops
---

# TreeListBooleanFilterProps



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


#### ariaLabel?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the accessible label of the filter input.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### field?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The column field in which the cell is located.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filter?


</td>
<td type class="table-cell-type">


<code>


FilterDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The collection of `FilterDescriptor` objects that is passed by the TreeList component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### min?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


@ hidden


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFilterChange?


</td>
<td type class="table-cell-type">


<code>


(event: { field: string; filter: FilterDescriptor[]; syntheticEvent: SyntheticEvent&lt;any&gt;; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The function that will be called if the cell needs to notify its parent TreeList about a change.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### operators?


</td>
<td type class="table-cell-type">


<code>


[TreeListFilterOperator]({% slug api_treelist_treelistfilteroperator %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The list of the operators.


</td>
</tr>
</tbody>
</table>



