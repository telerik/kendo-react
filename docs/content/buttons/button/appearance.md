---
title: Appearance
description: 'Add alternative styling options to the KendoReact Button in React projects.'
components: ['button']
slug: appearance_button
position: 6
---

# Appearance

The Button provides a predefined set of appearance options.

Apart from the default vision of the Button, these alternative styling options enable you to configure each individual aspect of the appearance of a Button.

-   [Size](#size)
-   [Border Radius](#border-radius)
-   [Fill Mode](#fill-mode)
-   [Theme Colors](#theme-colors)

## Size

The KendoReact Button enables you to configure its [`size`]({% slug api_buttons_buttonprops %}#toc-size).

-   `small`
-   `large`
-   `medium` (Default)

The following example demonstrates how to set the size of the Button.

{% meta height:120 %}
{% embed_file button/appearance/size/app.tsx preview %}
{% embed_file button/appearance/size/main.tsx %}
{% embed_file button/appearance/size/styles.css %}
{% endmeta %}

## Border Radius

The Button enables you to apply different `border radius` to the component through the [`rounded`]({% slug api_buttons_buttonprops %}#rounded) property.

The [`rounded`](slug://api_buttons_buttonprops#rounded) option supports the following values:

-   `small`
-   `medium` (Default)
-   `large`
-   `full`

The following example demonstrates how to define the border radius of the Button.

{% meta height:100 %}
{% embed_file button/appearance/roundness/app.tsx preview %}
{% embed_file button/appearance/roundness/main.tsx %}
{% embed_file button/appearance/roundness/styles.css %}
{% endmeta %}

## Fill Mode

The Button allows you to set different fill modes by using the [`fillMode`]({% slug api_buttons_buttonprops %}#toc-fillmode) property.

The [`fillMode`]({% slug api_buttons_buttonprops %}#toc-fillmode) option supports the following values:

-   `solid` (Default)
-   `flat`
-   `outline`
-   `clear`
-   `link`

The following example demonstrates how to define the fill mode of the Button.

{% meta height:100 %}
{% embed_file button/appearance/fillMode/app.tsx preview %}
{% embed_file button/appearance/fillMode/main.tsx %}
{% embed_file button/appearance/fillMode/styles.css %}
{% endmeta %}

## Theme Colors

The Button allows you to set different theme colors by using the [`themeColor`]({% slug api_buttons_buttonprops %}#toc-themecolor) property. It accepts values of type ButtonThemeColor or `none`.

The [`themeColor`]({% slug api_buttons_buttonprops %}#toc-themecolor) option supports the following values:

-   `base` (Default)&mdash;Applies coloring based on the `base` theme color.
-   `primary`&mdash;Applies coloring based on the `primary` theme color.
-   `secondary`&mdash;Applies coloring based on the `secondary` theme color.
-   `tertiary`&mdash;Applies coloring based on the `tertiary` theme color.
-   `info`&mdash;Applies coloring based on the `info` theme color.
-   `success`&mdash;Applies coloring based on the `success` theme color.
-   `warning`&mdash;Applies coloring based on the `warning` theme color.
-   `error`&mdash;Applies coloring based on the `error` theme color.
-   `dark`&mdash;Applies coloring based on the `dark` theme color.
-   `light`&mdash;Applies coloring based on the `light` theme color.
-   `inverse`&mdash;Applies coloring based on the `inverse` theme color.

The following example demonstrates how to define the theme color of the Button.

{% meta height:180 %}
{% embed_file button/appearance/themeColor/app.tsx preview %}
{% embed_file button/appearance/themeColor/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Button]({% slug api_buttons_buttonprops %})
-   [Creating Custom Styles]({% slug themebuilder %})
