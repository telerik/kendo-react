---
title: Hidden Content
description: 'Export hidden content by using the KendoReact PDF Processing in React projects.'
components: ["pdfprocessing"]
slug: hiddencontent_pdf
position: 7
---

# Hidden Content

During the PDF export process, you can generate additional content in the PDF which is otherwise not visible to the user. For example, you can add company logos or contact details to the exported document.

1. Create a container that holds all the information you want to hide.
2. Make sure your code fully renders the container.
3. Use the [`PDFExport`]({% slug api_pdf_pdfexport %}) component or the [`savePDF`]({% slug api_pdf_savepdf %}) method to export the hidden container.
    * The `PDFExport` component must be placed inside the hidden container.
    * The `savePDF` method must receive the hidden container as its first argument.

The following demo shows how to export hidden content to PDF using the `PDFExport` component. A hidden text block is positioned off-screen and appears only in the exported document, not on the web page.

{% meta height:160 %}
{% embed_file hidden-content/func/app.tsx preview %}
{% embed_file hidden-content/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the PDF Processing Component]({% slug api_pdf_pdfexportprops %})
-   [PDF Export Overview]({% slug overview_pdfgenerator %})
-   [Styling of Content]({% slug stylingofcontent_pdf %})
-   [PDF Export from Data Grid]({% slug overview_pdfexport_grid %})
-   [Image Resolution]({% slug embeddedimages_pdf %})
