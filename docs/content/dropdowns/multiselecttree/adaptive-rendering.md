---
title: Adaptive Rendering
description: 'Enable adaptive rendering for the KendoReact MultiSelectTree in React projects.'
components: ["multiselecttree"]
slug: adaptive_rendering_multiselecttree
position: 5
---

# Adaptive Rendering

The MultiSelectTree provides an option for enabling adaptive rendering for the popup element. This functionality allows the component to adapt to the screen size by providing different rendering of the popup element based on the screen dimensions.

To enable the adaptive rendering, set the [`adaptive`]({% slug api_dropdowns_multiselecttreeprops %}#toc-adaptive) property of the MultiSelectTree to `true`.

To set the title of the dialog window rendered when the MultiSelectTree is opened on a smaller screen, set the [`adaptiveTitle`]({% slug api_dropdowns_multiselecttreeprops %}#toc-adaptivetitle) property of the component.

The Adaptive Mode changes the rendering of the popup element of the MultiSelectTree as per the screen resolution of the device (the horizontal value in px) with the following default breakpoints:

-   `Small screens - up to 500px`&mdash;Displays a full-screen action sheet.
-   `Medium screens - between 500px and 768px`&mdash;Displays a popup as an action sheet pinned to the bottom of the screen.
-   `Large screens - larger than 768px`&mdash;Displays a popup as an animation container attached to the main element of the component.

> You can further customize the adaptive breakpoints via [AdaptiveMode React Context]({% slug overview_adaptive_mode %}).

> Switch between the device options below to see how the MultiSelectTree adapts to different resolutions.

{% meta height:620 %}
{% embed_file multiselecttree/adaptive-rendering/func/app.tsx preview %}
{% embed_file multiselecttree/adaptive-rendering/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the MultiSelectTree]({% slug api_dropdowns_multiselecttree %})
-   [MultiSelectTree `size` options]({% slug api_dropdowns_multiselecttreeprops %}#toc-size)
-   [MultiSelectTree `rounded` options]({% slug api_dropdowns_multiselecttreeprops %}#toc-rounded)
-   [MultiSelectTree `fillMode` options]({% slug api_dropdowns_multiselecttreeprops %}#toc-fillmode)
-   [Creating Custom Styles]({% slug themebuilder %})
