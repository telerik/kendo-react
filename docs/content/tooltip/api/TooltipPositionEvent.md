---
title: TooltipPositionEvent
description: "Learn how to build custom functionality when working with the React Tooltip by Kendo UI with the help of the TooltipPositionEvent."
api_reference: true
type: inner_api
slug: api_tooltip_tooltippositionevent
---

# TooltipPositionEvent



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


#### anchorElement?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Tooltip anchor element prop.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### element


</td>
<td type class="table-cell-type">


<code>


HTMLDivElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Tooltip element. Useful to get the actual `width` and `height` of rendered Tooltip.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### mouseLeft


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current mouse `left` position.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### mouseTop


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current mouse `top` position;


</td>
</tr>
<tr>
<td class="table-cell-name">


#### nativeEvent


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A native DOM event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### position?


</td>
<td type class="table-cell-type">


<code>


TooltipPosition


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Tooltip position prop.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### syntheticEvent


</td>
<td type class="table-cell-type">


<code>


SyntheticEvent&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A React Synthetic Event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### target


</td>
<td type class="table-cell-type">


<code>


[TooltipHandle]({% slug api_tooltip_tooltiphandle %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An event target.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### targetElement


</td>
<td type class="table-cell-type">


<code>


"null" | HTMLElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current target element. Useful to calculate `top` and `left` position of the Tooltip element.


</td>
</tr>
</tbody>
</table>



