---
title: Configuration
description: 'Learn how to configure the KendoReact QR Code and set its size, color and background color, birder width, and more.'
components: ["qrcode"]
slug: configuration_qrcode_barcodes
position: 2
---

# Configuration Options

The QR Code provides a set of configuration options, which enable you to fine-tune its behavior.

The following configuration settings are supported by the QR Code:

-   [Setting the QR Code size](#toc-size).
-   [Setting the color and background color](#toc-color-and-background).
-   [Setting the border width and color](#toc-border).

## Size

To set the QR Code dimensions, use either of the following approaches:

-   Use CSS rules to set the size of the QR Code or its container.
-   Use the [`size`]({% slug api_barcodes_qrcodeprops %}#toc-size) prop, which defines the width and height, to set the dimensions in any CSS unit.

> If the QR Code size is insufficient for the current value and error correction level, the component will throw an error. Always test the application with the values you expect to see in actual use.

{% meta height:450 %}
{% embed_file qrcode/configuration/size/func/app.tsx preview %}
{% embed_file qrcode/configuration/size/func/main.tsx %}
{% endmeta %}

## Color and Background

To customize the QR Code foreground and background color, set the [`color`]({% slug api_barcodes_qrcodeprops %}#toc-color) and [`background`]({% slug api_barcodes_qrcodeprops %}#toc-background) options. You can further extend the background by specifying an optional [`padding`]({% slug api_barcodes_qrcodeprops %}#toc-padding).

> Ensure that the chosen color combination provides adequate contrast and test it with the typical readers you intend to target.

{% meta height:220 %}
{% embed_file qrcode/configuration/color/func/app.tsx preview %}
{% embed_file qrcode/configuration/color/func/main.tsx %}
{% endmeta %}

## Border

The QR Code can display a simple rectangular [`border`]({% slug api_barcodes_qrcodeprops %}#toc-border) as part of itself. You can create more complex borders by using CSS.

{% meta height:220 %}
{% embed_file qrcode/configuration/border/func/app.tsx preview %}
{% embed_file qrcode/configuration/border/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Encoding and Error Correction]({% slug encoding_qrcode_barcodes %})
-   [Overlays]({% slug overlays_qrcode_barcodes %})
-   [API Reference of the QR Code]({% slug api_barcodes_qrcodeprops %})
