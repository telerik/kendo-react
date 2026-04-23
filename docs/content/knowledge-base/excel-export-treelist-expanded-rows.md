---
title: Export Expanded Rows Data from TreeList to Excel
description: An example of exporting the expanded rows of a TreeList to Excel without needing to expand them manually.
type: how-to
page_title: Export Expanded Rows Data from TreeList to Excel - KendoReact TreeList
slug: excel-export-treelist-expanded-rows
tags: export, excel, treelist, expand
ticketid: 1666953
res_type: kb
category: knowledge-base
components: ["treelist"]
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
	    	<td>Progress® KendoReact TreeList</td>
	    </tr>
    </tbody>
</table>

## Description

Currently, I need to manually expand the rows to include the child rows in the exported Excel file. How can I have the rows automatically expand for the `ExcelExport` when exporting?

## Solution

This can be achieved by using the [mapTree]({% slug api_common_maptree %}#mapTree) function to expand the TreeList rows and then passing the data to the `ExcelExport`.

{% meta height:760 %}
{% embed_file treelist/excel-export-treelist-expanded-rows/app.tsx preview %}
{% embed_file treelist/excel-export-treelist-expanded-rows/main.tsx %}
{% embed_file treelist/excel-export-treelist-expanded-rows/shared-tl-data.ts %}
{% embed_file treelist/excel-export-treelist-expanded-rows/shared-tl-interfaces.ts %}
{% endmeta %}
