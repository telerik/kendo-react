---
title: Store Grid columns width and order in the localStorage
description: An example on how to store the width and the order of the Grid columns.
type: how-to
page_title: Store the width and the order of the columns - KendoReact Grid
slug: grid-store-columns-width-and-order
tags: grid, kendoreact, store, columns, width
ticketid: 
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>5.9.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description

I want to store the order and the width of the Grid columns on resizing and reordering. 

## Solution

Handle the onColumnResize and onColumnReorder to get reference to the updated columns collection and store it in a localStorage variable. The columns definition of the Grid can then be loaded from that collection. 

Following is an example demonstrating this approach:
 

{% meta id height:500 %}
{% embed_file grid/store-columns-width-and-order/main.jsx preview %}
{% endmeta %}
