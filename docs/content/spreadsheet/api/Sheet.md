---
title: Sheet
description: "Learn how to build custom functionality when working with the React Spreadsheet by Kendo UI with the help of the Sheet."
api_reference: true
type: inner_api
slug: api_spreadsheet_sheet
---

# Sheet
The Sheet object.



## Constructors

### Sheet
<code>


()


</code>




## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### activeCell


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the active cell in the sheet, for example, A1.


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


#### name


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the name of the sheet.


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


string


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


#### range


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns a Range object based on the passed cells.


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


cell


</td>
<td type>


<code>


string


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


[Range]({% slug api_spreadsheet_range %})


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


#### resize


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Changes the size of the rows and columns of the current sheet.


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


newRows


</td>
<td type>


<code>


number


</code>


</td>
<td>


The rows of the sheet after the resizing.


</td>
</tr>
<tr>
<td>


newCols


</td>
<td type>


<code>


number


</code>


</td>
<td>


The columns of the sheet after the resizing.


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


#### showGridLines


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


A Boolean value which indicates if the grid lines of the sheet will be displayed.





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


value?


</td>
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



