---
title: DiagramState
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the DiagramState."
api_reference: true
type: inner_api
slug: api_diagram_diagramstate
---

# DiagramState
Represents the serialized state of the diagram, including its shapes and connections.
Used for saving and restoring the diagram's structure.


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


#### connections?


</td>
<td type class="table-cell-type">


<code>


[ConnectionOptionsBase]({% slug api_diagram_connectionoptionsbase %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The array of connection definitions in the diagram.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### shapes?


</td>
<td type class="table-cell-type">


<code>


[ShapeOptionsBase]({% slug api_diagram_shapeoptionsbase %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The array of shape definitions in the diagram.


</td>
</tr>
</tbody>
</table>



