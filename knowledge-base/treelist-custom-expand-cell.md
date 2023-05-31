---
title: Define custom expand/collapse cell for the TreeList
description: An example on how to define custom cell for expanding and collapsing child nodes for the TreeList.
type: how-to
page_title: Defining custom expand/collapse cell - KendoReact TreeList
slug: treelist-custom-expand-cell
tags: treelist, kendoreact, custom, cell
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
I want to define custom cell for the first column and I need the expand/collapse functionality 

## Solution
For achieving the desired result the custom cell should include logic for rendering the expand/collapse icon based on the props.dataItem.SUB_ITEM_FIELD length, props.expanded value and the level of the current cell. The level length is used for the empty space (based on the current level)

{% meta id height:760 %}
{% embed_file treelist/treelist-custom-expand-cell/main.jsx preview %}
{% embed_file treelist/treelist-custom-expand-cell/data.js preview %}
{% endmeta %}
