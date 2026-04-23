---
title: DiagramLayout
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the DiagramLayout."
api_reference: true
type: inner_api
slug: api_diagram_diagramlayout
---

# DiagramLayout
The layout of a diagram consists in arranging the shapes (sometimes also the connections) in some fashion in order to achieve an aesthetically pleasing experience to the user.


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


#### endRadialAngle?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines where the circle/arc ends (radial tree layout).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### grid?


</td>
<td type class="table-cell-type">


<code>


[LayoutGrid]({% slug api_diagram_layoutgrid %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The grid layout options.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### horizontalSeparation?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The distance between siblings or levels.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### iterations?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The number of times that all the forces in the diagram are being calculated and balanced.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### layerSeparation?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The height (in a vertical layout) or width (in a horizontal layout) between the layers.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### nodeDistance?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The optimal length between 2 nodes (force-directed/layered layout).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### radialFirstLevelSeparation?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls the distance between the root and the immediate children of the root (radial tree layout).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### radialSeparation?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the radial separation between the levels (radial tree layout).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startRadialAngle?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines where the circle/arc starts (radial tree layout).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### subtype?


</td>
<td type class="table-cell-type">


<code>


"left" | "right" | "vertical" | "horizontal" | "up" | "down" | "mindmapHorizontal" | "mindmapVertical" | "radial" | "tipOver"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The subtype further defines the layout type by specifying in greater detail the behaviour expected by the layout algorithm.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tipOverTreeStartLevel?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the start level when the subtype is tipOver.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### type?


</td>
<td type class="table-cell-type">


<code>


"tree" | "force" | "layered"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The type of the layout algorithm to use.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### underneathHorizontalOffset?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The horizontal offset from a child with respect to its parent (tipOver tree layout).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### underneathVerticalSeparation?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The vertical separation between siblings and sub-branches (tipOver tree layout).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### underneathVerticalTopOffset?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The vertical separation between a parent and its first child (tipOver tree layout).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### verticalSeparation?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The distance between siblings or levels.


</td>
</tr>
</tbody>
</table>



