---
title: SpreadsheetOptions
description: "Learn how to build custom functionality when working with the React Spreadsheet by Kendo UI with the help of the SpreadsheetOptions."
api_reference: true
type: inner_api
slug: api_spreadsheet_spreadsheetoptions
---

# SpreadsheetOptions
Represents the options that will be applied the Spreadsheet.


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


#### activeSheet?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The name of the currently active sheet. Must exactly match one of the sheet names.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columns?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


50


</code>


</td>
<td class="table-cell-comment">


The number of columns in the document.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnWidth?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


64


</code>


</td>
<td class="table-cell-comment">


The default column width in pixels.





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


#### excel?


</td>
<td type class="table-cell-type">


<code>


[ExcelExportSettings]({% slug api_spreadsheet_excelexportsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the Excel export settings of the Spreadsheet.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### headerHeight?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


20


</code>


</td>
<td class="table-cell-comment">


The height of the header row in pixels.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### headerWidth?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


32


</code>


</td>
<td class="table-cell-comment">


The width of the header column in pixels.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### images?


</td>
<td type class="table-cell-type">


<code>


{[name: string]: string}


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An object containing any images used in the Spreadsheet. The keys should be image ID-s
(they are referenced by this ID in `sheets.drawings`) and the values should be image URLs.
The image URLs can be either [data URLs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs), in which case the images are fully contained by the JSON,
or can be external URLs.
Note that when external URLs are used, they should reside on the same domain, or the server must
be configured with the proper [CORS headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS),
for the Spreadsheet to be able to fetch binary image data using a XMLHttpRequest. If it cannot fetch
the image, export to Excel or PDF might not work.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### locale?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the component locale.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### messages?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the component messages.


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


#### names?


</td>
<td type class="table-cell-type">


<code>


{ localName: string; name: string; sheet: string; value: string; }[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An array which holds the names of the sheets.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowHeight?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


20


</code>


</td>
<td class="table-cell-comment">


The default row height in pixels.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### rows?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


200


</code>


</td>
<td class="table-cell-comment">


The number of rows in the document.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### sheets?


</td>
<td type class="table-cell-type">


<code>


[SheetDescriptor]({% slug api_spreadsheet_sheetdescriptor %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An array which defines the document sheets and their content.


</td>
</tr>
</tbody>
</table>



