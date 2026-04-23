---
title: View
description: "Learn how to build custom functionality when working with the React Spreadsheet by Kendo UI with the help of the View."
api_reference: true
type: inner_api
slug: api_spreadsheet_view
---

# View
The View object.



## Constructors

### View
<code>


(element: HTMLElement, options: any)


</code>


#### Parameters
##### element
<code>


HTMLElement


</code>


##### options
<code>


any


</code>




## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### enableClipboard


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


A function which enables and disables the clipboard.


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


enable


</td>
<td type>


<code>


boolean


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


#### refresh


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Re-renders all data in the View.


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


reason


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


Returns the workbook object of the View.


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


workbook?


</td>
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


void | [Workbook]({% slug api_spreadsheet_workbook %})


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



