---
title: Encoding and Error Correction
description: 'Use the available value encodings and error correction levels supported by the KendoReact QR Code.'
components: ["qrcode"]
slug: encoding_qrcode_barcodes
position: 4
---

# Encoding and Error Correction

The KendoReact QR Code supports different encodings and error correction levels.

## Value Encoding

By default, the QR Code value is encoded by using `"ISO_8859_1"`, which supports all characters from the [ISO/IEC 8859-1](https://en.wikipedia.org/wiki/ISO/IEC_8859-1) character set. To enable support for all [Unicode](https://en.wikipedia.org/wiki/List_of_Unicode_characters) characters, set the [`encoding`]({% slug api_barcodes_qrcodeprops %}#toc-encoding) to `"UTF_8"`.

> The UTF-8 encoding is not included in the specifications and is not supported by all readers.

The following example shows how to set the encoding:

{% meta height:300 %}
{% embed_file qrcode/unicode/func/app.tsx preview %}
{% embed_file qrcode/unicode/func/main.tsx %}
{% endmeta %}

## Error Correction Level

QR Codes provide error correction and recovery that allow partially damaged or covered QR codes to remain readable. Each successive error correction level improves the chances of the reader to recover the original information:

-   `"L"`&mdash;7% of the data can be restored.
-   `"M"`&mdash;15% of the data can be restored.
-   `"Q"`&mdash;25% of the data can be restored.
-   `"H"`&mdash;30% of the data can be restored.

If you expect part of the code to be covered, for example, when using [overlays]({% slug overlays_qrcode_barcodes %}), use a higher error correction level. The QR Code size may need to be increased to accommodate the additional information.

To set the error correction level, use the [`errorCorrection`]({% slug api_barcodes_qrcodeprops %}#toc-errorcorrection) prop:

{% meta height:300 %}
{% embed_file qrcode/error-correction/func/app.tsx preview %}
{% embed_file qrcode/error-correction/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Barcodes]({% slug api_barcodes %})
-   [Overlays]({% slug overlays_qrcode_barcodes %})
