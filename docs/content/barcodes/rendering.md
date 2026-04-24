---
title: Rendering Modes
description: 'Set the rendering mode of the KendoReact Barcodes components in React projects.'
components: ["barcode"]
slug: rendering_barcodes
position: 5
---

# Rendering Modes

The Barcodes support two modes for rendering&mdash;Canvas (bitmap) and SVG (vector graphics).

By default, the Barcodes uses SVG rendering. You can select a rendering mode by setting the [`BarcodeProps.renderAs`]({% slug api_barcodes_barcodeprops %}#toc-renderas) and [`QRCodeProps.renderAs`]({% slug api_barcodes_qrcodeprops %}#toc-renderas) props.

{% meta height:300 %}
{% embed_file rendering-modes/func/app.tsx preview %}
{% embed_file rendering-modes/func/main.tsx %}
{% endmeta %}

## When to Use SVG

The default SVG rendering mode is recommended for general use.

Using vector graphics ensures that:

-   The browser zoom does not degrade the image.
-   The prints are crisp regardless of the resolution.

## When to Use Canvas

When performance is critical, for example, when rendering large pages, it is recommended to use the Canvas rendering mode.

The browser does not have to maintain a live DOM tree for the Chart, which results in:

-   Quicker screen updates.
-   Lower memory usage.

On the downside, rendering to a fixed resolution bitmap results in:

-   Blurry images on zoom.
-   Poor print quality.

## Suggested Links

-   [API Reference of the `Barcode`]({% slug api_barcodes_barcode %})
-   [API Reference of the `QRCode`]({% slug api_barcodes_qrcode %})
