---
title: Change the GridColumnMenuCheckboxFilter operator to contains
description: An example on how to use the GridColumnMenuCheckboxFilter with contains operator
type: how-to
page_title: Change GridColumnMenuCheckboxFilter Operator To Contains - KendoReact Grid
slug: grid-columnmenucheckboxfilter-with-contains
tags: grid, kendoreact, columnmenu, checkboxfilter, contains
ticketid: 
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>5.14.1</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>


## Description

Can I change the filter operator for the GridColumnMenuCheckboxFilter to contains?

## Solution

### Using HTML canvas measureText()

By default the GridColumnMenuCheckboxFilter will use "eq" operator. To change the operator locate the filter descriptor within the onDataStateChange event by using the field name of the column and replace the added operator to "contains"

Following is an example demonstrating this approach:

{% meta id:index height:520 %}
{% embed_file grid/grid-columnmenucheckboxfilter-with-contains/app.jsx preview %}
{% embed_file grid/grid-columnmenucheckboxfilter-with-contains/main.jsx %}
{% embed_file grid/grid-columnmenucheckboxfilter-with-contains/columnMenu.jsx %}
{% embed_file shared/shared-products.json %}
{% endmeta %}
