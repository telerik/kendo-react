---
title: Overlays
description: 'Use the available image overlays or the special Swiss QR Code overlay supported by the KendoReact QR Code.'
components: ["qrcode"]
slug: overlays_qrcode_barcodes
position: 3
---

# Overlays

The QR Code supports image overlays and the special Swiss Code overlay.

## Image Overlays

Thanks to [error correction]({% slug encoding_qrcode_barcodes %}#toc-error-correction-level), information in QR Codes can be recovered even if part of the code is covered or unreadable. This feature allows you to use image overlays to customize the appearance of the QR code.

> Always test if the code reads correctly with the desired overlay. Depending on the length of the value and the size of the overlay, you might need to raise the [`errorCorrection`]({% slug api_barcodes_qrcodeprops %}#toc-errorcorrection) level to `"M"` or `"H"`.

To add an image overlay, prepare a suitable image and set its dimensions and location by using the [`overlay`]({% slug api_barcodes_qrcodeprops %}#toc-overlay) setting:

{% meta height:350 %}
{% embed_file qrcode/overlays/image/func/app.tsx preview %}
{% embed_file qrcode/overlays/image/func/main.tsx %}
{% endmeta %}

## Swiss Code

To create a Swiss QR Code, set the [`overlay`]({% slug api_barcodes_qrcodeprops %}#toc-overlay) prop to the special `"swiss"` overlay type:

{% meta height:550 %}
{% embed_file qrcode/overlays/swiss/func/app.tsx preview %}
{% embed_file qrcode/overlays/swiss/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Barcodes]({% slug api_barcodes %})
-   [Encoding and Error Correction]({% slug encoding_qrcode_barcodes %})
