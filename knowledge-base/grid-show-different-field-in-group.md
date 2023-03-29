---
title: Show different field in group headers
description: An example on how to show different field within the group header
type: how-to
page_title: Showing different field value within the group headers - KendoReact Grid
slug: grid-show-different-field-in-group
position:
tags: grid, grouping
ticketid: 
res_type: kb
category: knowledge-base
---
 
## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>5.12.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>

## Description
I want to show different than the group field value within the group headers

## Solution
For achieving the desired result we need to ensure that all items grouped by field A will have equal field B (the field that we want to display in the group header). As for the actual implementation, we need to handle the cellRender of the Grid and change the rendering of the group header cell for the group field that we want to change. The next step is to find the first data item in that group and get the value of the other field.

This is an example showcasing this approach:

{% meta id:index height:760 %}
{% embed_file grid/grid-show-different-field-in-group/main.jsx preview %}
{% embed_file grid/grid-show-different-field-in-group/products.json %} 
{% endmeta %}