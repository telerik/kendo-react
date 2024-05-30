---
title: Hide the DropDownList with the operators in the columnMenu of the Grid
description: An example on how to show only the filter in the column menu of the Grid without the filter operators.
type: how-to
page_title: Hide The Operators DropDownList From GridColumnMenuFilter In The Column Menu - KendoReact Grid
slug: grid-columnmenu-filter-without-operators
tags: grid, kendoreact, columnmenu, filtering, operators
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
 
I want to display columnMenu in the Grid columns without the DropDown for changing the operators. Can I achieve this without a custom filter and re-use the filter input?

## Solution 

Wrap the GridColumnMenuFilter in a DIV element with specific className and use that class name as a selector to hide all elements within the DIV with ".k-dropdownlist" class.

Following is an example demonstrating this approach

{% meta id:index height:360 %} 
{% embed_file grid/grid-columnmenu-filter-without-operators/app.jsx preview %}
{% embed_file grid/grid-columnmenu-filter-without-operators/main.jsx %}
{% embed_file grid/grid-columnmenu-filter-without-operators/columnMenu.jsx %}
{% embed_file grid/grid-columnmenu-filter-without-operators/styles.css.jsx %}
{% endmeta %}