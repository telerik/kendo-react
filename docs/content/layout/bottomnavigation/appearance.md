---
title: Appearance
description: 'Specify the appearance of the KendoReact BottomNavigation component.'
components: ["bottomnavigation"]
slug: appearance_bottomnavigation
position: 4
tag: updated
---

# Appearance

The BottomNavigation component provides predefined settings for applying different theme colors and fill options. The fill option specifies if the theme color will be applied as a background color of the component, or as a text color.

This article covers:

-   [Theme Color](#theme-color)
-   [Fill Mode](#fill-mode)

## Theme Color

The BottomNavigation allows you to specify predefined theme colors.

The available [`themeColor`]({% slug api_layout_bottomnavigationprops %}#toc-themeColor) values are:

-   `primary` (Default) &mdash; Applies coloring based on the primary theme color.
-   `secondary` &mdash; Applies coloring based on the secondary theme color.
-   `tertiary` &mdash; Applies coloring based on the tertiary theme color.
-   `info` &mdash; Applies coloring based on the info theme color.
-   `success` &mdash; Applies coloring based on the success theme color.
-   `warning` &mdash; Applies coloring based on the warning theme color.
-   `error` &mdash; Applies coloring based on the error theme color.
-   `dark` &mdash; Applies coloring based on the dark theme color.
-   `light` &mdash; Applies coloring based on the light theme color.
-   `inverse` &mdash; Applies coloring based on the inverted theme color.

Any other regular color can be applied via custom CSS styling by targeting the BottomNavigation through its `k-bottom-nav` CSS class.

{% meta height:380 %}
{% embed_file bottomnavigation/theme-color/func/app.tsx preview %}
{% embed_file bottomnavigation/theme-color/func/main.tsx %}
{% endmeta %}

## Fill Mode

The BottomNavigation enables you to set styling options and create solid or flat layout by setting the `fillMode` property.

The available [`fillMode`]({% slug api_layout_bottomnavigationprops %}#toc-fillmode) values are:

-   `flat`(Default) &mdash; Sets the theme color as the text color. The background will be white.
-   `solid` &mdash; Sets the theme color as a background color.

{% meta height:300 %}
{% embed_file bottomnavigation/fill/func/app.tsx preview %}
{% embed_file bottomnavigation/fill/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the BottomNavigationProps]({% slug api_layout_bottomnavigationprops %})
-   [API Reference of the BottomNavigationItemProps]({% slug api_layout_bottomnavigationitemprops %})
-   [Creating Custom Styles]({% slug themebuilder %})
