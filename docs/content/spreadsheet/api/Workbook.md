---
title: Workbook
description: "Learn how to build custom functionality when working with the React Spreadsheet by Kendo UI with the help of the Workbook."
api_reference: true
type: inner_api
slug: api_spreadsheet_workbook
---

# Workbook
The props of the Workbook component.


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


#### undoRedoStack


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A collection holding the commands available for undo and redo.


</td>
</tr>
</tbody>
</table>



## Constructors

### Workbook
<code>


(options: any, view: [View]({% slug api_spreadsheet_view %}))


</code>


#### Parameters
##### options
<code>


any


</code>


##### view
<code>


[View]({% slug api_spreadsheet_view %})


</code>




## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### execute


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Executes a command with the passed options.


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


options


</td>
<td type>


<code>


any


</code>


</td>
<td>


The object from where data will be loaded. This has to be the deserialized object, not the JSON string.


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


#### refresh


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Re-renders all data in the Workbook.


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



