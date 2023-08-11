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
	    	<td>5.16.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description

I want to customize the content of the Grid group header.

## Solution

In order to achieve this, it is currently recommended to use the ['groupHeader`]({% slug api_grid_gridcellssettings %}#toc-groupheader) property.

{% meta id:index height:760 %}
{% embed_file grid/group-header-render/cells-header/main.jsx preview %}
{% embed_file shared/products.json %}
{% embed_file shared/interfaces.ts %}
{% endmeta %}

This can also be achieved using the Grid `cellRender` property
1. Use the [`cellRender`]({% slug api_grid_gridprops %}#toc-cellrender) prop.
1. Return a modified `td` element with the desired icon or other custom elements for the specific header.

The following example demonstrates how to modify the `groupHeader` of the Grid.

{% meta id:index height:760 %}
{% embed_file grid/group-header-render/main.jsx preview %}
{% embed_file shared/products.json %}
{% endmeta %}
