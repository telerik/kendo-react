---
title: Render Custom Content inside the Grid Group Header
description: An example on how to render custom content inside the group header of the KendoReact Grid.
type: how-to
page_title: Render Custom Content in the Group Header - KendoReact Grid
slug: render-a-custom-content-inside-the-grid-group-header
tags: grid, groupheader, cell, render
ticketid: 1410259
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

I want to implement a customized `IconCell` that renders an icon and when I group the Grid by that `IconColmn`, I want to display a small icon inside the group header row. How can I achieve this in the KendoReact Grid?

## Solution

1. Use the [`cellRender`]({% slug api_grid_gridprops %}#toc-cellrender) prop.
1. Return a modified `td` element with the desired icon or other custom elements for the specific header.

The following example demonstrates how to modify the `groupHeader` of the Grid.

{% meta id:index height:760 %}
{% embed_file grid/group-header-render/main.jsx preview %}
{% embed_file shared/products.json %}
{% endmeta %}
