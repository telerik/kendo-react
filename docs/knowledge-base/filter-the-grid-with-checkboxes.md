---
title: Filter the Grid with Checkboxes
description: An example on how to filter the KendoReact Grid by using checkboxes.
type: how-to
page_title: Filter the Grid by Using Checkboxes - KendoReact Grid
slug: filter-the-grid-with-checkboxes
tags: kendoreact, grid, filter, checkbox
ticketid: 1410595
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

How can I filter the KendoReact Grid data with checkboxes similar to the Kendo UI for jQuery Grid?

## Solution

This is already a built-in option of the Grid and the example can be observed [here.]({% slug column_menu_grid %}#toc-checkbox-filter)

### Older Solution

In KendoReact, you can programmatically implement the data filtering with checkboxes for the Grid by using the [ColumnMenu]({% slug column_menu_grid %}) component.

{% meta id:index height:580 %}
{% embed_file grid/grid-filter-checkbox/app.jsx preview %}
{% embed_file grid/grid-filter-checkbox/main.jsx %}
{% embed_file grid/grid-filter-checkbox/customColumnMenu.jsx %}
{% embed_file shared/shared-products.json %}
{% endmeta %}