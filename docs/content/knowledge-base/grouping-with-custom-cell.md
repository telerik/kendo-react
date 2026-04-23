---
title: Create a Grid with Grouping and a Custom Cell
description: An example on how to use the KendoReact Grid with grouping and custom cells.
type: how-to
page_title: Create a Grid with Grouping and a Custom Cell - KendoReact Grid
slug: kendoreact-grid-with-grouping-and-a-custom-cell
tags: grid, rows, cell, grouping,
ticketid: 1385369
res_type: kb
category: knowledge-base
components: ["grid"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>8.3.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact Grid</td>
	    </tr>
    </tbody>
</table>

## Description

How to make a KendoReact Grid that combines custom data cells and grouping.

## Solution

To enable custom data cells in a Grid that uses grouping, utilize the Column's [`cells`]({% slug api_grid_gridcolumnprops %}#toc-cells) property. The `cells` property lets you specify which cells to customize so you can apply the customizations only to the data cells.
Unlike `cells`, the [`cell`]({% slug api_grid_gridcolumnprops %}#toc-cell) property is applied to all cells in the column, not just the data cells. This could lead to various issues, for example, losing cell stylization, decreasing code readability and making it prone to other bugs.

The following example demonstrates how to use the `cells` property to set custom stylization to the data cells and enable grouping:

{% meta height:600 %}
{% embed_file grid/grouping-with-custom-cell/app.jsx preview %}
{% embed_file grid/grouping-with-custom-cell/main.jsx %}
{% endmeta %}
