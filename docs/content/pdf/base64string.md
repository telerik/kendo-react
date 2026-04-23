---
title: Base64 Strings
description: 'Get the Base64 strings that are generated from the React PDF Processing components by KendoReact.'
components: ["pdfprocessing"]
slug: base64_pdf
position: 8
---

# Base64 Strings

To create a Base64 string, use the [`drawDOM`]({% slug api_kendo-drawing_drawdom %}) method from the [KendoReact Drawing library]({% slug api_kendo-drawing %}) which creates the string based on a passed DOM element.

The example below demonstrates how to get the Base64 string that is generated during the PDF export of the Grid. The string is logged to the console.

{% meta height:580 %}
{% embed_file base64/func/app.tsx preview %}
{% embed_file base64/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Drawing Library]({% slug api_kendo-drawing %})
-   [Export of Drawings in PDF]({% slug pdfexport_drawing %})
