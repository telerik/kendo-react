---
title: Adaptive Rendering
description: 'Configure the on-screen keyboard for the KendoReact DateInput to implement adaptiveness in your React projects.'
components: ["dateinput"]
slug: adaptive_rendering_dateinput
position: 10
tag: new
---

# Adaptive Rendering

The DateInput does not require specific adaptive rendering, but you can use the [`inputAttributes`]({% slug api_dateinputs_dateinputprops %}#toc-inputAttributes) property to enable the browser to show an input-specific on-screen keyboard.

## On-Screen Keyboard

To enhance the mobile user experience of your React apps, you can configure the type of the on-screen keyboard for the KendoReact DateInput. Use the [`inputAttributes`]({% slug api_dateinputs_dateinputprops %}#toc-inputAttributes) property to set the `inputMode`. Based on the `inputMode` setting, the browser will display the most appropriate virtual keyboard.

The [`inputAttributes`]({% slug api_dateinputs_dateinputprops %}#toc-inputAttributes) property lets you set custom HTML attributes to the inner focusable input.

> Check out the different type of virtual keyboard on a mobile device.

{% meta height:300 %}
{% embed_file dateinput/adaptive-rendering/app.tsx preview %}
{% embed_file dateinput/adaptive-rendering/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DateInput]({% slug api_dateinputs_dateinputprops %})
-   [The `inputmode` Global Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)
-   [React Date Inputs](slug:overview_dateinputs)
