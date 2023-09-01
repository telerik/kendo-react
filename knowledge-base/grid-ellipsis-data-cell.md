---
title: Add ellipsis to data cells in Grid after specific number of lines
description: An example on how to show ellipsis in data cells for long text.
type: how-to
page_title: Show ellipsis in data cells for long text after specific number of lines - KendoReact Grid
slug: grid-ellipsis-data-cell
tags: grid, appearance, cell, ellipsis
ticketid: 
res_type: kb
category: knowledge-base
---

## Environment
<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>5.12.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description
How to limit the text in data cells to 2 lines and show ellipsis for longer text

## Solution
This can be achieved by wrapping the content of the data cells in a DIV element with specific class name that can then be customized to show only two lines and ellipsis for longer text. Adding the DIV element can be achieved within the cellRender of the Grid.

This is an example showcasing how to limit the value:

{% meta height:600 %}
{% embed_file grid/grid-ellipsis-data-cell/main.jsx preview %}
{% embed_file grid/grid-ellipsis-data-cell/styles.css preview %}
{% endmeta %}
