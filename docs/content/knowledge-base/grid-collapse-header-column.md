---
title: Collapse Header Column in Grid
description: An example on how to collapse the columns inside the Grid header.
type: how-to
page_title: Collapse Header Column in Grid | KendoReact Chart
slug: collapse-header-column-in-grid
tags: grid, header, collapse, column
ticketid: 1573785
res_type: kb
category: knowledge-base
components: ["grid"]
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>8.2.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Grid</td>
		</tr>
	</tbody>
</table>

## Description

How can I collapse the columns inside the Grid header?

![Grid Collapse Header Columns](examples/grid/collapse-header-column/grid-collapse-header-columns.gif)

## Solution

This can be achieved by toggling a flag variable in the state that will determine whether or not the nested columns will render.

{% meta height:560 %}
{% embed_file grid/collapse-header-column/app.jsx preview %}
{% embed_file grid/collapse-header-column/main.jsx %}
{% embed_file grid/collapse-header-column/products.json %}
{% endmeta %}
