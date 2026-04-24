---
title: ExcelExportProps
description: "Learn how to build custom functionality when working with the React Excel Export by Kendo UI with the help of the ExcelExportProps."
api_reference: true
type: inner_api
slug: api_excel-export_excelexportprops
---

# ExcelExportProps
Represents the props of the KendoReact ExcelExport component.


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


#### collapsible?


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


Enables or disables collapsible (grouped) rows in the exported file.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### columns?


</td>
<td type class="table-cell-type">


<code>


[ExcelExportColumnProps]({% slug api_excel-export_excelexportcolumnprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Pass the columns through the component props. If you provide both the `columns` prop and the child column components, the component uses the columns from props.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### creator?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The creator of the workbook.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### data?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The exported data. If grouped, structure the data as described by the [`GroupResult`](https://www.telerik.com/kendo-react-ui/components/datatools/api/groupresult) option of the KendoReact Data Query component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### date?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">


<code>


new Date()


</code>


</td>
<td class="table-cell-comment">


The date on which the workbook is created.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### dir?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `rtl`, the Excel file is rendered in the right-to-left mode.


</td>
</tr>
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


"Export.xlsx"


</code>


</td>
<td class="table-cell-comment">


Specifies the name of the file that is exported to Excel.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables or disables the column filtering in the Excel file.


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


If set to `true`, the content is forwarded to `proxyURL` even if the browser supports saving files locally.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### group?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The exported data groups. The groups must be compatible with the [`GroupDescriptor`](https://www.telerik.com/kendo-react-ui/components/datatools/api/groupdescriptor) option of the KendoReact Data Query component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### headerPaddingCellOptions?


</td>
<td type class="table-cell-type">


<code>


[CellOptions]({% slug api_excel-export_celloptions %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The options of the cells that are inserted before the header cells to align the headers and the column values (when the data is grouped).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### hierarchy?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the data is exported as a tree based on the `level` property of each data record.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExportComplete?


</td>
<td type class="table-cell-type">


<code>


(event: [ExcelExportExportEvent]({% slug api_excel-export_excelexportexportevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered after the export is complete.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### paddingCellOptions?


</td>
<td type class="table-cell-type">


<code>


[CellOptions]({% slug api_excel-export_celloptions %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The options of the cells that are inserted before the data, group, and footer cells to indicate the group hierarchy (when the data is grouped).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### proxyURL?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The URL of the server-side proxy which streams the file to the end user. When the browser cannot save files locally—for example, Internet Explorer 9 and earlier, and Safari—a proxy is used. You must implement the server-side proxy.

The proxy receives a `POST` request with the following parameters in the request body:
- `contentType`&mdash;The MIME type of the file.
- `base64`&mdash;The base-64 encoded file content.
- `fileName`&mdash;The file name, as requested by the caller. The proxy is expected to return the decoded file with the **Content-Disposition** header set to `attachment; filename="<fileName.xslx>"`.


</td>
</tr>
</tbody>
</table>



