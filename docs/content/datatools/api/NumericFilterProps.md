---
title: NumericFilterProps
description: "Learn how to build custom functionality when working with the React Data Tools by Kendo UI with the help of the NumericFilterProps."
api_reference: true
type: inner_api
slug: api_data-tools_numericfilterprops
---

# NumericFilterProps
The props of the NumericFilter component.


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


The accessible label of the component.





</td>
</tr>
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


The FilterDescriptor object which will be edited.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### max?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the greatest value that can be entered.


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


Specifies the smallest value that can be entered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFilterChange


</td>
<td type class="table-cell-type">


<code>


(event: { nextFilter: FilterDescriptor; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The FilterChange event, triggered while editing the FilterOperator.


</td>
</tr>
</tbody>
</table>



