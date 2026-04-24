---
title: Exporting All Pages
description: 'Get started with the KendoKendoReact Data Grid which supports the export of all pages to PDF.'
components: ["datagrid"]
slug: allpages_pdfexport_grid
position: 30
subject: PDF Export feature of the Grid
---

# Exporting All Pages

You can export all pages of the Grid to PDF by configuring the [`pdf`]({% slug api_grid_gridprops %}#toc-pdf) property of the Grid component.

<CtaPanelOverview></CtaPanelOverview>

To export all pages of the KendoReact Data Grid, set the `data` property of the [`pdf`]({% slug api_grid_gridprops %}#toc-pdf) prop of the Grid.

> -   The export of all Grid pages requires all records, including the off-screen ones, to be rendered at once.
> -   The exact maximum number of exportable rows varies depending on the browser, system resources, template complexity, and other factors.
> -   Verify your own worst-case scenarios in each browser you intend to support.

{% meta height:420 %}
{% embed_file pdf-export-all-pages/func/app.tsx preview %}
{% embed_file pdf-export-all-pages/func/main.tsx %}
{% embed_file pdf-export-all-pages/func/products.js %}
{% endmeta %}

## Suggested Links

-   [PDF Export Known Limitations]({% slug limitations_pdfexport_grid %})
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
