---
title: ConnectionCap
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the ConnectionCap."
api_reference: true
type: inner_api
slug: api_diagram_connectioncap
---

# ConnectionCap
The connections end/start cap configuration.


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


#### anchor?


</td>
<td type class="table-cell-type">


<code>


{ x: number; y: number; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The anchor point of the arrow marker.
This is the point where the marker will be positioned relative to the line.
Applies when the type is "ArrowEnd" or "ArrowStart".


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fill?


</td>
<td type class="table-cell-type">


<code>


string | [Fill]({% slug api_diagram_fill %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The connections end/start cap fill options or color.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### path?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The SVG path data for the arrow marker.
Applies when the type is "ArrowEnd" or "ArrowStart".


</td>
</tr>
<tr>
<td class="table-cell-name">


#### radius?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


4


</code>


</td>
<td class="table-cell-comment">


The radius of the filled circle marker.
Applies when the type is "FilledCircle".





</td>
</tr>
<tr>
<td class="table-cell-name">


#### stroke?


</td>
<td type class="table-cell-type">


<code>


string | [Stroke]({% slug api_diagram_stroke %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The connections end/start cap stroke options or color.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### type?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The end/start cap type used in connections.
The supported values are:
- "none": no cap
- "ArrowEnd" / "ArrowStart": a filled arrow
- "FilledCircle": a filled circle


</td>
</tr>
</tbody>
</table>



