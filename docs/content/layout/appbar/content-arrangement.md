---
title: Content Arrangement
description: 'Learn how to arrange the content of the KendoReact AppBar component.'
components: ["appbar"]
slug: contentarrangement_appbar
position: 3
---

# Content Arrangement

The AppBar allows you to arrange the layout of its content by splitting it into sections, defining spacings and separators or simply place any content "as is".

To arrange the content and the layout of the AppBar, you could use:

-   [Sections](#toc-sections)
-   [Spacings](#toc-spacings)
-   [Separators](#toc-separators)

## Sections

The [`AppBarSection`]({% slug api_layout_appbarsection %}) component allows you to place HTML elements or React components between its tags. AppBar sections provide a better layout structure, alignment styling and control over the content arrangement.

The following example demonstrates the [`AppBarSection`]({% slug api_layout_appbarsection %}) component in action.

{% meta height:120 %}
{% embed_file appbar/sections/func/app.tsx preview %}
{% embed_file appbar/sections/func/main.tsx %}
{% endmeta %}

## Spacings

To define spacings between tha AppBar sections, you can use the [`AppBarSpacer`]({% slug api_layout_appbarspacer %}), which gives an additional white space in the content layout. You can customize the width of the spacing by setting width CSS rule inside [`style`]({% slug api_layout_appbarspacerprops %}#toc-style) property. If not set, the spacer element will take all the available space.

{% meta height:120 %}
{% embed_file appbar/spacings/func/app.tsx preview %}
{% embed_file appbar/spacings/func/main.tsx %}
{% endmeta %}

## Separators

Separators are used to create a visual separation of the AppBar content. To add a separator, add the `k-appbar-separator` class on a `span` element.

{% meta height:120 %}
{% embed_file appbar/separators/func/app.tsx preview %}
{% embed_file appbar/separators/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

*   [API Reference of the AppBarSection]({% slug api_layout_appbarsection %})
*   [API Reference of the AppBarSpacer]({% slug api_layout_appbarspacer %})
*   [API Reference of the AppBar]({% slug api_layout_appbar %})
