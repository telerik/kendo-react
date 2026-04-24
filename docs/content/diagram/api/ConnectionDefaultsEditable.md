---
title: ConnectionDefaultsEditable
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the ConnectionDefaultsEditable."
api_reference: true
type: inner_api
slug: api_diagram_connectiondefaultseditable
---

# ConnectionDefaultsEditable
Defines the connection editable options.
Allows configuring which editing actions are available for connections in the diagram.


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


#### drag?


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


Specifies if the shapes or connections can be dragged.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### points?


</td>
<td type class="table-cell-type">


<code>


boolean | [ConnectionPointsEditable]({% slug api_diagram_connectionpointseditable %})


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Specifies whether the connection path can be reshaped by the user.
When enabled, dragging a connection handle adds or updates connection points to reflect the new route.
User-defined points are shown as hollow circular markers and can be removed by double-clicking them.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### remove?


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


Specifies if the shapes or connections can be removed.





</td>
</tr>
</tbody>
</table>



