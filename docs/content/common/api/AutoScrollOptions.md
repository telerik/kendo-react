---
title: AutoScrollOptions
description: "Learn how to build custom functionality when working with the React Common by Kendo UI with the help of the AutoScrollOptions."
api_reference: true
type: inner_api
slug: api_common_autoscrolloptions
---

# AutoScrollOptions
Represents additional configuration options for the `autoScroll` options of the `useDraggable` hook and `Draggable` component.


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


#### boundaryElementRef?


</td>
<td type class="table-cell-type">


<code>


"null" | RefObject&lt;"null" | HTMLElement | { element: "null" | HTMLElement; }&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the calculated element used for boundary detection, used to calculate the `autoScroll` velocity.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### direction?


</td>
<td type class="table-cell-type">


<code>


{ horizontal: boolean; vertical: boolean; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Allows the user to toggle `autoScroll` in a specific direction.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### enabled?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Set to `false` to disable the `autoScroll` feature.


</td>
</tr>
</tbody>
</table>



