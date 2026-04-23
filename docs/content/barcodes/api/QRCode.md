---
title: QRCode
description: "Learn how to build custom functionality when working with the React Barcodes by Kendo UI with the help of the QRCode."
api_reference: true
type: inner_api
slug: api_barcodes_qrcode
---

# QRCode
Represents the KendoReact QRCode component.


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


#### element


</td>
<td type class="table-cell-type">


<code>


"null" | HTMLDivElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Gets the DOM element of the Barcode.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### props


</td>
<td type class="table-cell-type">


<code>


Readonly&lt;[QRCodeProps]({% slug api_barcodes_qrcodeprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the QRCode component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### surface


</td>
<td type class="table-cell-type">


<code>


"null" | Surface


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Gets the Drawing `Surface` of the Barcode.


</td>
</tr>
</tbody>
</table>



## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### exportImage


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Exports the component as an image. The export operation runs asynchronously and returns a promise.





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


ImageExportOptions


</code>


</td>
<td>


The parameters for the exported image.


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


- A promise that resolves with a PNG image encoded as a Data URI.


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


#### exportSVG


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Exports the component as an SVG document. The export operation runs asynchronously and returns a promise.





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


SVGExportOptions


</code>


</td>
<td>


The parameters for the exported file.


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


A promise that resolves with an SVG document that is encoded as a Data URI.


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


#### exportVisual


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Exports a Barcode component as a Drawing `Scene`.





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


options?


</td>
<td type>


<code>


any


</code>


</td>
<td>


The parameters for the export operation.


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


Group


</code>


</td>
<td>


A promise that returns the root `Group` of the scene.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>



