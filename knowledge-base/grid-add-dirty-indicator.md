---
title: Add dirty indicator in Grid cells with in-cell editing
description: An example on how to render dirty indicator for edited cells in Grid with in-cell editing
type: how-to
page_title: Adding dirty indicator for edited cells in Grid with in-cell editing - KendoReact Grid
slug: grid-add-dirty-indicator
position:
tags: grid, editing, dirty, indicator, incell
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
I want to show dirty indicator for edited cells in Grid with enabled in-cell editing.

## Solution
This can be achieved by tracking the changes and compare them with the original data. With the stored information about the modified cell values we then can add a class name within the cellRender event of the Grid that we can use for displaying a dirty indicator. 

The changes are tracked within the onItemChange event. The dirty collection is cleared after saving or canceling the changes (within saveChanges and cancelChanges).

The custom style for the dirty cells is within the "styles.css" file targeting the TD elements with class "dirty".

This is an example showcasing this approach:

{% meta id:index height:760 %}
{% embed_file grid/grid-add-dirty-indicator/main.jsx preview %}
{% embed_file grid/grid-add-dirty-indicator/sample-products.json %} 
{% embed_file grid/grid-add-dirty-indicator/renderers.jsx %} 
{% embed_file grid/grid-add-dirty-indicator/styles.css %} 
{% endmeta %}