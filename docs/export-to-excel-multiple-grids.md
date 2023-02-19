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
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description

How can I export multiple KendoReact Grids (tables) upon a single click action?

## Solution

Set the second Grid sheet as the second sheet of the first document and export only the first Grid.

{% meta id:index height:760 %}
{% embed_file grid/multiple-grid-export-excel/main.jsx preview %}
{% embed_file shared/products.json %}
{% endmeta %}