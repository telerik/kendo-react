---
title: Appearance
description: 'Specify the appearance of the KendoReact Loader component in React projects.'
components: ["loader"]
slug: appearance_loader
position: 2
---

# Appearance

The Loader component provides many predefined appearance options such as different type, sizes, theme colors.

-   [Type](#type)
-   [Size](#size)
-   [Theme Color](#theme-color)

## Type

The Loader allows you to set different types.

The available [`type`]({% slug api_indicators_loaderprops %}#toc-type) values are:

-   `pulsing` (Default)&mdash; Applies pulsing type on the Loader.
-   `infinite-spinner`&mdash; Applies infinite spinner type on the Loader.
-   `converging-spinner`&mdash; Applies converging spinner type on the Loader.

{% meta height:130 %}
{% embed_file loader/type/func/app.tsx preview %}
{% embed_file loader/type/func/main.tsx %}
{% endmeta %}

## Size

The Loader allows you to set different sizes.

The available [`size`]({% slug api_indicators_loaderprops %}#toc-size) values are:

-   `small`
-   `medium` (Default)
-   `large`

{% meta height:130 %}
{% embed_file loader/size/func/app.tsx preview %}
{% embed_file loader/size/func/main.tsx %}
{% endmeta %}

## Theme Color

The Loader allows you to specify predefined theme colors.

The available [`themeColor`]({% slug api_indicators_loaderprops %}#toc-themeColor) values are:

-   `primary` (Default)&mdash;Applies coloring based on primary theme color.
-   `secondary`&mdash;Applies coloring based on secondary theme color.
-   `tertiary`&mdash; Applies coloring based on tertiary theme color.
-   `info`&mdash;Applies coloring based on info theme color.
-   `success`&mdash; Applies coloring based on success theme color.
-   `warning`&mdash; Applies coloring based on warning theme color.
-   `error`&mdash; Applies coloring based on error theme color.
-   `dark`&mdash; Applies coloring based on dark theme color.
-   `light`&mdash; Applies coloring based on light theme color.
-   `inverse`&mdash; Applies coloring based on inverted theme color.

{% meta height:170 %}
{% embed_file loader/theme-color/func/app.tsx preview %}
{% embed_file loader/theme-color/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Loader]({% slug api_indicators_loader %})
-   [API Reference of the LoaderProps]({% slug api_indicators_loaderprops %})
-   [Creating Custom Styles]({% slug themebuilder %})
