---
title: GridPDFExport
description: "Learn how to build custom functionality when working with the React PDF by Kendo UI with the help of the GridPDFExport."
api_reference: true
type: inner_api
slug: api_pdf_gridpdfexport
---

# GridPDFExport
A React component which facilitates the PDF export of the Grid.


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


Readonly&lt;[GridPDFExportProps]({% slug api_pdf_gridpdfexportprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the GridPDFExport component.


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


Saves the content of the Grid as a PDF file.


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


data?


</td>
<td type>


<code>


any[]


</code>


</td>
<td>


The data can be different from the currently displayed data in the Grid. Can be used to export all Grid pages.


</td>
</tr>
<tr>
<td>


callback?


</td>
<td type>


<code>


() => void


</code>


</td>
<td>


The callback that will be executed after the PDF is saved.


</td>
</tr>
</tbody>
</table>
</td>
</tr>

</tbody>
</table>



