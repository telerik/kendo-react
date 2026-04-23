---
title: Excel Export
description: 'Get started with the KendoReact TreeList which supports the export of data to Excel.'
components: ["treelist"]
slug: overview_excelexport_treelist
position: 100
---

# Excel Export

The KendoReact TreeList provides options for exporting its data to Excel in hierarchical tree format.

## Getting Started

To enable the Excel export:

1. Install `kendo-react-excel-export` package.

    ```sh-no-run
    npm i @progress/kendo-react-excel-export @progress/kendo-licensing
    ```

1. Import the ExcelExport component in your React Application.

    ```jsx-no-run
    import { ExcelExport } from '@progress/kendo-react-excel-export';
    ```

1. Wrap the TreeList inside an ExcelExport component.

1. Set the [hierarchy]({% slug api_excel-export_excelexportprops %}#toc-hierarchy) prop of the ExcelExport to true.

1. Transform the data to a flat array with a level for each data record, using the [treeToFlat]({% slug api_treelist_treetoflat %}) function provided by the TreeList package.

1. Pass the flat array and columns that have to be exported to the [`save`]({% slug api_excel-export_excelexport %}#toc-save) function.

The following example demonstrates the basic implementation of the Excel export functionality of the TreeList.

{% meta height:590 %}
{% embed_file excel/basic/func/app.tsx preview %}
{% embed_file excel/basic/func/main.tsx %}
{% endmeta %}

## Configuration

You can entirely control the Excel export configuration through the arguments that are passed to the [`save`]({% slug api_excel-export_excelexport %}#toc-save) function of the KendoReact Excel Export component.

The ExcelExport enables you to:

-   [Export specific data](#toc-exporting-specific-data)
-   [Customizing Exported Workbook](#toc-customizing-exported-workbook)

### Exporting Specific Data

To export specific data, pass the data to the [`save`]({% slug api_excel-export_excelexport %}#toc-save) function of the ExcelExport component. For example, if the TreeList has its paging enabled but you need to export only the current page, pass the paged data to the `save` function.

{% meta height:570 %}
{% embed_file excel/single-page/func/app.tsx preview %}
{% embed_file excel/single-page/func/main.tsx %}
{% endmeta %}

### Customizing Exported Workbook

When exporting the excel file we provide an option to customize the generated workbook. This can be used to modify the values, the appearance or the sheets in the document.
The following example demonstrates how to add a different background color on the alt rows.

{% meta height:590 %}
{% embed_file excel/customization/func/app.tsx preview %}
{% embed_file excel/customization/func/main.tsx %}
{% endmeta %}

## Known Limitations

-   During the export to Excel, the TreeList does not use column formats. Column formats are incompatible with Excel. For more information, refer to the page on the [Excel-supported formats](https://support.office.com/en-us/article/Create-or-delete-a-custom-number-format-78f2a361-936b-4c03-8772-09fab54be7f4?ui=en-US&rs=en-US&ad=US).
-   The maximum size of the exported file to Excel has a system-specific limit. For large data sets, it is highly recommended that you use a server-side solution.
-   When you use the ExcelExport in older browsers, such as Internet Explorer 9 and Safari, you have to implement a server proxy. For more information, refer to the [`proxyUrl`]({% slug api_excel-export_excelexportprops %}#toc-proxyurl) configuration of the ExcelExport component.

## Suggested Links

-   [ExcelExport Overview]({% slug overview_excelexport %})
-   [API Reference of the TreeList Component]({% slug api_treelist_treelist %})
