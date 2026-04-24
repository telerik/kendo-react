---
title: Export Multiple Grids to Excel
description: An example on how to export multiple KendoReact Grids to a single Excel file.
type: how-to
page_title: Export Multiple Grids to Excel - KendoReact Grid
slug: export-to-excel-multiple-grids
tags: kendoreact, export, multiple, grids, excel
ticketid: 1408161
res_type: kb
category: knowledge-base
components: ["grid"]
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>9.0.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Grid</td>
		</tr>
	</tbody>
</table>
## Description

How can I export multiple KendoReact Grids (tables) upon a single click action?

## Solution

Set the second Grid sheet as the second sheet of the first document and export only the first Grid.

{% meta height:760 %}
{% embed_file grid/multiple-grid-export-excel/app.tsx preview %}
{% embed_file grid/multiple-grid-export-excel/main.tsx %}
{% endmeta %}
