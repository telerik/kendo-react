---
title: Disable reordering of a specific column of the KendoReact Grid
description: An example on how to disable the reordering of a column of the KendoReact Grid.
type: how-to
page_title: Grid disable reordering - KendoReact DateRangePicker
slug: grid-disable-reordering
tags: grid, reodering, column, disable, reorder
ticketid: 1588131
res_type: kb
category: knowledge-base
---

## Environment
<table>
    <tbody>
	    <tr> 
	    	<td>Product Version</td>
	    	<td>6.2.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description
I want to disable the reordering of one or more columns of the KendoReact Grid.


## Solution
The [orderIndex]({% slug api_grid_gridcolumnprops %}#toc-orderIndex) property to the GridColumn component allows you to restrict the column position at a specific place. For example, if you set the `orderIndex` prop of the first column to `0`, it will not be possible to neither drag it to another position, or drag another column to it.

The following example demonstrates the above approach:

{% meta id:index height:560 %}
{% embed_file grid/grid-disable-reordering/main.jsx preview %}
{% embed_file shared/products.json %}
{% endmeta %}
