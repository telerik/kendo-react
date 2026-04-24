---
title: Configuration
description: 'Configure the KendoReact Barcodes components in React projects.'
components: ["barcode"]
slug: configuration_barcode_barcodes
position: 3
---

# Configuration Options

The Barcode provides a set of configuration options, which enable you to fine-tune its behavior.

The following configuration settings are supported by the Barcode:

-   [Setting the Barcode size](#toc-size)
-   [Setting the color and background color](#toc-color-and-background)
-   [Setting the border width and color](#toc-border)
-   [Configuring the text label and checksum](#toc-text-and-checksum)

## Size

To set the Barcode dimensions, use either of the following approaches:

-   Use CSS rules to set the size of the Barcode or its container.
-   Use the [`width`]({% slug api_barcodes_barcodeprops %}#toc-width) and [`height`]({% slug api_barcodes_barcodeprops %}#toc-height) props to set the dimensions in pixels.

> If the Barcode width is insufficient for the current value and Barcode type, the component will throw an error. Always test the application with the values you expect to see in actual use.

{% meta height:480 %}
{% embed_file barcode/configuration/size/func/app.tsx preview %}
{% embed_file barcode/configuration/size/func/main.tsx %}
{% endmeta %}

## Color and Background

To customize the Barcode foreground and background color, set the [`color`]({% slug api_barcodes_barcodeprops %}#toc-color) and [`background`]({% slug api_barcodes_barcodeprops %}#toc-background) props. You can further extend the background by specifying an optional [`padding`]({% slug api_barcodes_barcodeprops %}#toc-padding).

> Ensure that the chosen color combination provides adequate contrast and test it with the typical readers you intend to target.

{% meta height:220 %}
{% embed_file barcode/configuration/color/func/app.tsx preview %}
{% embed_file barcode/configuration/color/func/main.tsx %}
{% endmeta %}

## Border

The Barcode can display a simple rectangular [`border`]({% slug api_barcodes_barcodeprops %}#toc-border) as part of itself. You can create more complex borders by using CSS.

{% meta height:220 %}
{% embed_file barcode/configuration/border/func/app.tsx preview %}
{% embed_file barcode/configuration/border/func/main.tsx %}
{% endmeta %}

## Text and Checksum

To configure the Barcode text label appearance, set the [`text`]({% slug api_barcodes_barcodeprops %}#toc-text) configuration.

Optionally, set [`checksum`]({% slug api_barcodes_barcodeprops %}#toc-checksum) to `true` to display the value checksum for the selected [symbology]({% slug types_barcode_barcodes %}).

{% meta height:220 %}
{% embed_file barcode/configuration/text/func/app.tsx preview %}
{% embed_file barcode/configuration/text/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Barcode Types]({% slug types_barcode_barcodes %})
-   [API Reference of the Barcode]({% slug api_barcodes_barcodeprops %})
