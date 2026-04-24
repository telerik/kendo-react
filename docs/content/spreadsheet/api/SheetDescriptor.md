---
title: SheetDescriptor
description: "Learn how to build custom functionality when working with the React Spreadsheet by Kendo UI with the help of the SheetDescriptor."
api_reference: true
type: inner_api
slug: api_spreadsheet_sheetdescriptor
---

# SheetDescriptor
Represents the interface of a Spreadsheet document sheet and its content.


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


#### activeCell?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The active cell in the sheet, for example, `A1`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columns?


</td>
<td type class="table-cell-type">


<code>


[SheetColumn]({% slug api_spreadsheet_sheetcolumn %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An array which defines the columns in this sheet and their content.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultCellStyle?


</td>
<td type class="table-cell-type">


<code>


[CellDefaultStyle]({% slug api_spreadsheet_celldefaultstyle %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default cell styles that will be applied to the sheet cells.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### drawings?


</td>
<td type class="table-cell-type">


<code>


{ height: number; image: string; offsetX: number; offsetY: number; opacity: any; topLeftCell: any; width: number; }[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An array which contains the drawings used in this sheet.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### frozenColumns?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The number of frozen columns in this sheet.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### frozenRows?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The number of frozen rows in this sheet.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### hyperlinks?


</td>
<td type class="table-cell-type">


<code>


{ ref: string; target: string; }[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An array which contains the hyperlinks of the cells.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### mergedCells?


</td>
<td type class="table-cell-type">


<code>


string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An array of merged cell ranges, for example, `B1:D2`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### name?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The name of the sheet.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rows?


</td>
<td type class="table-cell-type">


<code>


[SheetRow]({% slug api_spreadsheet_sheetrow %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The row data for this sheet.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selection?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The selected range in the sheet, for example, `A1:B10`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### showGridLines?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


A Boolean value which indicates if the grid lines of the sheet will be displayed.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### state?


</td>
<td type class="table-cell-type">


<code>


"hidden" | "visible" | "veryHidden"


</code>


</td>
<td class="table-cell-default">


<code>


'visible'


</code>


</td>
<td class="table-cell-comment">


The state of the sheet.





</td>
</tr>
</tbody>
</table>



