---
title: Adaptive Rendering
description: 'Enable adaptive rendering for the KendoReact DateRangePicker in React projects.'
components: ["daterangepicker"]
slug: adaptive_rendering_daterangepicker
position: 6
tag: updated
---

# Adaptive Rendering

The DateRangePicker provides an option for enabling adaptive rendering for the popup element. This functionality allows the component to adapt to the screen size by providing different rendering of the popup element based on the screen dimensions.

To enable the adaptive rendering, set the [`adaptive`]({% slug api_dateinputs_daterangepickerprops %}#toc-adaptive) property of the DateRangePicker to `true`.

To set the title of the dialog window rendered when the DateRangePicker is opened on a smaller screen, set the [`adaptiveTitle`]({% slug api_dateinputs_daterangepickerprops %}#toc-adaptivetitle) property of the component.

The Adaptive Mode changes the rendering of the popup element of the DateRangePicker as per the screen resolution of the device (the horizontal value in px) with the following default breakpoints:

-   `Small screens - up to 500px`&mdash;Displays a full-screen action sheet.
-   `Medium screens - between 500px and 768px`&mdash;Displays a popup as an action sheet pinned to the bottom of the screen.
-   `Large screens - larger than 768px`&mdash;Displays a popup as an animation container attached to the main element of the component.

> You can further customize the adaptive breakpoints via [AdaptiveMode React Context]({% slug overview_adaptive_mode %}).

> Switch between the device options below to see how the DateRangePicker adapts to different resolutions.

{% meta height:420 %}
{% embed_file daterangepicker/adaptive-rendering/func/app.tsx preview %}
{% embed_file daterangepicker/adaptive-rendering/func/main.tsx %}
{% endmeta %}

## On-Screen Keyboard

To enhance the mobile user experience of your React apps, you can configure the type of the on-screen keyboard for the KendoReact DateRangePicker. Use the [`inputAttributes`]({% slug api_dateinputs_daterangepicker %}#toc-inputAttributes) property to set the `inputMode`. Based on the `inputMode` setting, the browser will display the most appropriate virtual keyboard.

The [`inputAttributes`]({% slug api_dateinputs_daterangepicker %}#toc-inputAttributes) property lets you set custom HTML attributes to the inner focusable input.

> Check out the different type of virtual keyboard on a mobile device.

{% meta height:300 %}
{% embed_file daterangepicker/input-mode/app.tsx preview %}
{% embed_file daterangepicker/input-mode/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DateRangePicker]({% slug api_dateinputs_daterangepicker %})
-   [Creating Custom Styles]({% slug themebuilder %})
-   [The `inputmode` Global Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)
-   [React Date Inputs](slug:overview_dateinputs)
