---
title: Adaptive Rendering
description: 'Enable adaptive rendering for the KendoReact Pager in React projects.'
components: ["pager"]
slug: adaptive_rendering_pager
position: 19
tag: updated
---

# Adaptive Rendering

The Pager provides an option for enabling adaptive rendering for the popup element of the [drop-down list with the page sizes](slug://api_data-tools_pagerprops#toc-pageSizes). This functionality allows the component to adapt to the screen size by adjusting its popup element dynamically based on the screen dimensions.

-   To enable the adaptive rendering, set the [`adaptive`](slug://api_data-tools_pagerprops#toc-adaptive) property of the Pager to `true`.

-   To set the title of the action sheet rendered when the Pager is opened on a smaller screen, set the [`adaptiveTitle`](slug://api_data-tools_pagerprops#toc-adaptivetitle) property of the component.

The Adaptive Mode adjusts the rendering of the popup element for the [drop-down list with the page sizes](slug://api_data-tools_pagerprops#toc-pageSizes) based on the screen resolution of the device (the horizontal value in pixels) by using the following default breakpoints:

-   Small screens (up to 500 px)&mdash;Displays a full-screen action sheet.
-   Medium screens (between 500 px and 768 px)&mdash;Displays a popup as an action sheet pinned to the bottom of the screen.
-   Large screens (larger than 768 px)&mdash;Displays a popup as an animation container attached to the main element of the component.

> You can further customize the adaptive breakpoints by using the [AdaptiveMode React Context](slug://overview_adaptive_mode).

{% meta height:450 %}
{% embed_file pager/adaptive-rendering/app.tsx preview %}
{% embed_file pager/adaptive-rendering/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Pager Props](slug://api_data-tools_pagerprops)
-   [Creating Custom Styles](slug://themebuilder)
