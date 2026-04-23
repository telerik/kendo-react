---
title: Appearance
description: The KendoReact Tabstrip allows you to set different styles based on its content."
components: ["tabstrip"]
slug: sizing_tabstrip
position: 50
tag: updated
---

# Appearance

The KendoReact TabStrip allows selecting a predefined size options that changes its appearance.

## Size

To change the default size of the TabStrip, set the [`size`]({% slug api_layout_tabstriptabprops %}#toc-size) property which will change the padding of the TabStrip tabs and scroll buttons.

The [`size`]({% slug api_layout_tabstriptabprops %}#toc-size) property supports the following values:

-   `small`&mdash;Reduces the default `padding` of the building blocks of the TabStrip. Especially useful when you want to fit more tabs in a limited space.
-   `medium` (default)&mdash;Represents the default `padding` of the building blocks of the TabStrip.
-   `large`&mdash;Increases the default `padding` of the building blocks of the TabStrip. Useful when you want to provide larger elements for easier end user interaction.
-   null&mdash;Removes the styling related to the TabStrip sizing option.

The following example demonstrates how to define the TabStrip size.

{% meta height:420 %}
{% embed_file tabstrip/size/func/app.tsx preview %}
{% embed_file tabstrip/size/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)
-   [API Reference of the TabStripTab Component]({% slug api_layout_tabstriptabprops %})
-   [API Reference of the Tabstrip]({% slug api_layout_tabstripprops %})
