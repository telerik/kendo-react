---
title: Workbook Customization
description: 'Customize a specific cell or row when working with the KendoReact Excel Export component in React projects.'
components: ["excelexport"]
slug: workbook_excelexport
position: 3
---

# Workbook Customization

In some cases, the customization of all cells in a column might not be sufficient to achieve the results your project requires.

To customize a specific row or cell:

1. Get the generated `options` through the [`workbookOptions`]({% slug api_excel-export_excelexport %}#toc-workbookoptions) method.
2. Modify them according to your needs.
3. Save the file by using the exporter [`save`]({% slug api_excel-export_excelexport %}#toc-save) method.

The following example demonstrates how to set the color for alternating rows.

{% meta height:150 %}
{% embed_file workbook/func/app.tsx preview %}
{% embed_file workbook/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Excel Export](slug://overview_excelexport)
-   [API Reference of the Excel Export Component]({% slug api_excel-export_excelexport %})
