---
title: Adapting rowSpan to Contents in TileLayout for React
description: Learn how to dynamically adjust the rowSpan value in a TileLayout based on the contents' height.
type: how-to
page_title: Adapting rowSpan to Contents in TileLayout for React | KendoReact TileLayout
slug: tilelayout-adapt-rowspan-content-dynamically
tags: tilelayout, rowSpan, content, dynamic, dynamically
res_type: kb
---


## Environment
<table>
    <tbody>
	    <tr> 
	    	<td>Product Version</td>
	    	<td>7.0.2</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>

## Description
I want to adapt the `rowSpan` value in a TileLayout based on the height of its contents. Currently, I have set the `colSpan` and `rowSpan` to a static number, but this results in white space when there is less data in the grid.

## Solution

To dynamically adjust the `rowSpan` value based on the content height, create a function that obtains the Grid height and recalculates it based on your needs.


{% meta id height:500 %}
{% embed_file layout/tilelayout-adapt-rowspan-content-dynamically/app.jsx preview %}
{% embed_file layout/tilelayout-adapt-rowspan-content-dynamically/main.jsx %}
{% embed_file shared/shared-products.json %}
{% endmeta %}
