---
title: Scaling of Content
description: 'Scale the content that is exported to PDF with the KendoReact PDF Processing component.'
components: ["pdfprocessing"]
slug: scalingofcontent_pdf
position: 3
---

# Scaling of Content

The PDF Processing enables you to export a PDF document that is bigger or smaller than its original elements.

The scaling feature is convenient when you generate a multi-page PDF output by using the automatic page-breaking feature. Because the original dimensions usually look too big in PDF, you can specify a suitable scale factor to get a better output for print.

To scale the content when you export files to PDF, use the [`scale`]({% slug api_pdf_pdfexportprops %}#toc-scale) option of either:

-   The [`PDFExport`]({% slug api_pdf_pdfexport %}) component, or
-   The [`savePDF`]({% slug api_pdf_savepdf %}) method.

While the [`scale`]({% slug api_pdf_pdfexportprops %}#toc-scale) setting affects the content, the output paper size and page margins remain the same. However, scaling affects the position of the headers and footers of page templates.

For more information on how to scale the content with the Drawing library, refer to its [PDF output documentation]({% slug scalingofcontent_drawing %}).

The following example demonstrates how to set a scale factor of `0.6` and keep an A4 page size and a two-centimeter page margin.

{% meta height:550 %}
{% embed_file content-scaling/func/app.tsx preview %}
{% embed_file content-scaling/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the PDF Processing Component]({% slug api_pdf_pdfexportprops %})
-   [Scaling of Drawings with the Drawing Library]({% slug scalingofcontent_drawing %})
