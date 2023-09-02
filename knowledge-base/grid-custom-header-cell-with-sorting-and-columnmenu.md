---
title: Implement custom headerCell in Grid with enabled sorting and columnMenu.
description: How to define custom headerCell in the Grid with enabled sorting and columnMenu
type: how-to
page_title: Use custom headerCell with enabled sorting and columnMenu - KendoReact Grid
slug: grid-custom-header-cell-with-sorting-and-columnmenu
tags: grid, kendoreact, columnmenu, sorting, headercell
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
I use custom headerCell for one of the Grid columns, but the sorting icon and the column menu are not visible. 

## Solution
Following is an example demonstrating the correct headerCell structure for rendering the sort and the columnMenu icons:

{% meta height:420 %}
{% embed_file grid/custom-header-cell-with-sorting-and-columnmenu/main.jsx preview %}
{% endmeta %}
