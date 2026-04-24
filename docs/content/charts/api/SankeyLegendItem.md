---
title: SankeyLegendItem
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the SankeyLegendItem."
api_reference: true
type: inner_api
slug: api_charts_sankeylegenditem
---

# SankeyLegendItem
Represents the legend item options of the Sankey component.


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


#### areaBackground?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The background color of the legend item square element. Accepts a valid CSS color string, including HEX and RGB.
Defaults to the corresponding node color.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### areaOpacity?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The opacity of the legend item square element.
Defaults to the corresponding node opacity.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### cursor?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The [cursor style](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor) of the legend item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### visual?


</td>
<td type class="table-cell-type">


<code>


(args: { createVisual: () => Group; options: any; }) => Group


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function that can be used to create a custom visual for the legend items. The available argument fields are:

* `options`&mdash;The options of the legend item.
* `createVisual`&mdash;A function for getting the default visual.


</td>
</tr>
</tbody>
</table>



