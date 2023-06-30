---
title: Add empty rows to fill the empty space in the data container
description: An example of how to add empty rows if the number of rows does not fill the data container of the Grid
type: how-to
page_title: Add Empty Rows To Fill The Data Container - KendoReact Grid 
slug: grid-add-empty-rows
tags: grid, kendoreact, rows, empty
ticketid: 
res_type: kb 
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>5.14.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description

I have Grid with enabled virtual scrolling and when I have fewer items I need to fill the empty space with empty rows.

## Solution

Find the last TR element within the "rowRender" of the Grid and return React.Fragment with the last row and the empty rows that will fill the empty space.

Following is an example demonstrating this approach:

{% meta id height:760 %}
{% embed_file grid/grid-add-empty-rows/main.jsx preview %}
{% endmeta %}
