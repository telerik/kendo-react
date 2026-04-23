---
title: Include an image in the exported file
description: Learn how to include an image in the exported file from the ExcelExport component
type: how-to
page_title: Include an image in the exported file - KendoReact ExcelExport
slug: excel-export-image
tags: excel, export, image
res_type: kb
category: knowledge-base
components: ["excelexport"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>11.3.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact ExcelExport</td>
	    </tr>
    </tbody>
</table>

## Description

I want to include image in the exported file from the `ExcelExport` component.

## Solution

The workbook of the exported file supports adding images, but they must be loaded in the browser and added to the images collection of the workbook options. To display an image from the images collection, add the position and the dimension of the image within the drawings object of the workbook.

{% meta height:230 %}
{% embed_file excel/excel-export-image/app.tsx preview %}
{% embed_file excel/excel-export-image/main.tsx %}
{% endmeta %}

## See Also

- [ExcelExport Overview]({% slug overview_excelexport %})
- [ExcelExport API Reference]({% slug api_excel-export_excelexport %})
