---
title: SankeyData
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the SankeyData."
api_reference: true
type: inner_api
slug: api_charts_sankeydata
---

# SankeyData
Represents the Sankey data object.


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


#### links


</td>
<td type class="table-cell-type">


<code>


[SankeyLink]({% slug api_charts_sankeylink %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The links of the Sankey. The links are the connections between the nodes.
Each link has a `sourceId` and `targetId` that correspond to the id of the source and target nodes, and a `value` that represents the value of the link.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### nodes


</td>
<td type class="table-cell-type">


<code>


[SankeyNode]({% slug api_charts_sankeynode %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The nodes of the Sankey. The nodes are the elements that are connected by the links.
Each node has an `id` that is used to connect the nodes with the links.


</td>
</tr>
</tbody>
</table>



