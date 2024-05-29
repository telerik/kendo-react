---
title: Using DropDownList filter for a field in the Grid containing an array.
description: An example on how to filter array field with a DropDownList custom filter.
type: how-to
page_title: Create custom DropDownList filter for array field - KendoReact Grid
slug: grid-dropdown-filter-for-array-field
tags: grid, kendoreact, filter, array
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

I have a field in the Grid that contains an array. I want to add a DropDownList filter for that column that will filter the array values.

## Solution

The first step is to create a custom filter with a DropDownList for the array column through the "filterCell" property of the column. The selected value from the DropDownList will be added to the filter expressions, but since there is no built-in operator that will search within an array field, a custom operator must be defined. Within the onDataStateChange event of the Grid, find and replace the filter operator for the array field.

Following is an example with the described approach:

{% meta height:450 %}
{% embed_file grid/dropdown-filter-for-array-field/app.jsx preview %}
{% embed_file grid/dropdown-filter-for-array-field/main.jsx %}
{% embed_file grid/dropdown-filter-for-array-field/dropdownFilterCell.jsx %}
{% endmeta %}