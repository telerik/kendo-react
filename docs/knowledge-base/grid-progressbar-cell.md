---
title: Add ProgressBar to Grid cell
description: An example on how to display a progress bar in KendoReact Grid cell
type: how-to
page_title: Add ProgressBar cell to the Grid  - KendoReact Grid
slug: grid-progressbar-cell
position:
tags: grid, cell, progressbar, customization
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
I want to add ProgressBar component as a custom cell in the Grid.

## Solution
This can be achieved by defining custom cell for the column and rendering a ProgressBar component with the value from the data item for that column. For using the ProgressBar the @progress/kendo-react-progressbars package must be included.

This is an example showcasing this approach:

{% meta id:index height:500 %}
{% embed_file grid/grid-progressbar-cell/app.jsx preview %}
{% embed_file grid/grid-progressbar-cell/main.jsx %}
{% embed_file grid/grid-progressbar-cell/products.json %}
{% endmeta %}