---
title: Lazy Loading
description: 'Get started with the KendoKendoReact Data Grid which supports lazy loading for PDF export.'
components: ["datagrid"]
slug: lazy_loading_pdfexport_grid
position: 70
subject: PDF Export feature of the Grid
---

# Lazy Loading

The [`GridPDFExport`]({% slug api_pdf_gridpdfexport %}) component enables you to dynamically import the PDF export component only when it is needed.

<CtaPanelOverview></CtaPanelOverview>

The `handlePdfExport` method demonstrates a lazy-loading approach for the PDF export functionality. It dynamically imports the [`saveGridPDF`]({% slug api_pdf_savegridpdf %}) method from the `@progress/kendo-react-pdf` package only when the export action is triggered. This reduces the initial bundle size and improves application performance by loading the PDF export module on demand.

{% meta height:515 %}
{% embed_file pdf-export-lazy/func/PDFExport.tsx %}
{% embed_file pdf-export-lazy/func/app.tsx preview %}
{% embed_file pdf-export-lazy/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [PDF Export Known Limitations]({% slug limitations_pdfexport_grid %})
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
