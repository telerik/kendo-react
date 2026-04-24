---
title: Hyperlinks
description: 'Render hyperlinks when you export content by using the KendoReact PDF Processing in React projects.'
components: ["pdfprocessing"]
slug: hyperlinks_pdf
position: 2
---

# Hyperlinks

By default, the hyperlinks in a generated PDF document are clickable.

To disable this behavior, use the [`avoidLinks`]({% slug api_pdf_pdfexportprops %}#toc-avoidlinks) option.

For more information on how to disable hyperlinks with the Drawing library, refer to its [PDF output documentation]({% slug hyperlinks_drawing %}).

{% meta height:200 %}
{% embed_file hyperlinks/func/app.tsx preview %}
{% embed_file hyperlinks/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the PDF Processing Component]({% slug api_pdf_pdfexportprops %})
-   [PDF Options by the Drawing Library]({% slug api_kendo-drawing %}#toc-progresskendo-drawingpdf)
