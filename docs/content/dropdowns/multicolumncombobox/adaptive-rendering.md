---
title: Adaptive Rendering
description: 'Enable adaptive rendering for the KendoReact MultiColumnComboBox in React projects.'
components: ["multicolumncombobox"]
slug: adaptive_rendering_multicolumncombobox
position: 6
---

# Adaptive Rendering

The MultiColumnComboBox provides an option for enabling adaptive rendering for the popup element. This functionality allows the component to adapt to the screen size by providing different rendering of the popup element based on the screen dimensions.

To enable the adaptive rendering, set the [`adaptive`]({% slug api_dropdowns_multicolumncomboboxprops %}#toc-adaptive) property of the MultiColumnComboBox to `true`.

To set the title of the dialog window rendered when the MultiColumnComboBox is opened on a smaller screen, set the [`adaptiveTitle`]({% slug api_dropdowns_multicolumncomboboxprops %}#toc-adaptivetitle) property of the component.

To set the value of the adaptive filtering input in the dialog of the MultiColumnComboBox on smaller screens, set the [`adaptiveFilter`]({% slug api_dropdowns_multicolumncomboboxprops %}#toc-adaptivefilter) property.

The Adaptive Mode changes the rendering of the popup element of the MultiColumnComboBox as per the screen resolution of the device (the horizontal value in px) with the following default breakpoints:

-   `Small screens - up to 500px`&mdash;Displays a full-screen action sheet.
-   `Medium screens - between 500px and 768px`&mdash;Displays a popup as an action sheet pinned to the bottom of the screen.
-   `Large screens - larger than 768px`&mdash;Displays a popup as an animation container attached to the main element of the component.

> You can further customize the adaptive breakpoints via [AdaptiveMode React Context]({% slug overview_adaptive_mode %}).

> Switch between the device options below to see how the MultiColumnComboBox adapts to different resolutions.

{% meta height:620 %}
{% embed_file multicolumncombobox/adaptive-rendering/func/app.tsx preview %}
{% embed_file multicolumncombobox/adaptive-rendering/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the MultiColumnComboBox]({% slug api_dropdowns_multicolumncombobox %})
-   [MultiColumnComboBox `size` options]({% slug api_dropdowns_multicolumncomboboxprops %}#toc-size)
-   [MultiColumnComboBox `rounded` options]({% slug api_dropdowns_multicolumncomboboxprops %}#toc-rounded)
-   [MultiColumnComboBox `fillMode` options]({% slug api_dropdowns_multicolumncomboboxprops %}#toc-fillmode)
-   [Creating Custom Styles]({% slug themebuilder %})
