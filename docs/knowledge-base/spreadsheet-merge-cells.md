---
title: Merge Cells with a Custom Tool
description: An example on how to merge the cells of the KendoReact Spreadsheet with a custom tool
type: how-to
page_title: Merge Cells with a Custom Tool - KendoReact
slug: spreadsheet-merge-cells
tags: spreadsheet, merge cells, merge, custom tool
ticketid: 1659845
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>8.3.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>

## Description

I want to merge the cells of a spreadsheet using a custom tool.

## Solution

To merge cells in a KendoReact Spreadsheet, first create a custom `MergeCellsButton` component and pass it to the [toolbar]({% slug api_spreadsheet_spreadsheetprops %}#toc-toolbar) prop of the Spreadsheet component. Inside `MergeCellsButton`, use the `spreadsheetRef` to access the spreadsheet instance. From this instance, retrieve the currently active sheet using the `activeSheet()` method. Then, get the selected cell range using the `selection()` method, pass it to `range()` to define the cells, and call `merge()` to combine them. This functionality is triggered when the `MergeCellsButton` is clicked.

{% meta id height:540 %}
{% embed_file spreadsheet/merge-cells/app.jsx preview %}
{% embed_file spreadsheet/merge-cells/main.jsx %}
{% embed_file spreadsheet/sheets.js %}
{% endmeta %}
