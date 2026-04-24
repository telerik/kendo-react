---
title: Page Template
description: 'Get started with the KendoKendoReact Data Grid enabling you to specify a page template to be additionally inserted into each page when exporting to PDF.'
components: ["datagrid"]
slug: pagetemplate_pdfexport_grid
position: 10
subject: PDF Export feature of the Grid
---

# Page Template

This example shows how to use the KendoReact `pdf` export feature to generate a PDF of the Data Grid with a custom page template. The template is applied to every page of the exported PDF, allowing you to add headers, footers, or other custom elements to each page.

<CtaPanelOverview></CtaPanelOverview>

Specifying a page template helps you position the content and add headers, footers, and other elements. To style the exported document, use CSS. During the PDF export, the template is positioned in a container with the specified paper size. To define a page template, specify the [`pageTemplate`]({% slug api_pdf_pdfexportprops %}#toc-pagetemplate) property of [`saveGridPDF`](slug://api_pdf_savegridpdf) method inside the PDF Export Handler.

The result is a PDF file with a custom page layout, including headers or footers, and a well-structured representation of the Grid data.

> When you use a page template, you are required to set the [`paperSize`]({% slug api_pdf_pdfexportprops %}#toc-papersize) property.

{% meta height:560 %}
{% embed_file pdf-page-template/func/app.tsx preview %}
{% embed_file pdf-page-template/func/main.tsx %}
{% embed_file pdf-page-template/func/products.js %}
{% endmeta %}

## Suggested Links

-   [PDF Export Known Limitations]({% slug limitations_pdfexport_grid %})
-   [API Reference of GridPDFExport]({% slug api_pdf_pdfexportprops %})
