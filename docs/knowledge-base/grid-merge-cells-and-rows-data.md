---
title: Merge Rows in the Grid
description: An example on how to merge cells and rows data in the KendoReact Grid.
type: how-to
page_title: Merge Rows and Cells Data in the Grid - KendoReact Grid
slug: merge-row-and-cell-in-the-grid
tags: grid, rows, merge, cells
res_type: kb
category: knowledge-base
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

How can I merge or group duplicate cells and rows data in the KendoReact Data Grid?

## Solution

For simple scenarios where the data needs to be merged for single column, rowSpan can be set to the TD elements within the cellRender of the Grid. However, due to limitations in how HTML table can rowSpan/colSpan, it is not possible to have different colSpan for rows that already have set rowSpan, so using colSpan and rowSpan for merging duplicate rows and cells data will not be possible and different approach must be used. 

For this scenario, use a [`cellRender`]({% slug api_grid_gridprops %}#toc-cellrender) and compare the previous cell and previous row data to remove the content of the cell if it duplicate. You can also add different colors of the cell based on the values (suitable for boolean values for example), so they can be distinguished visually. 

{% meta id:index height:760 %}
{% embed_file grid/merge-rows-and-cells/main.jsx preview %}
{% embed_file grid/merge-rows-and-cells/products.json %} 
{% endmeta %}
 