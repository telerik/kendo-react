---
title: QRCodeHandle
description: "Learn how to build custom functionality when working with the React Barcodes by Kendo UI with the help of the QRCodeHandle."
api_reference: true
type: inner_api
slug: api_barcodes_qrcodehandle
---

# QRCodeHandle
Represents the `ref` of the QRCode component.


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


The current root DOM element or `null`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### exportImage


</td>
<td type class="table-cell-type">


<code>


(options?: ImageExportOptions) => Promise&lt;string&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Exports the component as an image. The export operation runs asynchronously and returns a promise.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### exportSVG


</td>
<td type class="table-cell-type">


<code>


(options?: SVGExportOptions) => Promise&lt;string&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Exports the component as an SVG document. The export operation runs asynchronously and returns a promise.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### exportVisual


</td>
<td type class="table-cell-type">


<code>


(options?: any) => Group


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Exports a QRCode component as a Drawing `Scene`.





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


Gets the Drawing `Surface` of the QRCode.


</td>
</tr>
</tbody>
</table>



