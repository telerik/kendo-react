---
title: Appearance
description: 'Specify the appearance of the KendoReact AppBar component.'
components: ['appbar']
slug: appearance_appbar
position: 4
---

# Appearance

The AppBar component provides predefined settings for applying different theme colors. The theme color will be applied as background color of the component.

## Theme Color

The AppBar allows you to specify predefined theme colors.

The available [`themeColor`]({% slug api_layout_appbarprops %}#toc-themeColor) values are:

-   `base` (Default)&mdash;Applies coloring based on the base theme color.
-   `primary`&mdash;Applies coloring based on primary theme color.
-   `secondary`&mdash;Applies coloring based on secondary theme color.
-   `tertiary`&mdash;Applies coloring based on tertiary theme color.
-   `inverse`&mdash;Applies coloring based on inverted theme color.

Any other regular color can be applied via custom CSS styling by targeting the AppBar through its `k-appbar` CSS class.

{% meta height:900 %}
{% embed_file appbar/theme-color/func/app.tsx preview %}
{% embed_file appbar/theme-color/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the AppBar]({% slug api_layout_appbar %})
-   [API Reference of the AppBarProps]({% slug api_layout_appbarprops %})
-   [Creating Custom Styles]({% slug themebuilder %})
