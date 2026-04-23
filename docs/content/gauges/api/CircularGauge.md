---
title: CircularGauge
description: "Learn how to build custom functionality when working with the React Gauges by Kendo UI with the help of the CircularGauge."
api_reference: true
type: inner_api
slug: api_gauges_circulargauge
---

# CircularGauge



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


The DOM element of the Gauge.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### props


</td>
<td type class="table-cell-type">


<code>


Readonly&lt;[ArcGaugeProps]({% slug api_gauges_arcgaugeprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the CircularGauge component.


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


The Drawing `Surface` of the Gauge.


</td>
</tr>
</tbody>
</table>



## Methods

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


Exports a Gauge component as a Drawing `Scene`.





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


Promise&lt;Group&gt;


</code>


</td>
<td>


- A promise that returns the root `Group` of the scene.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>



