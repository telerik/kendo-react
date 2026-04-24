---
title: ExcelExportSettings
description: "Learn how to build custom functionality when working with the React Spreadsheet by Kendo UI with the help of the ExcelExportSettings."
api_reference: true
type: inner_api
slug: api_spreadsheet_excelexportsettings
---

# ExcelExportSettings
Configures the Excel export settings of the Spreadsheet.


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


#### fileName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


'Workbook.xslx'


</code>


</td>
<td class="table-cell-comment">


Specifies the file name of the exported Excel file.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### forceProxy?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


If set to `true`, the content will be forwarded to proxyURL even if the browser supports the saving of files locally.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### proxyURL?


</td>
<td type class="table-cell-type">


<code>


"null" | string


</code>


</td>
<td class="table-cell-default">


<code>


null


</code>


</td>
<td class="table-cell-comment">


The URL of the server side proxy which will stream the file to the end user. A proxy will be used when the browser is not capable of saving files locally. Such browsers are IE version 9 and lower and Safari. The developer is responsible for implementing the server-side proxy. The proxy will return the decoded file with the `Content-Disposition` header set to `attachment; filename="<fileName.xslx>"`.
The proxy will receive a POST request with the following parameters in the request body:
- contentType - The MIME type of the file.
- base64 - The base-64 encoded file content.
- fileName - The file name as requested by the caller.





</td>
</tr>
</tbody>
</table>



