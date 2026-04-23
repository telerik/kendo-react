---
title: BooleanFilterProps
description: "Learn how to build custom functionality when working with the React Data Tools by Kendo UI with the help of the BooleanFilterProps."
api_reference: true
type: inner_api
slug: api_data-tools_booleanfilterprops
---

# BooleanFilterProps
The props of the BooleanFilter component.


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


#### data?


</td>
<td type class="table-cell-type">


<code>


{ text: string; value: any; }[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A collection of text-value pairs passed to the BooleanFilter DropDownList.
Defaults to [ { text: 'True', value: true }, { text: 'False', value: false } ]


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultItem?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The defaultItem passed to the BooleanFilter DropDownList.


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



