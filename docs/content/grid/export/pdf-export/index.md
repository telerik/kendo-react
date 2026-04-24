---
title: Basics
description: 'Get started with the KendoKendoReact Data Grid which supports the export of content to PDF.'
components: ["datagrid"]
slug: overview_pdfexport_grid
position: 0
subject: PDF Export feature of the Grid
---

# PDF Export Basics

The [`pdf`]({% slug api_grid_gridprops %}#toc-pdf) property of the Grid component enables you to export the content of the KendoReact Data Grid to PDF, offering various configuration options for customizing the export process.

<CtaPanelOverview></CtaPanelOverview>

## Getting Started

To enable the PDF export, set the Grid [`pdf`]({% slug api_grid_gridprops %}#toc-pdf) prop to `true` or provide a [`GridProps`]({% slug api_grid_gridprops %}) configuration. Then handle the [`onPdfExport`]({% slug api_grid_gridprops %}#toc-onpdfexport) event to perform a smooth asynchronous export using the [`saveGridPDF`]({% slug api_pdf_savegridpdf %}) function from the `@progress/kendo-react-pdf` package.

{% meta height:560 %}
{% embed_file pdf-export/func/app.tsx preview %}
{% embed_file pdf-export/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [PDF Export Known Limitations]({% slug limitations_pdfexport_grid %})
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
