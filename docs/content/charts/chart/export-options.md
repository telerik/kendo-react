---
title: Export Options
description: 'Export the KendoReact Chart component to PDF or image an React project.'
components: ["chart"]
slug: export_chart_charts
position: 6
---

# Export Options

The Chart provides support for Image, PDF, and SVG export using the [Drawing]({% slug overview_drawing %}) package.

As a result, you can send a Base64-encoded file to a service or save it on the client machine by using the [File Saver]({% slug overview_filesaver %}) package.

The Chart supports the following options:

-   [Exporting to a drawing visual](#toc-exporting-to-drawing-visuals)
-   [Exporting to an image](#toc-exporting-to-images)
-   [Exporting to the Portable Document Format (PDF)](#toc-exporting-to-pdf)
-   [Exporting to the Scalable Vector Graphics (SVG) image format](#toc-exporting-to-svg)

## Exporting to Drawing Visuals

In order to export a Chart component as a Drawing scene use the exportVisual method and pass a Chart instance and export options.

The following example demonstrates how to export the Chart as a Drawing visual scene by using the `exportVisual` method.

{% meta height:500 %}
{% embed_file export-options/visuals/func/app.tsx preview %}
{% embed_file export-options/visuals/func/main.tsx %}
{% endmeta %}

## Exporting to Images

Once you export the Chart as a Drawing scene, you can save this visual as an SVG by using the [`exportSVG`]({% slug api_kendo-drawing_exportsvg %}) method of the [Drawing]({% slug overview_drawing %}) package. The following example demonstrates how to achieve this.

{% meta height:500 %}
{% embed_file export-options/images/func/app.tsx preview %}
{% embed_file export-options/images/func/main.tsx %}
{% endmeta %}

By default, the exported image is of the same size as the Chart DOM element. If required, you can export the file to a different resolution. If you change the image size, the image quality will not be affected because the rendering of the Chart is based on vector graphics.

{% meta height:500 %}
{% embed_file export-options/resolution/func/app.tsx preview %}
{% embed_file export-options/resolution/func/main.tsx %}
{% endmeta %}

## Exporting to PDF

The [`exportPDF`]({% slug api_kendo-drawing_pdf_exportpdf %}) method from the [Drawing]({% slug overview_drawing %}) library takes a visual element and produces a PDF file out of it.

> Currently, exporting the [series pattern fills](slug:appearance_chart_charts#toc-using-pattern-fills) to PDF is not supported.

### Saving Charts in PDF

The following example demonstrates how to save the Chart as a PDF file by using the `exportPDF` method.

{% meta height:500 %}
{% embed_file export-options/saving-pdf/func/app.tsx preview %}
{% embed_file export-options/saving-pdf/func/main.tsx %}
{% endmeta %}

### Fitting Charts to Paper Size

If the rendered Chart is bigger than the exported PDF paper size, then the Chart is clipped. To avoid this behavior, either:

-   Set the `exportVisual` size, or
-   Scale the drawing element which is returned by the `exportVisual` method.

The following example demonstrates how to fit the exported Chart to the paper size of the PDF file.

{% meta height:500 %}
{% embed_file export-options/fitting-to-paper-size/func/app.tsx preview %}
{% embed_file export-options/fitting-to-paper-size/func/main.tsx %}
{% endmeta %}

## Exporting to SVG

Once you export the Chart as a Drawing scene, you can save this visual as an SVG by using the [`exportSVG`]({% slug api_kendo-drawing_exportsvg %}) method of the [Drawing]({% slug overview_drawing %}) package. The following example demonstrates how to achieve this.

{% meta height:500 %}
{% embed_file export-options/exporting-to-svg/func/app.tsx preview %}
{% embed_file export-options/exporting-to-svg/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Elements]({% slug axes_chart_charts %})
-   [API Reference of the Chart]({% slug api_charts %})
-   [Glossary]({% slug glossary_charts %})
