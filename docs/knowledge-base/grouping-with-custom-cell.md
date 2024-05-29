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

KendoReact Grid looses cell alignment when using the cell prop with grouping.

## Solution

In this case, the issue occurs because when the `rowType` is `groupHeader` the cell has to return null.

{% meta id:index height:600 %}
{% embed_file grid/grouping-with-custom-cell/app.jsx preview %}
{% embed_file grid/grouping-with-custom-cell/main.jsx %}
{% embed_file shared/shared-products.json %}
{% endmeta %}
