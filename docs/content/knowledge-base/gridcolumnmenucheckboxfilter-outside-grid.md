---
title: Render the GridColumnMenuCheckBoxFilter component outside the Grid
description: An example on how to render the GridColumnMenuCheckBoxFilter component outside the Grid
type: how-to
page_title: GridColumnMenuCheckBoxFilter outside the Grid - KendoReact Grid
slug: grid-columnmenucheckboxfilter-outside-grid
tags: grid, columnmenu, checkboxfilter, outside grid
res_type: kb
category: knowledge-base
components: ["grid"]
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>6.1.1</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Grid</td>
		</tr>
	</tbody>
</table>

## Description

I want to render the GridColumnMenuCheckBoxFilter component as a standalone component without integrating it inside the KendoReact Grid.

## Solution

You can use the GridColumnMenuCheckboxFilter as a separate component for returning filter expressions. For using the GridColumnMenuCheckboxFilter, you will have to pass a "column" object with a "field" and the "data".

This is an example showcasing this approach where the filter expression is logged to the console:

{% meta height:700 %}
{% embed_file grid/checkboxfilter-outside-grid/app.jsx preview %}
{% embed_file grid/checkboxfilter-outside-grid/main.jsx %}
{% embed_file grid/checkboxfilter-outside-grid/columnMenu.jsx %}
{% endmeta %}
