---
title: SankeyLabelDefaults
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the SankeyLabelDefaults."
api_reference: true
type: inner_api
slug: api_charts_sankeylabeldefaults
---

# SankeyLabelDefaults
Represents the default label options of the Sankey component.
These settings will be applied to all labels unless overridden by individual data items.


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


"center" | "left" | "right"


</code>


</td>
<td class="table-cell-default">


<code>


'left'


</code>


</td>
<td class="table-cell-comment">


The alignment of the label.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### border?


</td>
<td type class="table-cell-type">


<code>


Border


</code>


</td>
<td class="table-cell-default">


<code>


`{ width: 0 }`


</code>


</td>
<td class="table-cell-comment">


The border of the label.





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


The color of the label.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### font?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The font of the label.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### margin?


</td>
<td type class="table-cell-type">


<code>


[SankeyHorizontalMargin]({% slug api_charts_sankeyhorizontalmargin %})


</code>


</td>
<td class="table-cell-default">


<code>


`{ left: 8, right: 8 }`


</code>


</td>
<td class="table-cell-comment">


The margin of the label.





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


The offset applied to the label's position.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### padding?


</td>
<td type class="table-cell-type">


<code>


number | Padding


</code>


</td>
<td class="table-cell-default">


<code>


0


</code>


</td>
<td class="table-cell-comment">


The padding of the label.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### position?


</td>
<td type class="table-cell-type">


<code>


"inside" | "after" | "before"


</code>


</td>
<td class="table-cell-default">


<code>


'inside'


</code>


</td>
<td class="table-cell-comment">


The position of the label.

The supported values are:
* `inside`&mdash;The label is positioned after the node, except for the nodes at the end of the Sankey, that are placed before the node.
* `before`&mdash;The label is positioned before the node.
* `after`&mdash;The label is positioned after the node.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### stroke?


</td>
<td type class="table-cell-type">


<code>


[SankeyLabelStroke]({% slug api_charts_sankeylabelstroke %})


</code>


</td>
<td class="table-cell-default">


<code>


`{ width: 1, lineJoin: 'round' }`


</code>


</td>
<td class="table-cell-comment">


The stroke of the label.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### visible?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


The visibility of the label.





</td>
</tr>
</tbody>
</table>



