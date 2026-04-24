---
title: Context
description: "Learn how to build custom functionality when working with the React Spreadsheet by Kendo UI with the help of the Context."
api_reference: true
type: inner_api
slug: api_spreadsheet_context
---

# Context
The context object of the custom JavaScript functions (primitives) in formulas.



## Constructors

### Context
<code>


()


</code>




## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### asMatrix


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Converts the given argument to a matrix, if possible.
It accepts a `RangeRef` object or a plain JavaScript non-empty array.
Additionally, if a `Matrix` object is provided, it is returned as is.


</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


arg


</td>
<td type>


<code>


[Matrix]({% slug api_spreadsheet_matrix %}) | [RangeRef]({% slug api_spreadsheet_rangeref %}) | [RangeRef]({% slug api_spreadsheet_rangeref %})[]


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


[Matrix]({% slug api_spreadsheet_matrix %})


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### cellValues


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns as a flat array the values in any reference that exist in the given array. Elements that are not references are copied over.


</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


array


</td>
<td type>


<code>


[Ref]({% slug api_spreadsheet_ref %}) | [Matrix]({% slug api_spreadsheet_matrix %}) | [Ref]({% slug api_spreadsheet_ref %}) | [Matrix]({% slug api_spreadsheet_matrix %})[]


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


any


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### getRefData


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the data that is the value in the given reference.
If a `CellRef` is given, it returns a single value. For a `RangeRef` or `UnionRef`, it returns a flat array of values.


</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


ref


</td>
<td type>


<code>


[RangeRef]({% slug api_spreadsheet_rangeref %}) | [CellRef]({% slug api_spreadsheet_cellref %}) | [UnionRef]({% slug api_spreadsheet_unionref %})


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


any


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### resolveCells


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Verifies that all references in the given array are resolved before invoking your callback—that is, executes any formula.
If this array turns out to include the cell where the current formula lives, it returns a `#CIRCULAR!` error. Elements that are not references are ignored.


</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


array


</td>
<td type>


<code>


[Ref]({% slug api_spreadsheet_ref %})[] | [Ref]({% slug api_spreadsheet_ref %})[][]


</code>


</td>
<td>





</td>
</tr>
<tr>
<td>


callback


</td>
<td type>


<code>


() => any


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


any


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### workbook


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the `Workbook` object where the current formula is evaluated.


</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


[Workbook]({% slug api_spreadsheet_workbook %})


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>



