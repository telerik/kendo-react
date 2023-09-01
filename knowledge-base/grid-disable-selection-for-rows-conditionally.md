---
title: Disable checkbox selection for Grid rows conditionally.
description: An example on how to disable the checkbox selection for particular rows in the Grid.
type: how-to
page_title: Disable checkbox selection for specific rows - KendoReact Grid
slug: grid-disable-selection-for-rows-conditionally
tags: grid, kendoreact, selection, checkboxes
ticketid: 
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

I want to disable the checkbox selection for specific rows based on a value in the data item

## Solution

Use the cellRender of the Grid to modify the TD element for the select column when the condition for disabling the checkbox is met. Add additional logic for the "Select all" checkbox in the header to exclude the disabled items.
 
Following is an example with the described approach:

{% meta height:450 %}
{% embed_file grid/disable-selection-for-rows-conditionally/main.jsx preview %}
{% embed_file grid/disable-selection-for-rows-conditionally/products.json %}
{% endmeta %} 