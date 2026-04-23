---
title: Cells
description: 'Configure the cells that will be exported by the KendoReact Excel Export component in React projects.'
components: ["excelexport"]
slug: cells_excelexport
position: 2
---

# Cells

The Excel Export component supports options for customizing the cells that will be exported to Excel.

You can specify the options for the following types of cells:

-   [Header padding cells](#toc-header-padding-cells)
-   [Padding cells](#toc-padding-cells)
-   [Header cells](#toc-header-cells)
-   [Data cells](#toc-data-cells)
-   [Group header cells](#toc-group-header-cells)
-   [Group footer cells](#toc-group-footer-cells)
-   [Footer cells](#toc-footer-cells)

## Header Padding Cells

The header padding cells are the cells that are inserted before the header cells to align the headers and the column values when the data is grouped. To specify custom options, set the [`headerPaddingCellOptions`]({% slug api_excel-export_excelexportprops %}#toc-headerpaddingcelloptions) property of the `ExcelExport` component.

{% meta height:150 %}
{% embed_file cells/header-padding/func/app.tsx preview %}
{% embed_file cells/header-padding/func/main.tsx %}
{% endmeta %}

## Padding Cells

The padding cells are the cells that are inserted before the data, group, and footer cells to indicate the group hierarchy if the data is grouped. To specify custom options, set the [`paddingCellOptions`]({% slug api_excel-export_excelexportprops %}#toc-paddingcelloptions) property of the `ExcelExport` component.

{% meta height:150 %}
{% embed_file cells/padding/func/app.tsx preview %}
{% embed_file cells/padding/func/main.tsx %}
{% endmeta %}

## Header Cells

To specify custom options for a column-header cell, set the [`headerCellOptions`]({% slug api_excel-export_excelexportcolumnprops %}#toc-headercelloptions) property of the `ExcelExportColumn` or `ExcelExportColumnGroup` component.

{% meta height:150 %}
{% embed_file cells/header/func/app.tsx preview %}
{% embed_file cells/header/func/main.tsx %}
{% endmeta %}

## Data Cells

To specify custom options for a column data cell, set the [`cellOptions`]({% slug api_excel-export_excelexportcolumnprops %}#toc-celloptions) property of the `ExcelExportColumn` component.

{% meta height:150 %}
{% embed_file cells/data/func/app.tsx preview %}
{% embed_file cells/data/func/main.tsx %}
{% endmeta %}

## Group Header Cells

To specify custom options for a group header cell of a column, set the [`groupHeaderCellOptions`]({% slug api_excel-export_excelexportcolumnprops %}#toc-groupheadercelloptions) property of the `ExcelExportColumn` component.

{% meta height:150 %}
{% embed_file cells/group-header/func/app.tsx preview %}
{% embed_file cells/group-header/func/main.tsx %}
{% endmeta %}

## Group Footer Cells

To specify custom options for a group footer cell of a column, set the [`groupFooterCellOptions`]({% slug api_excel-export_excelexportcolumnprops %}#toc-groupfootercelloptions) property of the `ExcelExportColumn` component.

{% meta height:150 %}
{% embed_file cells/group-footer/func/app.tsx preview %}
{% embed_file cells/group-footer/func/main.tsx %}
{% endmeta %}

## Footer Cells

To specify custom options for a column footer cell, set the [`footerCellOptions`]({% slug api_excel-export_excelexportcolumnprops %}#toc-footercelloptions) property of the `ExcelExportColumn` component.

{% meta height:150 %}
{% embed_file cells/footer/func/app.tsx preview %}
{% embed_file cells/footer/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Excel Export](slug://overview_excelexport)
-   [API Reference of the Excel Export Component]({% slug api_excel-export_excelexport %})
