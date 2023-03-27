---
title: Filter KendoReact Grid with external DropDownList
description: An example on how to use external component for filtering Grid's data
type: how-to
page_title: Using external DropDownList for filtering data - KendoReact Grid
slug: grid-external-dropdownlist-filter
position:
tags: grid, filtering
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
I want to filter the Grid from an external DropDownList bound to one of the fields.

## Solution
All data operations in the Grid are handled manually, so including a filter expression in the Grid's DataState within the onChange event of an external DropDownList can be used for filtering the data. 

This is an example showcasing this approach:

{% meta id:index height:760 %}
{% embed_file grid/grid-external-dropdownlist-filter/main.jsx preview %}
{% embed_file grid/grid-external-dropdownlist-filter/products.json %} 
{% endmeta %}