---
title: Appearance
description: 'Specify the appearance of the KendoReact Badge component in React projects.'
components: ['badge']
slug: appearance_badge
position: 4
---

# Appearance

The Badge component provides many predefined appearance options such as different shapes, sizes, theme colors and optional cutout borders.

## Theme Color

The Badge allows you to specify predefined theme colors.

The available [`themeColor`]({% slug api_indicators_badgeprops %}#toc-themeColor) values are:

-   `base` &mdash;Applies coloring based on the base theme color.
-   `primary` (Default)&mdash;Applies coloring based on primary theme color.
-   `secondary`&mdash;Applies coloring based on secondary theme color.
-   `tertiary`&mdash; Applies coloring based on tertiary theme color.
-   `inherit`&mdash; Applies inherited coloring value.
-   `info`&mdash;Applies coloring based on info theme color.
-   `success`&mdash; Applies coloring based on success theme color.
-   `warning`&mdash; Applies coloring based on warning theme color.
-   `error`&mdash; Applies coloring based on error theme color.
-   `dark`&mdash; Applies coloring based on dark theme color.
-   `light`&mdash; Applies coloring based on light theme color.
-   `inverse`&mdash; Applies coloring based on inverted theme color.

{% meta height:170 %}
{% embed_file badge/theme-color/func/app.tsx preview %}
{% embed_file badge/theme-color/func/main.tsx %}
{% endmeta %}

## Rounded

The Badge allows you to set the border radius that will be applied to its edges.

The available [`rounded`]({% slug api_indicators_badgeprops %}#toc-rounded) values are:

-   `small`&mdash;Sets the border radius to 1px.
-   `medium`&mdash;(Default)— Sets the border radius to 2px.
-   `large`&mdash;Sets the border radius to 4px.
-   `full`&mdash;Sets the border radius to 9999px.
-   `none`&mdash;Sets the border radius to 0.

{% meta height:130 %}
{% embed_file badge/rounded/func/app.tsx preview %}
{% embed_file badge/rounded/func/main.tsx %}
{% endmeta %}

## Size

The Badge allows you to set different sizes.

The available [`size`]({% slug api_indicators_badgeprops %}#toc-size) values are:

-   `small`
-   `medium` (Default)
-   `large`

{% meta height:130 %}
{% embed_file badge/size/func/app.tsx preview %}
{% embed_file badge/size/func/main.tsx %}
{% endmeta %}

## FillMode

The Badge enables you to set styling options and create solid or outline badges by setting the `fillMode` property.

The available [`fillMode`]({% slug api_indicators_badgeprops %}#toc-fillmode) values are:

-   `solid` (Default)
-   `outline`

{% meta height:130 %}
{% embed_file badge/fill/func/app.tsx preview %}
{% embed_file badge/fill/func/main.tsx %}
{% endmeta %}

## Cutout Border

The Badge allows you to specify whether or not to render an additional "cutout" border around its content.

The available [`cutoutBorder`]({% slug api_indicators_badgeprops %}#toc-cutoutBorder) values are:

-   `false` (Default)
-   `true`

{% meta height:210 %}
{% embed_file badge/cutout-border/func/app.tsx preview %}
{% embed_file badge/cutout-border/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the BadgeContainer]({% slug api_indicators_badgecontainer %})
-   [API Reference of the BadgeContainerProps]({% slug api_indicators_badgecontainerprops %})
-   [API Reference of the Badge]({% slug api_indicators_badge %})
-   [API Reference of the BadgeProps]({% slug api_indicators_badgeprops %})
-   [Creating Custom Styles]({% slug themebuilder %})
