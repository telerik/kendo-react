---
title: Adaptive Rendering
description: 'Enable adaptive rendering for the KendoReact AutoComplete in React projects.'
components: ['autocomplete']
slug: adaptive_rendering_autocomplete
position: 9
tag: new
---

# Adaptive Rendering

The AutoComplete provides an option for enabling adaptive rendering for the popup element. This functionality allows the component to adapt to the screen size by providing different rendering of the popup element based on the screen dimensions.

To enable the adaptive rendering, set the [`adaptive`]({% slug api_dropdowns_autocompleteprops %}#toc-adaptive) property of the AutoComplete to `true`.

To set the title of the dialog window rendered when the AutoComplete is opened on a smaller screen, set the [`adaptiveTitle`]({% slug api_dropdowns_autocompleteprops %}#toc-adaptivetitle) property of the component.

The Adaptive Mode changes the rendering of the popup element of the AutoComplete as per the screen resolution of the device (the horizontal value in px) with the following default breakpoints:

-   `Small screens - up to 500px`&mdash;Displays a full-screen action sheet.
-   `Medium screens - between 500px and 768px`&mdash;Displays a popup as an action sheet pinned to the bottom of the screen.
-   `Large screens - larger than 768px`&mdash;Displays a popup as an animation container attached to the main element of the component.

> You can further customize the adaptive breakpoints via [AdaptiveMode React Context]({% slug overview_adaptive_mode %}).

> Switch between the device options below to see how the AutoComplete adapts to different resolutions.

{% meta height:520 %}
{% embed_file autocomplete/adaptive-rendering/app.tsx preview %}
{% embed_file autocomplete/adaptive-rendering/main.tsx %}
{% endmeta %}

## AutoComplete Adaptive Rendering with Grouping

The following example demonstrates the adaptiveness of the AutoComplete when working in a data grouping scenario.

> Switch between the device options below to see how the AutoComplete adapts to different resolutions.

{% meta height:520 %}
{% embed_file autocomplete/adaptive-rendering-grouping/app.tsx preview %}
{% embed_file autocomplete/adaptive-rendering-grouping/main.tsx %}
{% embed_file autocomplete/adaptive-rendering-grouping/data.ts %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

-   [API Reference of the AutoComplete]({% slug api_dropdowns_autocompleteprops %})
-   [Creating Custom Styles]({% slug themebuilder %})
