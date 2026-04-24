---
title: Adaptive Rendering
description: 'Enable adaptive rendering for the KendoReact MultiSelect in React projects.'
components: ["multiselect"]
slug: adaptive_rendering_multiselect
position: 5
---

# Adaptive Rendering

The MultiSelect provides an option for enabling adaptive rendering for the popup element. This functionality allows the component to adapt to the screen size by providing different rendering of the popup element based on the screen dimensions.

To enable the adaptive rendering, set the [`adaptive`]({% slug api_dropdowns_multiselectprops %}#toc-adaptive) property of the MultiSelect to `true`.

To set the title of the dialog window rendered when the MultiSelect is opened on a smaller screen, set the [`adaptiveTitle`]({% slug api_dropdowns_multiselectprops %}#toc-adaptivetitle) property of the component.

The Adaptive Mode changes the rendering of the popup element of the MultiSelect as per the screen resolution of the device (the horizontal value in px) with the following default breakpoints:

-   `Small screens - up to 500px`&mdash;Displays a full-screen action sheet.
-   `Medium screens - between 500px and 768px`&mdash;Displays a popup as an action sheet pinned to the bottom of the screen.
-   `Large screens - larger than 768px`&mdash;Displays a popup as an animation container attached to the main element of the component.

> You can further customize the adaptive breakpoints via [AdaptiveMode React Context]({% slug overview_adaptive_mode %}).

> Switch between the device options below to see how the MultiSelect adapts to different resolutions.

{% meta height:620 %}
{% embed_file multiselect/adaptive-rendering/func/app.tsx preview %}
{% embed_file multiselect/adaptive-rendering/func/main.tsx %}
{% endmeta %}

## MultiSelect Adaptive Rendering with Grouping

The following example demonstrates the adaptiveness of the MultiSelect when working in a data grouping scenario.

> Switch between the device options below to see how the MultiSelect adapts to different resolutions.

{% meta height:620 %}
{% embed_file multiselect/adaptive-rendering-grouping/func/app.tsx preview %}
{% embed_file multiselect/adaptive-rendering-grouping/func/main.tsx %}
{% embed_file multiselect/adaptive-rendering-grouping/func/data.ts %}
{% endmeta %}

## Suggested Links

-   [API Reference of the MultiSelect]({% slug api_dropdowns_multiselect %})
-   [MultiSelect `size` options]({% slug api_dropdowns_multiselectprops %}#toc-size)
-   [MultiSelect `rounded` options]({% slug api_dropdowns_multiselectprops %}#toc-rounded)
-   [MultiSelect `fillMode` options]({% slug api_dropdowns_multiselectprops %}#toc-fillmode)
-   [Creating Custom Styles]({% slug themebuilder %})
