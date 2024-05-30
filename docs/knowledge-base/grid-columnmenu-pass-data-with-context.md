---
title: Pass data to GridColumnMenuCheckboxFilter from Grid context
description: An example on how to pass data to GridColumnMenuCheckboxFilter using React Context.
type: how-to
page_title: Pass data to the column menu GridColumnMenuCheckboxFilter - KendoReact Grid
slug: grid-columnmenu-pass-data-with-context
tags: grid, kendoreact, columnmenu, filtering
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

I have the data for the GridColumnMenuCheckboxFilter within the context of the Grid and I want to pass it to the column menu. How can I re-use the data.

## Solution 

For achieving the desired result the React Context can be used by wrapping it around the Grid component and then accessing the references to the data within the column menu.

Following is an example demonstrating this approach

{% meta id:index height:520 %}
{% embed_file grid/grid-columnmenu-pass-data-with-context/app.jsx preview %}
{% embed_file grid/grid-columnmenu-pass-data-with-context/main.jsx %}
{% embed_file grid/grid-columnmenu-pass-data-with-context/columnMenu.jsx %}
{% embed_file grid/grid-columnmenu-pass-data-with-context/products.json %}
{% endmeta %}