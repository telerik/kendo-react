---
title: Adaptive Rendering
description: 'Enable adaptive rendering for the KendoReact ColorPicker in React projects.'
components: ["colorpicker"]
slug: adaptive_rendering_colorpicker
position: 7
tag: new
---

# Adaptive Rendering

The ColorPicker provides an option for enabling adaptive rendering for the popup element. This functionality allows the component to adapt to the screen size by adjusting its popup element dynamically based on the screen dimensions.

-   To enable the adaptive rendering, set the [`adaptive`]({% slug api_inputs_colorpickerprops %}#toc-adaptive) property of the ColorPicker to `true`.

-   To specify a custom title for the action sheet displayed when the ColorPicker opens on smaller screens, set the [`adaptiveTitle`]({% slug api_inputs_colorpickerprops %}#toc-adaptivetitle) property of the component.

The Adaptive Mode adjusts the rendering of the ColorPicker's popup element based on the screen resolution of the device (the horizontal value in pixels) by using the following default breakpoints:

-   Small screens (up to 500px)&mdash;Displays a full-screen action sheet.
-   Medium screens (between 500px and 768px)&mdash;Displays a popup as an action sheet pinned to the bottom of the screen.
-   Large screens (larger than 768px)&mdash;Displays a popup as an animation container attached to the main element of the component.

> You can further customize the adaptive breakpoints using the [AdaptiveMode React Context]({% slug overview_adaptive_mode %}).

> Switch between the device options below to see how the ColorPicker adapts to different resolutions.

{% meta height:570 %}
{% embed_file colorpicker/adaptive-rendering/app.tsx preview %}
{% embed_file colorpicker/adaptive-rendering/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ColorPicker]({% slug api_inputs_colorpickerprops %})
-   [Creating Custom Styles]({% slug themebuilder %})
