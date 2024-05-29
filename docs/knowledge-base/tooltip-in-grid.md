---
title: Render Tooltips for Grid Cells
description: An example on how to set a KendoReact Tooltip inside the KendoReact Grid.
type: how-to
page_title: Render Tooltips for Grid Cells - KendoReact Tooltip
slug: grid_tooltip_howto
tags: tooltip, render, grid, cells
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>

## Description

How can I render a KendoReact Tooltip inside a KendoReact Grid?

## Solution

Add titles to the cells of the Grid by setting the [`cell`]({% slug api_grid_gridcolumnprops %}#toc-cell) and [`headerCell`]({% slug api_grid_gridcolumnprops %}#toc-headercell) properties.

{% meta height:450 %}
{% embed_file grid/with-tooltip/app.jsx preview %}
{% embed_file grid/with-tooltip/main.jsx %}
{% embed_file shared/shared-products.json %}
{% endmeta %}
