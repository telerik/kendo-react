---
title: Remove the "Select all" checkbox in the Grid's header for checkbox selection
description: An example on how to remove the "Select all" checkbox in the header
type: how-to
page_title: Remove the "Select all" checkbox in the header  - KendoReact Grid
slug: grid-remove-select-all
position:
tags: grid, selection, checkbox
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
I want to remote the "Select all" checkbox in the Grid's header when using checkbox selection

## Solution
Handle the "headerCellRender" of the Grid to customize the header cells and if the "props.field" is the select field, return an empty TD element with the default properties only. For all of the other fields, return the default TD element.

This is an example showcasing this approach:

{% meta id:index height:500 %}
{% embed_file grid/remove-select-all/main.jsx preview %}
{% embed_file grid/remove-select-all/products.json %}
{% endmeta %}