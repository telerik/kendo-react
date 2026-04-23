---
title: ShapeConnector
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the ShapeConnector."
api_reference: true
type: inner_api
slug: api_diagram_shapeconnector
---

# ShapeConnector
Defines the connectors available in the shape.
A connector is the point in the shape where a connection between this shape and another one can originate from or end.


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


#### description?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The connector description.


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


The fill options of the connector.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### height?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


8


</code>


</td>
<td class="table-cell-comment">


The height of the connector.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### hover?


</td>
<td type class="table-cell-type">


<code>


[ShapeConnectorHover]({% slug api_diagram_shapeconnectorhover %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The hover configuration of the connector.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### name?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The connector name. The predefined names are:
- "top" - top connector
- "right" - right connector
- "bottom" - bottom connector
- "left" - left connector
- "auto" - auto connector


</td>
</tr>
<tr>
<td class="table-cell-name">


#### offset?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


0


</code>


</td>
<td class="table-cell-comment">


The offset distance from the shape edge.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### position?


</td>
<td type class="table-cell-type">


<code>


(shape: any) => any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Function that positions the connector. Receives the shape as parameter and returns a point indicating where the connector should be placed.


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


The stroke options of the connector.


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


8


</code>


</td>
<td class="table-cell-comment">


The width of the connector.





</td>
</tr>
</tbody>
</table>



