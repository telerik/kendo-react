---
title: Conditional Cell Styling in ExcelExport
description: This article provides guidance on how to apply conditional cell styling based on specific data conditions within the ExcelExport
type: how-to
page_title: Applying Conditional Cell Styling in the ExcelExport Component
slug: excel-conditional-cell-styling
tags: excel-export, conditional-styling, cell-formatting
res_type: kb
category: knowledge-base
ticketid: 1633213
---

## Environment
<table>
    <tbody>
	    <tr> 
	    	<td>Product Version</td>
	    	<td>7.0.2</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>

## Description

I want to apply conditional cell styling in the ExcelExport component within my application. Specifically, I need to format cells as bold based on the presence of a `is_total` flag in the row data. However, the `is_total` flag should not be included in the exported Excel data.

## Solution

To achieve conditional cell styling in the ExcelExport, set a flag variable to the exported data and apply the required styles if the flag is set to `true`

{% meta id:index height:330 %}
{% embed_file excel/excel-conditional-styling.jsx preview %}
{% endmeta %}
