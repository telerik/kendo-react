---
title: ExcelExport
description: "Learn how to build custom functionality when working with the React Excel Export by Kendo UI with the help of the ExcelExport."
api_reference: true
type: inner_api
slug: api_excel-export_excelexport
---

# ExcelExport
Represents the  KendoReact ExcelExport component.





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


#### props


</td>
<td type class="table-cell-type">


<code>


Readonly&lt;[ExcelExportProps]({% slug api_excel-export_excelexportprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the ExcelExport component.


</td>
</tr>
</tbody>
</table>



## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### save


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Saves the data to Excel.


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


exportData?


</td>
<td type>


<code>


any[] | [ExcelExportData]({% slug api_excel-export_excelexportdata %}) | WorkbookOptions


</code>


</td>
<td>


An optional parameter. Can be the data that will be exported or the [`WorkbookOptions`](https://www.telerik.com/kendo-react-ui/components/excel/api/kendoooxml#toc-workbookoptions).


</td>
</tr>
<tr>
<td>


columns?


</td>
<td type>


<code>


[ExcelExportColumnProps]({% slug api_excel-export_excelexportcolumnprops %})[] | ReactElement&lt;[ExcelExportColumnProps]({% slug api_excel-export_excelexportcolumnprops %})&gt;[]


</code>


</td>
<td>


An optional parameter. If present, it will be used instead of the columns prop or the child column components.


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


#### toDataURL


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns a promise which will be resolved with the file data URI.





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


exportData?


</td>
<td type>


<code>


any[] | [ExcelExportData]({% slug api_excel-export_excelexportdata %}) | WorkbookOptions


</code>


</td>
<td>


The optional data or the [`WorkbookOptions`](https://www.telerik.com/kendo-react-ui/components/excel/api/kendoooxml#toc-workbookoptions) that will be used to generate the data URI.


</td>
</tr>
<tr>
<td>


columns?


</td>
<td type>


<code>


any[]


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


Promise&lt;string&gt;


</code>


</td>
<td>


- The promise that will be resolved by the file data URI.


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


#### workbookOptions


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Based on the specified columns and data, returns [`WorkbookOptions`](https://www.telerik.com/kendo-react-ui/components/excel/api/kendoooxml#toc-workbookoptions).





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


exportData?


</td>
<td type>


<code>


any[] | [ExcelExportData]({% slug api_excel-export_excelexportdata %})


</code>


</td>
<td>


The optional data that will be exported.


</td>
</tr>
<tr>
<td>


externalColumns?


</td>
<td type>


<code>


[ExcelExportColumnProps]({% slug api_excel-export_excelexportcolumnprops %})[] | ReactElement&lt;[ExcelExportColumnProps]({% slug api_excel-export_excelexportcolumnprops %})&gt;[]


</code>


</td>
<td>


The optional columns that will be used.


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


WorkbookOptions


</code>


</td>
<td>


- The workbook options.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>



