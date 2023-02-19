---
title: Restrict the Number of Selected Items in the MultiSelect
description: An example on how to restrict the number of selected items in a KendoReact MultiSelect.
type: how-to
page_title: Restrict the Number of Selected Items in the MultiSelect - KendoReact MultiSelect
slug: multiselect-select-all-checkbox
tags: multiselect, kendoreact, selection
ticketid: 1547156
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>4.13.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>


## Description

How to restrict the number of selected items in a KendoReact MultiSelect?

## Solution

This can be achieved by using the slice method and passing the number of items we wish to limit as an argument:

{% meta id:index height:760 %}
{% embed_file multiselect/multiselect-set-maximum-selection/main.jsx preview %}
{% endmeta %}