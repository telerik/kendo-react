---
title: Add two horizontal scrollbars to the Grid
description: An example of how to add two horizontal scrollbars to the Grid
type: how-to
page_title: An example of how to add two horizontal scrollbars to the Grid - KendoReact Grid
slug: grid-two-horizontal-scrollbars
tags: dropdownlist, clear, value
ticketid: 1544377
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>5.13.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description

How to add two horizontal scrollbars (one at the top and the other one on the bottom) to the Grid?

## Solution

This can be achieved by adding an external scrollbar and handling the [`onScroll`]({% slug api_grid_gridprops %}#toc-onscroll) events of the Grid and the fake scrollbar to unify their scrollLeft position.

{% meta id height:760 %}
{% embed_file grid/grid-two-horizontal-scrollbars/main.jsx preview %}
{% embed_file grid/grid-two-horizontal-scrollbars/sample-products.jsx preview %}
{% endmeta %}
