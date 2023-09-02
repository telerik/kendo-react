---
title: Grid Editing with Stateful Cells
description: An example on how to edit the Grid with cells that manage their own state
type: how-to
page_title: Grid Editing with Stateful Cells - KendoReact Grid
slug: grid-editing-stateful-cells
tags: grid, edit, cell, performance, state, stateful cells, stateful grid
ticketid: 1518255
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>5.16.1</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>

## Description

How to update the entire Grid when the user stops editing instead of on each keypress in order to improve performance? 

## Solution

This can be achieved by making the cells managing their own state via a custom [cell](https://www.telerik.com/kendo-react-ui/components/grid/api/GridColumnProps/#toc-cell) .

{% meta id:index height:500 %}
{% embed_file grid/grid-cell-state-editing/main.jsx preview %}
{% embed_file grid/grid-cell-state-editing/products.jsx  %}
{% endmeta %}
