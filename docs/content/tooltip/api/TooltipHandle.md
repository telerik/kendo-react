---
title: TooltipHandle
description: "Learn how to build custom functionality when working with the React Tooltip by Kendo UI with the help of the TooltipHandle."
api_reference: true
type: inner_api
slug: api_tooltip_tooltiphandle
---

# TooltipHandle
Imperative handle interface for Tooltip component.
Exposed via ref for programmatic control.


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


#### handleKeyDown


</td>
<td type class="table-cell-type">


<code>


(event: KeyboardEvent&lt;HTMLDivElement&gt;, keys: string[]) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Handles keyboard events.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### handleMouseOut


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The method is used on the MouseOut event to hide the Tooltip.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### handleMouseOver


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Used on the `MouseOver` event to show the Tooltip.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### handleTargetItemClick


</td>
<td type class="table-cell-type">


<code>


(event: MouseEvent&lt;HTMLDivElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Handles click events on the target element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### props


</td>
<td type class="table-cell-type">


<code>


Readonly&lt;[TooltipProps]({% slug api_tooltip_tooltipprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the Tooltip component.


</td>
</tr>
</tbody>
</table>



