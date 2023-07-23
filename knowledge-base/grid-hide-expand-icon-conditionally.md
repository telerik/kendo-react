---
title: Hide conditionally the expand icon for some items
description: An example on how to conditionally hide the expand icon for some items
type: how-to
page_title: Hide The Expand Button For DataItems Conditionally - KendoReact Grid
slug: grid-hide-expand-icon-conditionally
position:
tags: grid, details, expand, hide
ticketid: 
res_type: kb
category: knowledge-base
---
 
## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>5.14.1</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>

## Description
I want to hide the expand icon for some rows based on a condition from the dataItems values.

## Solution
Within the cellRender of the Grid check if the field for the cell is the expand field and use the props.dataItem to return an empty TD element if the condition for the expand icon is not met. 

This is an example showcasing this approach:

{% meta id:index height:760 %} 
{% embed_file grid/grid-hide-expand-icon-conditionally/main.jsx preview %}
{% endmeta %}