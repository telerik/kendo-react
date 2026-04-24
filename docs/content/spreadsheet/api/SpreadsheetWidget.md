---
title: SpreadsheetWidget
description: "Learn how to build custom functionality when working with the React Spreadsheet by Kendo UI with the help of the SpreadsheetWidget."
api_reference: true
type: inner_api
slug: api_spreadsheet_spreadsheetwidget
---

# SpreadsheetWidget
Represents the SpreadsheetWidget, holding the core functionality of the Spreadsheet.


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


#### view


</td>
<td type class="table-cell-type">


<code>


[View]({% slug api_spreadsheet_view %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Returns the `View` object of the Spreadsheet.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### workbook


</td>
<td type class="table-cell-type">


<code>


[Workbook]({% slug api_spreadsheet_workbook %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Returns the `Workbook` object of the Spreadsheet.


</td>
</tr>
</tbody>
</table>



## Constructors

### SpreadsheetWidget
<code>


(element: HTMLElement, options: [SpreadsheetOptions]({% slug api_spreadsheet_spreadsheetoptions %}))


</code>


#### Parameters
##### element
<code>


HTMLElement


</code>


##### options
<code>


[SpreadsheetOptions]({% slug api_spreadsheet_spreadsheetoptions %})


</code>




## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### activeSheet


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Gets or sets the active sheet.


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


sheet?


</td>
<td type>


<code>


[Sheet]({% slug api_spreadsheet_sheet %})


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


void | [Sheet]({% slug api_spreadsheet_sheet %})


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


#### executeCommand


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Executes the passed command against the selected cell/range.


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


An object containing the command name and the required by it options.


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


#### fromFile


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Clears the Spreadsheet and populates it with data from the specified Excel (.xlsx) file.





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


file


</td>
<td type>


<code>


Blob | File


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


Promise&lt;void&gt;


</code>


</td>
<td>


A promise that will be resolved when the file is loaded and the data is populated.


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


#### fromJSON


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Loads the workbook data from an object with the format that is defined in the configuration.

Note: All existing sheets and their data will be lost.


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


json


</td>
<td type>


<code>


[DocumentDescriptor]({% slug api_spreadsheet_documentdescriptor %})


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


Re-renders all data in the Spreadsheet.


</td>
</tr>

</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### saveAsExcel


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Initiates the Excel export. Also fires the excelExport event.

Note: Calling this method may trigger the built-in popup blocker of the browser.
To avoid that, always call it as a response to an end-user action, for example, a button click.


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


Promise&lt;string | Blob&gt;


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


#### saveJSON


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Serializes the workbook. This method does not return the JSON, but a Promise object which will yield the JSON data when it is available.
The method is functionally similar to `toJSON`, but it is also able to save the embedded images (this is the reason why it must be asynchronous).


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


Promise&lt;[DocumentDescriptor]({% slug api_spreadsheet_documentdescriptor %})&gt;


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


#### sheets


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns an array with the sheets in the workbook.


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


[Sheet]({% slug api_spreadsheet_sheet %})[]


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


#### toJSON


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Serializes the workbook.


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


[DocumentDescriptor]({% slug api_spreadsheet_documentdescriptor %})


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



