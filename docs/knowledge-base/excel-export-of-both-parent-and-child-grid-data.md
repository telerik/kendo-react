---
title: Export to Excel Both Parent and Child Grid Data
description: An example on how to export to Excel both parent and child KendoReact Grids.
type: how-to
page_title: Excel Export of Both Parent and Child Grid Data - KendoReact Grid
slug: excel-export-of-both-parent-and-child-grid-data
position:
tags: grid, export, excel
ticketid: 1424691
res_type: kb
category: knowledge-base
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>3.0.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>


## Description
I have a parent Grid with child Grids as details, how to export all to Excel.

## Solution
This requires using a chain of Promises to request the data for all child Grids and append it to the exported document after each parent row item.

This is an example showcasing this. The example contains comments for the most specific parts:

{% meta id:index height:760 %}
{% embed_file grid/excel-export-parent-child/app.jsx preview %}
{% embed_file grid/excel-export-parent-child/main.jsx %}
{% endmeta %}
