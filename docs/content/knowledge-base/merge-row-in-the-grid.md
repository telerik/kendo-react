---
title: Merge Rows in the Grid
description: An example on how to merge rows in the KendoReact Grid.
type: how-to
page_title: Merge Rows in the Grid - KendoReact Grid
slug: merge-row-in-the-grid
tags: grid, rows, merge
ticketid: 1414492
res_type: kb
category: knowledge-base
components: ["grid"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>3.0.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact Grid</td>
	    </tr>
    </tbody>
</table>

## Description

How can I merge rows in the KendoReact Data Grid?

## Solution

Use a [`cells`]({% slug api_grid_gridprops %}#toc-cells) and add `rowSpan` to the cells that need it.

{% meta height:760 %}
{% embed_file grid/merge-rows/app.tsx preview %}
{% embed_file grid/merge-rows/main.tsx %}
{% endmeta %}
