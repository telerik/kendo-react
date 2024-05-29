---
title: Change the boolean operators text in the Grid filtering and the cell value of the column. 
description: An example on how to change the default boolean operators text for the Grid and configuring custom cell.
type: how-to
page_title: Set custom text for the boolean operators in the Grid - KendoReact Grid
slug: grid-change-boolean-filter-to-yesno
tags: grid, kendoreact, filter, filtering, boolean
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

I want to change the boolean filter "Is True" and "Is False" with "Yes" and "No". The value in the cells should also show "Yes" and "No" instead of "true" and "false".

## Solution

For changing the text for the boolean operators in the Grid, a LocalizationProvider with custom messages can be used. As for the values in the cells, the "cell" property of the column must be set to a custom cell.

Following is an example demonstrating this approach: 

{% meta id:index height:560 %}
{% embed_file grid/grid-change-boolean-filter-to-yesno/app.jsx preview %}
{% embed_file grid/grid-change-boolean-filter-to-yesno/main.jsx %}
{% embed_file grid/grid-change-boolean-filter-to-yesno/sample-products.jsx %}
{% endmeta %}