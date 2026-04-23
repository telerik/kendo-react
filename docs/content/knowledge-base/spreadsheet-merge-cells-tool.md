---
title: Create a custom merge cells tool
description: An example on how to create a custom tool that merges cells in the KendoReact Spreadsheet
type: how-to
page_title: Create a custom merge cells tool - KendoReact Spreadsheet
slug: spreadsheet-merge-cells-tool
tags: spreadsheet, merge, cells
ticketid: 1659845
res_type: kb
category: knowledge-base
components: ["spreadsheet"]
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
	    	<td>Progress® KendoReact Spreadsheet</td>
	    </tr>
    </tbody>
</table>

## Description

How can I create a custom tool that merges the selected cells in the KendoReact Spreadsheet?

## Solution

This can be achieved by adding a custom button, `MergeCellsButton`, to the tools array in the [toolbar]({% slug api_spreadsheet_spreadsheetprops %}#toc-toolbar) prop of the Spreadsheet. Inside the `MergeCellsButton`, use the Spreadsheet's ref to access the active sheet, retrieve the selected cells with the `selection` method, and then merge them using the `merge` method.

{% meta  height:500 %}
{% embed_file spreadsheet/spreadsheet-merge-cells-tool/app.jsx preview %}
{% embed_file spreadsheet/spreadsheet-merge-cells-tool/main.jsx %}
{% embed_file spreadsheet/spreadsheet-merge-cells-tool/sheets.js %}
{% endmeta %}
