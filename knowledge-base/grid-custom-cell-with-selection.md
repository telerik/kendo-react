---
title: Use custom cell for a column with enabled selection in the Grid.
description: An example on how to define custom column cell and keep the selection functionality
type: how-to
page_title: Custom Column Cell With Grid Selection - KendoReact Grid
slug: grid-custom-cell-with-selection
tags: grid, kendoreact, custom, cell, selection
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
The row and cell selection stops to work If I define custom cell for a column. 

## Solution
Add the selected class name to the custom cell conditionally based on the "props.isSelected" value. The custom cell should also include the necessary attributes.

Following is an example demonstrating how to keep the Grid selection functionality with custom cell:

{% meta height:480 %}
{% embed_file grid/grid-custom-cell-with-selection/main.jsx preview %}
{% endmeta %}
