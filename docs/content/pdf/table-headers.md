---
title: Repeated Table Headers
description: 'Render recurrent table headers when you export content by using the KendoReact PDF Processing in React projects.'
components: ["pdfprocessing"]
slug: recurrenttableheaders_pdf
position: 5
---

# Repeated Table Headers

The PDF Processing component enables you to render recurrent table headers.

To repeat the `<thead>` elements on each page, set the [`repeatHeaders`]({% slug api_pdf_pdfexportprops %}#toc-repeatheaders) option.

For more information on how to render recurrent table headers with the Drawing library, refer to its [PDF output documentation]({% slug recurrenttableheaders_drawing %}).

{% meta height:600 %}
{% embed_file table-headers/func/app.tsx preview %}
{% embed_file table-headers/func/main.tsx %}
{% embed_file table-headers/func/products.json %}
{% endmeta %}

## Suggested Links

-   [API Reference of the PDF Processing Component]({% slug api_pdf_pdfexportprops %})
-   [Rendering Recurring Table Headers with the Drawing Library]({% slug recurrenttableheaders_drawing %})
