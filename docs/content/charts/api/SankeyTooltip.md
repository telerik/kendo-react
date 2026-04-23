---
title: SankeyTooltip
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the SankeyTooltip."
api_reference: true
type: inner_api
slug: api_charts_sankeytooltip
---

# SankeyTooltip
Represents the Sankey tooltip configuration.


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


#### appendTo?


</td>
<td type class="table-cell-type">


<code>


"null" | HTMLElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the container to which the Tooltip will be appended. Defaults to [`body`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### delay?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


200


</code>


</td>
<td class="table-cell-comment">


Represents the delay of the tooltip displaying.
The delay is measured in milliseconds.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### followPointer?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


Indicates whether the tooltip will follow the mouse pointer.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### linkComponent?


</td>
<td type class="table-cell-type">


<code>


ComponentType&lt;[TooltipContentProps]({% slug api_charts_tooltipcontentprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The component that will be rendered as the content of the Sankey tooltip when the hovered element is a link.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### nodeComponent?


</td>
<td type class="table-cell-type">


<code>


ComponentType&lt;[TooltipContentProps]({% slug api_charts_tooltipcontentprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The component that will be rendered as the content of the Sankey tooltip when the hovered element is a node.


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


12


</code>


</td>
<td class="table-cell-comment">


The distance between the tooltip and the mouse pointer in pixels.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### visible?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates whether the Sankey tooltips will be rendered.


</td>
</tr>
</tbody>
</table>



