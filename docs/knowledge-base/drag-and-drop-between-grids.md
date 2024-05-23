---
title: Drag and Drop Rows between Grids
description: An example on how to drag and drop rows between two KendoReact Grids.
type: how-to
page_title: Drag and Drop Rows between Grids - KendoReact Grid
slug: drag-and-drop-between-grids
tags: grid, rows, merge
ticketid: 1454285
res_type: kb
category: knowledge-base
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
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description

I need to be able to drag and drop rows from one Grid to another.

## Solution

Use the [`rowRender`]({% slug api_grid_gridprops %}#toc-rowrender) prop of the Grid to attach the [onDragStart](https://developer.mozilla.org/en-US/docs/Web/API/Document/dragstart_event) and onDrop(https://developer.mozilla.org/en-US/docs/Web/API/Document/drop_event) events to the row.

{% meta id height:760 %}
{% embed_file grid/drag-drop-between-grids/main.jsx preview %}
{% embed_file shared/products.json %}
{% endmeta %}
