---
title: Set different row colors for each level of the TreeList items
description: An example on how to set different color per level for the KendoReact TreeList.
type: how-to
page_title: Change the row colors based on the level - KendoReact TreeList
slug: treelist-different-row-color-per-level
tags: treelist, kendoreact, rows, color 
ticketid: 
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>5.09.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>

## Description
I want to have different colors for the TreeList rows based on the level of the data item.

## Solution
For achieving the desired result the rowRender of the TreeList can used for setting custom backgroundColor for each TR element based on the "level" value of the TreeListRowProps 

Following is an example demonstrating such implementation

{% meta id height:580 %} 
{% embed_file treelist/different-row-color-per-level/main.jsx preview %}
{% embed_file treelist/different-row-color-per-level/data.js %}
{% endmeta %}
