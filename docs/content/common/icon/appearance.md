---
title: Appearance
description: 'Specify the appearance of the KendoReact Icon component in React projects.'
components: ["general"]
slug: appearance_icon
position: 2
---

# Appearance

The Icon component provides many predefined appearance options such as different sizes, theme colors and flipping.

## Theme Color

Icons can be colored in terms of the current theme using the [`themeColor`]({% slug api_common_iconthemecolor %}) property. The available values are:

-   `inherit` (Default)&mdash;Applies coloring based on the current color.
-   `primary`&mdash;Applies coloring based on primary theme color.
-   `secondary`&mdash;Applies coloring based on secondary theme color.
-   `tertiary`&mdash; Applies coloring based on tertiary theme color.
-   `info`&mdash;Applies coloring based on info theme color.
-   `success`&mdash; Applies coloring based on success theme color.
-   `warning`&mdash; Applies coloring based on warning theme color.
-   `error`&mdash; Applies coloring based on error theme color.
-   `dark`&mdash; Applies coloring based on dark theme color.
-   `light`&mdash; Applies coloring based on light theme color.
-   `inverse`&mdash; Applies coloring based on inverse theme color.

> The Icon allows you to use predefined theme colors through the `themeColor` property. Any custom color could by applied via [`style`]({% slug api_common_iconprops %}#style) property.

{% meta height:200 %}
{% embed_file icon/theme-color/func/app.tsx preview %}
{% embed_file icon/theme-color/func/main.tsx %}
{% endmeta %}

## Size

The Icon allows you to specify its [`size`]({% slug api_common_iconsize %}). The available values are:

-   `default` (Default)&mdash;Font-size: 16px; Width: 16px; Height: 16px.
-   `xsmall`&mdash;Font-size: 12px; Width: 12px; Height: 12px.
-   `small`&mdash;Font-size: 14px; Width: 14px; Height: 14px.
-   `medium`&mdash;Font-size: 16px; Width: 16px; Height: 16px.
-   `large`&mdash;Font-size: 20px; Width: 20px; Height: 20px.
-   `xlarge`&mdash;Font-size: 24px; Width: 24px; Height: 24px.
-   `xxlarge`&mdash;Font-size: 32px; Width: 32px; Height: 32px.
-   `xxxlarge`&mdash;Font-size: 48px; Width: 48px; Height: 48px.

> The Icon allows you to use predefined sizes through the `size` property. Any custom size could by applied via [`style`]({% slug api_common_iconprops %}#style) property.

{% meta height:200 %}
{% embed_file icon/size/func/app.tsx preview %}
{% embed_file icon/size/func/main.tsx %}
{% endmeta %}

## Flip

The Icon allows you to invert it through an axis in different directions by using the [`flip`]({% slug api_common_iconflip %}) property. The available values are:

-   `default` (Default)&mdash;No flipping applied.
-   `horizontal`&mdash;Flips the icon in horizontal direction.
-   `vertical`&mdash;Flips the icon in vertical direction.
-   `both`&mdash;Flips the icon in both horizontal and vertical directions.

{% meta height:160 %}
{% embed_file icon/flip/func/app.tsx preview %}
{% embed_file icon/flip/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Icon]({% slug api_common_icon %})
-   [API Reference of the IconProps]({% slug api_common_iconprops %})
-   [Creating Custom Styles]({% slug themebuilder %})

