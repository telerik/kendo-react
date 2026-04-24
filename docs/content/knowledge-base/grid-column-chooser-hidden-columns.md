---
title: Using Column Chooser with Initially Hidden Columns in KendoReact Data Grid
description: Learn how to use the GridColumnMenuColumnsChooser component to manage the visibility of columns initially set as hidden in the KendoReact Data Grid.
type: how-to
page_title: Resolving Issues with Initially Hidden Columns in KendoReact Data Grid Column Chooser
slug: grid-column-chooser-hidden-columns
tags: grid, kendoreact, columns, columnchooser, defaultcolumnsstate
ticketid: 1701248
res_type: kb
category: knowledge-base
components: ["grid"]
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>12.2.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Grid</td>
		</tr>
	</tbody>
</table>

## Description

I want to use the GridColumnMenuColumnsChooser component to manage the visibility of columns in the KendoReact Data Grid. My grid has columns that are initially hidden by setting the `GridColumn.hidden` prop to `true`. However, the column chooser does not update the visible state of these columns, and the `columnsState` prop incorrectly shows the column as visible.

This knowledge base article also answers the following questions:

-   How can I use the column chooser with initially hidden columns?
-   Why is the column chooser not respecting the hidden state of columns?
-   How to set the initial state of columns with GridColumnMenuColumnsChooser?

## Solution

To manage the visibility of columns that are initially hidden using the GridColumnMenuColumnsChooser component, use the [`defaultColumnsState`](slug:api_grid_gridprops#toc-defaultcolumnsstate) property of the KendoReact Data Grid. This property allows the built-in state management to recognize the initial visibility of columns.

Follow these steps:

1. Set the `id` property for each column in the grid to ensure proper identification of columns.
2. Use the [`defaultColumnsState`](slug:api_grid_gridprops#toc-defaultcolumnsstate) property to define the initial state of the columns, including their visibility.

{% meta height:310 %}
{% embed_file grid/column-chooser-hidden-columns/app.tsx preview %}
{% embed_file grid/column-chooser-hidden-columns/main.tsx %}
{% endmeta %}

## See Also

-   [Grid Overview](slug:overview_grid)
