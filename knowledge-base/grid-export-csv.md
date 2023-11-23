---
title: Export Grid data to a CSV format
description: An example on how to export the Grid data to a CSV format
type: how-to
page_title: Grid CSV Export - KendoReact Grid
slug: grid-csv-export
tags: grid, csv, export
res_type: kb
category: knowledge-base
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
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>

## Description
I want to export the Grid data to a CSV format. Currently, the Grid does not have built-in functionality to achieve this.

## Solution
You can export the Grid data to a CSV format using the [react-csv](https://www.npmjs.com/package/react-csv) library or a similar one which downloads the json data to CSV.

This is an example showcasing this approach:

{% meta id:index height:700 %}
{% embed_file grid/grid-csv-export/main.jsx preview %}
{% embed_file shared/products.json %} 
{% endmeta %}