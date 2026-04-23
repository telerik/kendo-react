---
title: Columns
description: 'Configure the columns that will be exported by the Excel Export component in React projects.'
components: ["excelexport"]
slug: columns_excelexport
position: 2
---

# Columns

The Excel Export component supports options for customization of the columns that will be exported to Excel.

You can specify the following column options:

-   [Hidden state](#toc-hidden-state)
-   [Locked state](#toc-locked-state)
-   [Templates](#toc-templates)
-   [Multi-column headers](#toc-multi-column-headers)

## Hidden State

To hide a particular column from the exported file, use the [`hidden`]({% slug api_excel-export_excelexportcolumnprops %}#toc-hidden) column configuration.

> To hide a particular columns from the exported file, you can also use [`conditional rendering`](https://react.dev/learn/conditional-rendering#conditionally-returning-jsx).

{% meta height:150 %}
{% embed_file columns/hidden/func/app.tsx preview %}
{% embed_file columns/hidden/func/main.tsx %}
{% endmeta %}

## Locked State

The Excel Export enables you to lock columns by using the [`locked`]({% slug api_excel-export_excelexportcolumnprops %}#toc-locked) property of the columns. As a result, you can display specific columns at all times while the user scrolls the Excel file.

{% meta height:150 %}
{% embed_file columns/locked/func/app.tsx preview %}
{% embed_file columns/locked/func/main.tsx %}
{% endmeta %}

## Templates

The Excel Export supports templates that you can use for customizing the group and footer elements.

> The templates must return text content. HTML elements cannot be converted to Excel column values.

### Group Header Template

You can use the group header template to customize the header rows of the groups. To use a custom template set the [`groupHeader`]({% slug api_excel-export_excelexportcolumnprops %}#toc-groupheader) property to a Function or a React Component extending [`ExcelExportHeaderGroup`]({% slug api_excel-export_excelexportgroupheader %}).

The following additional fields are passed as props to the component, or through arguments to the function:

-   `group`&mdash;The current group item.
-   `field`&mdash;The name of the field by which data is grouped.
-   `value`&mdash;The current group value.
-   `aggregates`&mdash;All aggregate values for the current group.

> If a template is not specified, the group header content is set to `" { title / field }: { value }"`.

{% meta height:150 %}
{% embed_file columns/group-header/func/app.tsx preview %}
{% embed_file columns/group-header/func/main.tsx %}
{% endmeta %}

### Group Footer Template

You can use the group footer template to customize the footer rows of the groups. To use a custom template set the [`groupFooter`]({% slug api_excel-export_excelexportcolumnprops %}#toc-groupfooter) property to a Function or a React Component extending [`ExcelExportFooterGroup`]({% slug api_excel-export_excelexportgroupfooter %}).

The following additional fields are passed as props to the component, or through arguments to the function:

-   `column`&mdash;Defines an object of type [`ExcelExportColumnProps`]({% slug api_excel-export_excelexportcolumnprops %}).
-   `field`&mdash;The current column field name.
-   `group`&mdash;The current group data item.
-   `aggregates`&mdash;All aggregate values for the current group.

> If a template is not specified for any of the columns, the exported Excel file will not render a group footer row.

{% meta height:150 %}
{% embed_file columns/group-footer/func/app.tsx preview %}
{% embed_file columns/group-footer/func/main.tsx %}
{% endmeta %}

### Footer Template

You can use the footer template to customize the column footer. To use a custom template set the [`footer`]({% slug api_excel-export_excelexportcolumnprops %}#toc-footer) property to a Function or a React Component extending [`ExcelExportFooter`]({% slug api_excel-export_excelexportfooter %}).

The following additional fields are passed as props to the component, or through arguments to the function:

-   `column`&mdash;Defines an object of type [`ExcelExportColumnProps`]({% slug api_excel-export_excelexportcolumnprops %}).
-   `columnIndex`&mdash;Defines the current column index.

> If a template is not specified for any of the columns, the exported Excel file will not render a footer row.

{% meta height:150 %}
{% embed_file columns/footer/func/app.tsx preview %}
{% embed_file columns/footer/func/main.tsx %}
{% endmeta %}

## Multi-Column Headers

The Excel Export supports multi-column headers by using column groups, which are defined declaratively by using the [`ExcelExportColumnGroup`]({% slug api_excel-export_excelexportcolumngroup %}) components, that incorporate inner column structures.

{% meta height:150 %}
{% embed_file columns/multi/func/app.tsx preview %}
{% embed_file columns/multi/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Excel Export](slug://overview_excelexport)
-   [API Reference of the Excel Export Component]({% slug api_excel-export_excelexport %})
