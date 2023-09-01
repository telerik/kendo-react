---
title: Hide grouped columns from the Grid
description: An example on how hide grouped columns 
type: how-to
page_title: Hiding grouped columns - KendoReact Grid
slug: grid-hide-grouped-columns
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
I want to hide the columns that I have added to the grouping of the Grid

## Solution
Columns in the Grid can be dynamically removed if we have the columns collection stored in the state and we have a way for determining which columns should be added to the columns collection of the Grid. In this example we are adding "show" property to the columns and its value is set to false if within the onDataStateChange event of the Grid there is a group expression with the field of the column.

This is an example showcasing this approach:

{% meta id:index height:760 %}
{% embed_file grid/grid-hide-grouped-columns/main.jsx preview %}
{% embed_file shared/products.json %} 
{% endmeta %}