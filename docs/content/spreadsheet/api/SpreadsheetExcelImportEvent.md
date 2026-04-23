---
title: SpreadsheetExcelImportEvent
description: "Learn how to build custom functionality when working with the React Spreadsheet by Kendo UI with the help of the SpreadsheetExcelImportEvent."
api_reference: true
type: inner_api
slug: api_spreadsheet_spreadsheetexcelimportevent
---

# SpreadsheetExcelImportEvent
Represents the `SpreadsheetExcelImportEvent` object.


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


#### file


</td>
<td type class="table-cell-type">


<code>


Blob | File


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The file that is being imported.


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


If invoked, the Spreadsheet will not import the file.


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
</tbody>
</table>



