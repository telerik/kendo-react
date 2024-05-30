---
title: Enable Grid scrollbar conditionally based on page size
description: An example on how to conditionally enable Grid's scrollbar 
type: how-to
page_title: Conditionally enable Grid's scrollable based on page size - KendoReact Grid
slug: grid-conditional-scrollbar
position:
tags: grid, scrollable, scrollbar, scrolling
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
I want to enable the scrollable functionality of the Grid if page size is higher than 10

## Solution
This can be achieved by setting the scrollable property of the Grid from a state variable and update its value based on the current page size (either within the onPageChange or within the onDataStateChange event)

This is an example showcasing this approach:

{% meta id:index height:540 %}
{% embed_file grid/grid-conditional-scrollbar/app.jsx preview %}
{% embed_file grid/grid-conditional-scrollbar/main.jsx %}
{% embed_file grid/grid-conditional-scrollbar/products.json %} 
{% endmeta %}