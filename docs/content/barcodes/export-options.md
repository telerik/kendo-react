---
title: Export
description: 'Export the KendoReact Barcodes components to images, PDF, or SVG in React projects.'
components: ["barcode"]
slug: export_barcodes
position: 4
---

# Export

The Barcode and QR Code provide built-in support for Image, SVG, and PDF export.

You can send the export output to a remote service as a Base64-encoded string or save it on the client machine.

Similar to all KendoReact components, the Barcode and QR Code can also be included in PDF documents created by the [PDF Export]({% slug overview_pdfgenerator %}) component.

The Barcodes support the following options:

-   [Exporting to an image](#toc-exporting-to-images)
-   [Exporting to the Scalable Vector Graphics (SVG) image format](#toc-exporting-to-svg)
-   [Exporting to a drawing visual](#toc-exporting-to-drawing-visuals)
-   [Exporting to the Portable Document Format (PDF)](#toc-exporting-to-pdf)

## Exporting to Images

The following example demonstrates how to save the Barcode as a PNG image by using the [`Barcode.exportImage`]({% slug api_barcodes_barcode %}#toc-exportimage) and the [`QRCode.exportImage`]({% slug api_barcodes_qrcode %}#toc-exportimage) methods.

{% meta height:300 %}
{% embed_file export-options/to-image/func/app.tsx preview %}
{% embed_file export-options/to-image/func/main.tsx %}
{% endmeta %}

## Exporting to SVG

The following example demonstrates how to save the Barcode and QR Code as an SVG file by using the [`Barcode.exportSVG`]({% slug api_barcodes_barcode %}#toc-exportsvg) and [`QRCode.exportSVG`]({% slug api_barcodes_qrcode %}#toc-exportsvg) methods.

{% meta height:300 %}
{% embed_file export-options/to-svg/func/app.tsx preview %}
{% embed_file export-options/to-svg/func/main.tsx %}
{% endmeta %}

## Exporting to Drawing Visuals

The [`Barcode.exportVisual`]({% slug api_barcodes_barcode %}#toc-exportvisual) and [`QRCode.exportVisual`]({% slug api_barcodes_qrcode %}#toc-exportvisual) methods return a [Drawing]({% slug overview_drawing %}) scene which you can further process.

The following example demonstrates how to export the Barcodes as a Drawing visual scene by using the `exportVisual` method.

{% meta height:400 %}
{% embed_file export-options/to-visuals/func/app.tsx preview %}
{% embed_file export-options/to-visuals/func/main.tsx %}
{% endmeta %}

## Exporting to PDF

The following example demonstrates how to save a section containing a Barcode and a QR Code as a PDF file by using the [PDF Export]({% slug overview_pdfgenerator %}) component.

{% meta height:400 %}
{% embed_file export-options/to-pdf/func/app.tsx preview %}
{% embed_file export-options/to-pdf/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the `Barcode`]({% slug api_barcodes_barcode %})
-   [API Reference of the `QRCode`]({% slug api_barcodes_qrcode %})
