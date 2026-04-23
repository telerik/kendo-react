---
title: Image Resolution
description: 'Render embedded images when you export content in React projects with the KendoReact PDF Processing component.'
components: ["pdfprocessing"]
slug: embeddedimages_pdf
position: 1
---

# Image Resolution

By default, images get embedded at their original resolution.

If the content includes large images, this behavior might cause performance problems and out-of-memory errors. To limit the resolution of the images in the output file, set the desired value to [`imageResolution`]({% slug api_pdf_pdfexportprops %}#toc-imageresolution) in the dots per inch (DPI) unit.

For more information on embedding images, refer to:

-   [Known limitations of the Drawing library and the PDF Export component]({% slug limitationsbrowsersupport_drawing %}#toc-images)
-   [Exporting drawings to PDF with the Drawing library]({% slug exportingtoimages_drawing %})

{% meta height:700 %}
{% embed_file embedded-images/func/app.tsx preview %}
{% embed_file embedded-images/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the PDF Processing Component]({% slug api_pdf_pdfexportprops %})
-   [PDF Options by the Drawing Library]({% slug api_kendo-drawing %}#toc-progresskendo-drawingpdf)
