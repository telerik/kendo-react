---
title: Data Import and Export
description: 'See how to import and export data in the KendoReact Spreadsheet in React projects.'
components: ["spreadsheet"]
slug: import_export_spreadsheet
position: 30
---

# Data Import and Export

The KendoReact Spreadsheet allows you to store and load data in a native JSON format. You can also export and import `.xlsx` files directly in the component.

## Binding to JSON data

You can pass the desired JSON data to the [`sheets`]({% slug api_spreadsheet_spreadsheetprops %}) of the [`defaultProps`]({% slug api_spreadsheet_spreadsheetoptions %}) of the Spreadsheet.

The information that must persist when you pass an array to [`SheetDescriptor`]({% slug api_spreadsheet_sheetdescriptor %}) includes:

-   Cell formulas, values, formatting, and styling.
-   Row height and column width.
-   Active sheet and selection.

In the following sample, you can see a sample JSON data loaded in the Spreadsheet (the `products.ts` file) and examine the exact format expected by the component:

{% meta height:740 %}
{% embed_file bind-to-json/func/app.tsx preview %}
{% embed_file bind-to-json/func/main.tsx %}
{% endmeta %}

## Using the JSON Serialization API

The Spreadsheet also exposes [`fromJSON`]({% slug api_spreadsheet_spreadsheethandle %}#toc-fromjson) and [`toJSON`]({% slug api_spreadsheet_spreadsheethandle %}#toc-tojson) methods for loading and storing its state. To load the Spreadsheet with data, pass an object matching the required schema to `fromJSON`. This resets the component and clears all existing data.

The [`saveJSON`]({% slug api_spreadsheet_spreadsheethandle %}#toc-savejson) method serializes the workbook. This method does not return the JSON, but a `Promise` object which will yield the JSON data when it is available. The method is functionally similar to `toJSON`, but it can also save the embedded images.

{% meta height:800 %}
{% embed_file from-to-json/func/app.tsx preview %}
{% embed_file from-to-json/func/main.tsx %}
{% endmeta %}

## Export to Excel

The Spreadsheet utilizes the [Excel Export]({% slug overview_excelexport %}) component to produce Excel files directly in the browser.

The output files are in the OOXML Spreadsheet format with an `.xlsx` extension. The legacy XLS binary format is not supported.

The Spreadsheet allows you to export the current document to Excel both through its toolbar and by calling its [`saveAsExcel`]({% slug api_spreadsheet_spreadsheethandle %}#toc-saveasexcel) method for initiating the export programmatically. The exported file uses the name set to the `excel` [`SpreadsheetOption`]({% slug api_spreadsheet_spreadsheetoptions %}).

{% meta height:740 %}
{% embed_file export-to-excel/func/app.tsx preview %}
{% embed_file export-to-excel/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the KendoReact Spreadsheet]({% slug api_spreadsheet %})
