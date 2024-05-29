---
title: Add DropDownList for the operators in a custom filterCell of the Grid
description: An example on how to implement DropDownList operator in a custom filterCell of the Grid.
type: how-to
page_title: Add DropDownList for operators in a custom filterCell  - KendoReact Grid
slug: grid-add-operators-dropdown-for-custom-filtercell
tags: grid, custom, filtering, operators
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

How can I add a DropDownList for the operators in a custom filterCell?

## Solution

The GridFilterCellProps passed to the filterCell contain a collection with all operators (props.operators) that can be added to the "data" of the DropDownList. If there is a filter expression for the column, the selected operator is available within props.operator.

Following is an example demonstrating how to add a DropDownList for the operators in a filterCell:

{% meta id:index height:520 %}
{% embed_file grid/add-operators-dropdown-for-custom-filtercell/app.jsx preview %}
{% embed_file grid/add-operators-dropdown-for-custom-filtercell/main.jsx %}
{% embed_file grid/add-operators-dropdown-for-custom-filtercell/InputFilterCell.jsx %}
{% embed_file grid/add-operators-dropdown-for-custom-filtercell/sample-products.jsx %}
{% endmeta %}
