---
title: Controlled Mode
description: 'Control the value of the KendoReact Signature in React projects.'
components: ["signature"]
slug: controlled_signature
position: 2
---

# Controlled Mode

By default, the Signature is in an uncontrolled state.

The Signature provides options for:

-   [Controlling its value](#toc-controlling-the-value)
-   [Controlling its popup state](#toc-controlling-the-popup-state)

## Controlling the Value

The value of the Signature is a string containing an image encoded as a [Data URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs).

To manage the value of the Signature:

1. Use its [`value`]({% slug api_inputs_signatureprops %}#toc-value) property.
1. Handle the [`onChange`]({% slug api_inputs_signatureprops %}#toc-onchange) event.
1. Pass the new value through the props.

{% meta height:300 %}
{% embed_file signature/controlled/value/func/app.tsx preview %}
{% embed_file signature/controlled/value/func/main.tsx %}
{% endmeta %}

### Export Resolution

The Signature allows you to control the resolution of the exported image using the [`exportScale`]({% slug api_inputs_signatureprops %}#toc-exportscale) property. When set to 1, the exported image will match the element size on screen. We recommend using the default value of 2 or higher to improve the quality on high-resolution screens and print.

The following example demonstrates how to set the export scale.

{% meta height:450 %}
{% embed_file signature/controlled/export-scale/func/app.tsx preview %}
{% embed_file signature/controlled/export-scale/func/main.tsx %}
{% endmeta %}

### Import Scaling

The Signature scales any images provided as a value to the dimensions of the component. Use images with the same aspect ratio and resolution to avoid distortion.

## Controlling the Popup State

To manage the popup and set the open state of the Signature, use its [`open`]({% slug api_inputs_signatureprops %}#toc-open) property.

The following example demonstrates how to control the state of the Signature upon display.

{% meta height:300 %}
{% embed_file signature/controlled/popup/func/app.tsx preview %}
{% embed_file signature/controlled/popup/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Signature]({% slug api_inputs_signatureprops %})
