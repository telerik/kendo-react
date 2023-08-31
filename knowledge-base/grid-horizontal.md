---
title: How to create a horizontal Grid.
description: An example on how to display a horizontal KendoReact Grid.
type: how-to
page_title: Horizontal Grid - KendoReact Grid
slug: grid-horizontal
tags: grid, horizontal, transpose, vertical
ticketid: 1608513
res_type: kb
category: knowledge-base
---

## Environment
<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>5.17.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description

I want to create a horizontal Grid where the column headers are displayed in the first column on separate rows. In addition, the corresponding cell data of each column header should be displayed on the same row of the header.

## Solution

The Grid is designed to display the data in a vertical way but you can still achieve this by transforming the data (by transposing it) in a format expected by the Grid.

The following example showcases this approach:
 
{% meta height:760 %} 
{% embed_file grid/transpose-data/main.jsx preview %} 
{% endmeta %}
