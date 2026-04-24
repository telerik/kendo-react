---
title: SankeyNodeDataItem
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the SankeyNodeDataItem."
api_reference: true
type: inner_api
slug: api_charts_sankeynodedataitem
---

# SankeyNodeDataItem
Represents the Sankey dataItem of the node element.


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


#### align?


</td>
<td type class="table-cell-type">


<code>


"left" | "stretch" | "right"


</code>


</td>
<td class="table-cell-default">


<code>


'stretch'


</code>


</td>
<td class="table-cell-comment">


The alignment of the node.





</td>
</tr>
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


The color of the node.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### id


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The ID of the node.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### label


</td>
<td type class="table-cell-type">


<code>


[SankeyLabel]({% slug api_charts_sankeylabel %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The label options of the node.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### offset?


</td>
<td type class="table-cell-type">


<code>


SankeyOffset


</code>


</td>
<td class="table-cell-default">


<code>


`{ top: 0, left: 0 }`


</code>


</td>
<td class="table-cell-comment">


The offset applied to the node's position.





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


1


</code>


</td>
<td class="table-cell-comment">


The opacity of the node.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### padding?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


16


</code>


</td>
<td class="table-cell-comment">


The minimum vertical space between two nodes.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### sourceLinks


</td>
<td type class="table-cell-type">


<code>


[SankeyLink]({% slug api_charts_sankeylink %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The source links that are connected to the node.
Contains the `sourceId`, `targetId` and `value` of the links.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### targetLinks


</td>
<td type class="table-cell-type">


<code>


[SankeyLink]({% slug api_charts_sankeylink %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The target links that are connected to the node.
Contains the `sourceId`, `targetId` and `value` of the links.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### width?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


24


</code>


</td>
<td class="table-cell-comment">


The width of the node.





</td>
</tr>
</tbody>
</table>



