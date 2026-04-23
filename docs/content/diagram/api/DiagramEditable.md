---
title: DiagramEditable
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the DiagramEditable."
api_reference: true
type: inner_api
slug: api_diagram_diagrameditable
---

# DiagramEditable
A set of settings to configure the Diagram behavior when the user attempts to edit, delete or create shapes and connections, drag shapes, resize shapes, or rotate shapes.


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


#### connectionTemplate?


</td>
<td type class="table-cell-type">


<code>


(data: any) => string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the connection editor template.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### drag?


</td>
<td type class="table-cell-type">


<code>


boolean | { snap?: boolean | { size?: number; }; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the shapes and connections can be dragged.


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




</td>
<td class="table-cell-comment">


Specifies if the shapes and connections can be removed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### resize?


</td>
<td type class="table-cell-type">


<code>


boolean | { handles?: { fill?: string | [Fill]({% slug api_diagram_fill %}); height?: number; hover?: { fill?: string | [Fill]({% slug api_diagram_fill %}); stroke?: [Stroke]({% slug api_diagram_stroke %}); }; stroke?: [Stroke]({% slug api_diagram_stroke %}); width?: number; }; offset?: number; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the look-and-feel of the shape resizing handles.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rotate?


</td>
<td type class="table-cell-type">


<code>


boolean | { fill?: [Fill]({% slug api_diagram_fill %}); stroke?: { color?: string; width?: number; }; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies whether the shapes can be rotated.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### shapeTemplate?


</td>
<td type class="table-cell-type">


<code>


(data: any) => string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the shape editor template.


</td>
</tr>
</tbody>
</table>



