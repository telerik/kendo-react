---
title: ShapeFillGradient
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the ShapeFillGradient."
api_reference: true
type: inner_api
slug: api_diagram_shapefillgradient
---

# ShapeFillGradient
Defines the gradient fill of the shape. Used in the `gradient` property of ShapeFill.


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


#### center?


</td>
<td type class="table-cell-type">


<code>


[number, number]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The center of the radial gradient. Coordinates are relative to the shape bounding box. For example, `[0, 0]` is top left and `[1, 1]` is bottom right.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### end?


</td>
<td type class="table-cell-type">


<code>


[number, number]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The end point of the linear gradient. Coordinates are relative to the shape bounding box.


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


1


</code>


</td>
<td class="table-cell-comment">


The radius of the radial gradient relative to the shape bounding box.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### start?


</td>
<td type class="table-cell-type">


<code>


[number, number]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The start point of the linear gradient. Coordinates are relative to the shape bounding box.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### stops?


</td>
<td type class="table-cell-type">


<code>


[ShapeFillGradientStop]({% slug api_diagram_shapefillgradientstop %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The array of gradient color stops.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### type?


</td>
<td type class="table-cell-type">


<code>


"linear" | "radial"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The type of the gradient. Supported values are `"linear"` and `"radial"`. Default: `"linear"`.


</td>
</tr>
</tbody>
</table>



