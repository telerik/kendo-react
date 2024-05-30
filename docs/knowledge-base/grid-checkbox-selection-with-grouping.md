---
title: How to use checkbox selection in the Grid with enabled grouping 
description: An example on how to use checkbox selection with grouping - KendoReact Grid
type: how-to
page_title: Use checkbox selection with grouping - KendoReact Grid
slug: grid-checkbox-selection-with-grouping
tags: grid, kendoreact, selection, grouping
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

I want to use the checkbox selection in a Grid with enabled grouping.

## Solution 

When a group expression is applied to the Grid's data, the parent items in the data will be group items, so the logic for setting the select field value and the logic for determining the state of the "Select all" checkbox in the header must be different than the logic used without grouping. 

Following is an example demonstrating this approach: 

{% meta id:index height:560 %}
{% embed_file grid/checkbox-selection-with-grouping/app.jsx preview %}
{% embed_file grid/checkbox-selection-with-grouping/main.jsx %}
{% embed_file grid/checkbox-selection-with-grouping/products.json %}
{% endmeta %}