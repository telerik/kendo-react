---
title: UnionRef
description: "Learn how to build custom functionality when working with the React Spreadsheet by Kendo UI with the help of the UnionRef."
api_reference: true
type: inner_api
slug: api_spreadsheet_unionref
---

# UnionRef
A union. It contains a refs property, which is an array of references (it can be empty).
A UnionRef can be created by the union operator, which is the comma.


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


#### refs


</td>
<td type class="table-cell-type">


<code>


[RangeRef]({% slug api_spreadsheet_rangeref %}) | [CellRef]({% slug api_spreadsheet_cellref %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">





</td>
</tr>
<tr>
<td class="table-cell-name">


#### sheet


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The name of the sheet that this cell points to.


</td>
</tr>
</tbody>
</table>



## Constructors

### UnionRef
<code>


()


</code>




