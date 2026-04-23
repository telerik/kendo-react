---
title: Customizing Exported Columns
description: 'Get started with the KendoKendoReact Data Grid which supports the customization of columns that will be exported.'
components: ["datagrid"]
slug: customcolumns_pdfexport_grid
position: 40
subject: PDF Export feature of the Grid
---

# Customizing Exported Columns

The [`pdf`]({% slug api_grid_gridprops %}#toc-pdf) property allows you to define which columns of the KendoReact Data Grid are included in the exported PDF by setting either the `defaultColumnState` or `columnState` options.

<CtaPanelOverview></CtaPanelOverview>

In the example below, the `CategoryName` and `UnitPrice` columns are displayed in the browser but are excluded from the exported PDF document.

{% meta height:510 %}
{% embed_file pdf-export-custom-columns/func/app.tsx preview %}
{% embed_file pdf-export-custom-columns/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [PDF Export Known Limitations]({% slug limitations_pdfexport_grid %})
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
