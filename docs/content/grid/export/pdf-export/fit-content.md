---
title: Fitting Content to Paper Size
description: 'Get started with the KendoKendoReact Data Grid enabling you to fit the content to paper size when exporting to PDF.'
components: ["datagrid"]
slug: fitcontent_pdfexport_grid
position: 20
subject: PDF Export feature of the Grid
---

# Fitting Content to Paper Size

The [`saveGridPDF`]({% slug api_pdf_savegridpdf %}) method from the `@progress/kendo-react-pdf` package lets you scale the KendoReact Data Grid content when you export it to PDF.

By default, the Grid size on screen sets the paper size of your PDF. You can pick a specific paper size for the whole document instead. This makes the content scale to fit your chosen paper size. You can also change the scale factor yourself—for example, to add space for other items on the page.

<CtaPanelOverview></CtaPanelOverview>

1. In your Grid definition, set the `pdf` prop to `true` to enable exporting to PDF.
2. Set the paper size with the `saveGridPDF` method. The method accepts three parameters: the Grid element reference, a configuration object with the `paperSize` and `scale` properties, and an optional callback function.
3. Use the `onPdfExport` event handler of the Grid to call the `saveGridPDF` method when the export is triggered.

This example shows how the Grid can fit its content to a predefined `A4` paper size:

{% meta height:510 %}
{% embed_file pdf-export-fit-content/func/app.tsx preview %}
{% embed_file pdf-export-fit-content/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [PDF Export Known Limitations]({% slug limitations_pdfexport_grid %})
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
