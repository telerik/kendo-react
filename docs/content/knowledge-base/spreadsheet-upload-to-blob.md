---
title: Exporting Spreadsheet Data as Excel Blob in React
description: Learn how to export and handle Spreadsheet data as an Excel Blob for further processing or uploading in React applications.
type: how-to
page_title: How to Handle Spreadsheet Data as Excel Blob in React
slug: spreadsheet-upload-to-blob
tags: button, react, spreadsheet, excel, blob, export, upload
res_type: kb
ticketid: 1655496
components: ["spreadsheet"]
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
	    	<td>Progress® KendoReact Spreadsheet</td>
	    </tr>
    </tbody>
</table>

## Description

In React applications, handling Spreadsheet data involves exporting it as an Excel file or obtaining it as a Blob for further actions such as printing, exporting, or uploading. This KB article also answers the following questions:

-   How to load an Excel file into the Spreadsheet component in React?
-   How to export Spreadsheet data as an Excel Blob?
-   How to upload Spreadsheet data after exporting it as a file?

## Solution

To load an Excel file into the Spreadsheet, use the `fromFile` method, which accepts a `Blob` or a `File` object. For example, you can load a file dropped over a drag-and-drop upload zone directly into the Spreadsheet.

In the following sample you can see how to load a file Dropped over a drag-and-drop-upload zone directly in the Spreadsheet:

{% meta  height:980 %}
{% embed_file spreadsheet/upload-to-blob/app.jsx preview %}
{% embed_file spreadsheet/upload-to-blob/main.jsx %}
{% embed_file spreadsheet/upload-to-blob/basic-data.ts %}
{% endmeta %}

## See Also

-   [KendoReact Spreadsheet fromFile Method Documentation](https://www.telerik.com/kendo-react-ui/components/spreadsheet/api/SpreadsheetHandle/#toc-fromfile)
