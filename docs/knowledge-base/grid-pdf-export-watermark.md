---
title: Export Grid Data With Watermark
description: An example on how to export to PDF the Grid data with a watermark
type: how-to
page_title: Export Grid Data With Watermark - KendoReact Grid
slug: grid-pdf-export-watermark
position:
tags: grid, export, PDF, watermark
ticketid: 1580886
res_type: kb
category: knowledge-base
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
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>

## Description
I want my exported PDF document to have a watermark.

## Solution
This can be achieved by using the drawDom and exportPDF from the @progress/kendo-drawing package and then passing a template.

This is an example showcasing this approach:

{% meta id:index height:500 %}
{% embed_file grid/grid-pdf-export-with-watermark/app.jsx preview %}
{% embed_file grid/grid-pdf-export-with-watermark/main.jsx %}
{% embed_file grid/grid-pdf-export-with-watermark/products.json %}
{% endmeta %}