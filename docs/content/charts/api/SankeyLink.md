---
title: SankeyLink
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the SankeyLink."
api_reference: true
type: inner_api
slug: api_charts_sankeylink
---

# SankeyLink
Represents the links options of the Sankey component.


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


#### color?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The color of the link.
The color is used when the `colorType` option is set to `static`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### colorType?


</td>
<td type class="table-cell-type">


<code>


"source" | "static" | "target"


</code>


</td>
<td class="table-cell-default">


<code>


'static'


</code>


</td>
<td class="table-cell-comment">


The color type of the link.
The supported values are:
* `static`&mdash;The link color is static. The color is determined by the link's `color` option.
* `source`&mdash;The link color is the same as the source node color.
* `target`&mdash;The link color is the same as the target node color.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### highlight?


</td>
<td type class="table-cell-type">


<code>


[SankeyLinkHighlight]({% slug api_charts_sankeylinkhighlight %})


</code>


</td>
<td class="table-cell-default">


<code>


`{ opacity: 0.8, inactiveOpacity: 0.2 }`


</code>


</td>
<td class="table-cell-comment">


The highlight options of the link.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### opacity?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


0.4


</code>


</td>
<td class="table-cell-comment">


The opacity of the link.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### sourceId


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The source node ID of the link.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### targetId


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The target node ID of the link.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The value of the link.


</td>
</tr>
</tbody>
</table>



