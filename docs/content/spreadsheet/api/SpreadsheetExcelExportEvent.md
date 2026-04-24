---
title: SpreadsheetExcelExportEvent
description: "Learn how to build custom functionality when working with the React Spreadsheet by Kendo UI with the help of the SpreadsheetExcelExportEvent."
api_reference: true
type: inner_api
slug: api_spreadsheet_spreadsheetexcelexportevent
---

# SpreadsheetExcelExportEvent
Represents the `SpreadsheetExcelExportEvent` object.


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


#### data


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The array of data items that is used to create the Excel workbook.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### preventDefault


</td>
<td type class="table-cell-type">


<code>


Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If invoked, the Spreadsheet will not save the generated file.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sender


</td>
<td type class="table-cell-type">


<code>


[SpreadsheetWidget]({% slug api_spreadsheet_spreadsheetwidget %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The widget instance which fired the event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### workbook


</td>
<td type class="table-cell-type">


<code>


Workbook


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Excel workbook configuration object.
Modifications of the workbook will reflect in the output Excel document.


</td>
</tr>
</tbody>
</table>



