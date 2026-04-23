---
title: Export to Excel Grid Reordered Columns
description: An example on how to export to Excel the Grid columns after they have been reordered.
type: how-to
page_title: Export to Excel Grid Reordered Columns - KendoReact Grid
slug: excel-export-with-column-reorder
position:
tags: grid, export, excel
ticketid: 1580886
res_type: kb
category: knowledge-base
components: ["grid"]
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>5.5.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Grid</td>
		</tr>
	</tbody>
</table>

## Description

I want to maintain the column orders when I export the Grid to Excel, how can I achieve this?

## Solution

This requires setting the columns inside the ExcelExport, then sorting and updating the gridColumns inside the onColumnReorder event.

This is an example showcasing this approach:

{% meta height:600 %}
{% embed_file grid/excel-export-with-column-reorder/app.jsx preview %}
{% embed_file grid/excel-export-with-column-reorder/main.jsx %}
{% embed_file grid/excel-export-with-column-reorder/products.json %}
{% endmeta %}
