---
title: Selectable
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the Selectable."
api_reference: true
type: inner_api
slug: api_diagram_selectable
---

# Selectable
Defines the Diagram selection options.

By default, you can select shapes in the Diagram in one of two ways:
- Clicking a single shape to select it and deselect any previously selected shapes.
- Holding the `Ctrl` key while clicking multiple shapes to select them and any other shapes between them.

Using the `selectable` configuration, you can enable single selection only, enable selection by drawing a rectangular area with the mouse around shapes in the canvas, or disable selection altogether.


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


Defines the fill configuration for the selection rectangle.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### key?


</td>
<td type class="table-cell-type">


<code>


"shift" | "none" | "alt" | "ctrl"


</code>


</td>
<td class="table-cell-default">


<code>


"none"


</code>


</td>
<td class="table-cell-comment">


Defines the meta key when doing a visual selection through drawing a rectangular area around shapes in the canvas. This option does not change the way a single shape is selected when using click or tap. To avoid clashes, verify that the `selectable.key` and `pannable.key` are different.
The available values are:
- "none"  - No activation key, visual selection is disabled.
- "ctrl"  - The activation key will be Ctrl.
- "shift" - The activation key will be Shift.
- "alt"   - The activation key will be Alt.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### multiple?


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


Specifies if multiple selection is enabled.





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


3


</code>


</td>
<td class="table-cell-comment">


Defines the offset (in pixels) of the selection rectangle from the shape bounds.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### stroke?


</td>
<td type class="table-cell-type">


<code>


[Stroke]({% slug api_diagram_stroke %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the selection line configuration.


</td>
</tr>
</tbody>
</table>



