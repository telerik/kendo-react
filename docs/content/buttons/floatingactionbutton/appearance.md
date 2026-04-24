---
title: Appearance
description: 'Specify the appearance of the KendoReact FloatingActionButton component in React projects.'
components: ['floatingactionbutton']
slug: appearance_floatingactionbutton
position: 5
---

# Appearance

The FloatingActionButton component provides many predefined appearance options such as different shapes, sizes and theme colors.

-   [Size](#size)
-   [Rounded](#rounded)
-   [Theme Color](#theme-color)

## Size

The FloatingActionButton allows you to set different sizes.

The available [`size`]({% slug api_buttons_floatingactionbuttonprops %}#toc-size) values are:

-   `small`&mdash;Applies half of the default padding, e.g. `8px`.
-   `medium` (Default)&mdash;Applies the default padding, e.g. `16px`.
-   `large`&mdash;Applies one and one half of the default padding, e.g. `24px`.

{% meta height:200 %}
{% embed_file floatingactionbutton/appearance/size/func/app.tsx preview %}
{% embed_file floatingactionbutton/appearance/size/func/main.tsx %}
{% embed_file floatingactionbutton/appearance/size/func/styles.css %}
{% endmeta %}

## Rounded

The FloatingActionButton allows you to set different rounding options.

The available [`rounded`]({% slug api_buttons_floatingactionbuttonprops %}#toc-rounded) values are:

-   `small`
-   `medium` (Default)
-   `large`
-   `full`
-   `none`

{% meta height:360 %}
{% embed_file floatingactionbutton/appearance/rounded/func/app.tsx preview %}
{% embed_file floatingactionbutton/appearance/rounded/func/main.tsx %}
{% embed_file floatingactionbutton/appearance/rounded/func/styles.css %}
{% endmeta %}

## Theme Color

The FloatingActionButton allows you to specify predefined theme colors.

The available [`themeColor`]({% slug api_buttons_floatingactionbuttonprops %}#toc-themeColor) values are:

-   `primary` (Default)&mdash;Applies coloring based on the primary theme color.
-   `secondary`&mdash;Applies coloring based on the secondary theme color.
-   `tertiary`&mdash;Applies coloring based on the tertiary theme color.
-   `info`&mdash;Applies coloring based on the info theme color.
-   `success`&mdash;Applies coloring based on the success theme color.
-   `warning`&mdash;Applies coloring based on the warning theme color.
-   `error`&mdash;Applies coloring based on the error theme color.
-   `dark`&mdash;Applies coloring based on the dark theme color.
-   `light`&mdash;Applies coloring based on the light theme color.
-   `inverse`&mdash;Applies coloring based on the inverted theme color.

{% meta height:280 %}
{% embed_file floatingactionbutton/appearance/theme-color/func/app.tsx preview %}
{% embed_file floatingactionbutton/appearance/theme-color/func/main.tsx %}
{% embed_file floatingactionbutton/appearance/theme-color/func/styles.css %}
{% endmeta %}

## Suggested Links

-   [API Reference of the FloatingActionButton]({% slug api_buttons_floatingactionbutton %})
-   [API Reference of the FloatingActionButtonProps]({% slug api_buttons_floatingactionbuttonprops %})
-   [Creating Custom Styles]({% slug themebuilder %})
