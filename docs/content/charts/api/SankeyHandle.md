---
title: SankeyHandle
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the SankeyHandle."
api_reference: true
type: inner_api
slug: api_charts_sankeyhandle
---

# SankeyHandle
Represents the object which is passed to the [`ref`](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom)
callback of the [Sankey](https://www.telerik.com/kendo-react-ui/components/charts/api/sankey) component.


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


The root DOM element of the Sankey component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### props


</td>
<td type class="table-cell-type">


<code>


[SankeyProps]({% slug api_charts_sankeyprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the Sankey component.


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


Exports the visual of the Sankey component to a drawing group.


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


[SankeyExportVisualOptions]({% slug api_charts_sankeyexportvisualoptions %})


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


Group


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>



