---
title: Excel Export
description: 'Get started with the KendoKendoReact Data Grid which supports the export of data to Excel.'
components: ["datagrid"]
slug: overview_excel-export_grid
position: 40
tier: premium
subject: Excel Export feature of the Grid
---

# KendoReact Data Grid Excel Export Overview

The KendoReact Data Grid provides you the option to export its data to excel by utilizing the KendoReact [Excel Export library]({% slug overview_excelexport %}).

<div data-component="StartKendoReactFreeSection"></div>

## The KendoReact Data Grid Excel Export in Action

The following example demonstrates the basic implementation of the Excel export functionality of the Grid.

{% meta height:490 %}
{% embed_file excel/basic/func/app.tsx preview %}
{% embed_file excel/basic/func/main.tsx %}
{% endmeta %}

## Getting Started with the KendoReact Data Grid Excel Export

To enable the Excel export:

1. Install `kendo-react-excel-export` package.

    ```sh-no-run
    npm i @progress/kendo-react-excel-export
    ```

1. Import the ExcelExport component in your React Application.

    ```jsx-no-run
    import { ExcelExport } from '@progress/kendo-react-excel-export';
    ```

1. Wrap the Grid in the ExcelExport component and use the ExcelExport `save` function to export the Grid and save it to excel file.

## Configuration

You can entirely control the Excel export configuration through the arguments that are passed to the [`save`]({% slug api_excel-export_excelexport %}#toc-save) function of the KendoReact Excel Export component.

The ExcelExport enables you to:

-   [Wrap the Grid in an ExcelExport component](#toc-wrapping-the-grid)
-   [Pass the Grid columns to the ExcelExport component](#toc-passing-the-grid-columns)
-   [Export specific data](#toc-exporting-specific-data)
-   [Customize the exported columns of the Grid](#toc-customizing-exported-columns)

### Wrapping the Grid

If the Grid is passed as a child to the ExcelExport and its columns are defined declaratively by using the `GridColumn` components, they will be automatically detected. You still need to pass the data of the Grid to the [`save`]({% slug api_excel-export_excelexport %}#toc-save) function or as a [`data`]({% slug api_excel-export_excelexportprops %}#toc-data) property to the ExcelExport component.

{% meta height:490 %}
{% embed_file excel/wrapped/func/app.tsx preview %}
{% embed_file excel/wrapped/func/main.tsx %}
{% endmeta %}

### Passing the Grid Columns

The Grid exposes its columns through its [`columns`]({% slug api_grid_gridprops %}#toc-columns) field. To pass the Grid columns, pass its data and columns to the [`save`]({% slug api_excel-export_excelexport %}#toc-save) function of the ExcelExport component.

{% meta height:490 %}
{% embed_file excel/passed-columns/func/app.tsx preview %}
{% embed_file excel/passed-columns/func/main.tsx %}
{% endmeta %}

### Exporting Specific Data

To export specific data, pass the data to the [`save`]({% slug api_excel-export_excelexport %}#toc-save) function of the ExcelExport component. For example, if the Grid has its paging enabled but you need to export all pages, pass the unprocessed data to the `save` function.

{% meta height:620 %}
{% embed_file excel/specific-data/func/app.tsx preview %}
{% embed_file excel/specific-data/func/main.tsx %}
{% endmeta %}

### Customizing Exported Columns

You can use the same data as the Grid and customize the exported columns. To export columns that are different from the current Grid columns, include the [`ExcelExportColumn`]({% slug api_excel-export_excelexportcolumn %}) and [`ExcelExportColumnGroup`]({% slug api_excel-export_excelexportcolumngroup %}) components as children to the ExcelExport.

{% meta height:490 %}
{% embed_file excel/customize-columns/func/app.tsx preview %}
{% embed_file excel/customize-columns/func/main.tsx %}
{% endmeta %}

## Known Limitations

-   During the export to Excel, the Grid does not use column formats. Column formats are incompatible with Excel. For more information, refer to the page on the [Excel-supported formats](https://support.office.com/en-us/article/Create-or-delete-a-custom-number-format-78f2a361-936b-4c03-8772-09fab54be7f4?ui=en-US&rs=en-US&ad=US).
-   The maximum size of the exported file to Excel has a system-specific limit. For large data sets, it is highly recommended that you use a server-side solution.
-   When you use the ExcelExport in older browsers, such as Internet Explorer 9 and Safari, you have to implement a server proxy using the [`proxyUrl`]({% slug api_excel-export_excelexportprops %}#toc-proxyurl) property of the ExcelExport component. You can refer to [this Knowledge Base article](https://www.telerik.com/kendo-react-ui/components/knowledge-base/pdfexport-setup-proxy/) for an example.

## Suggested Links

-   [API Reference of the Excel Export Component]({% slug api_excel-export_excelexport %})
