---
title: Appearance
description: 'Get started with the KendoReact Avatar and set its size.'
components: ['avatar']
slug: appearance_avatar
position: 2
---

# Appearance

The Avatar allows you to set different styles based on its content.

-   [Type](#type)
-   [Size](#size)
-   [Fill Mode](#fill-mode)
-   [Rounded](#rounded)
-   [Border](#border)
-   [Theme Color](#theme-color)

## Type

The available [type]({% slug api_layout_avatarprops %}#toc-type) are:

-   Image &mdash;By passing an `img` element as child element of the Avatar.
-   Text avatar&mdash;By passing an given string to be rendered as text (initials).
-   Icon avatar&mdash;By passing `icon` to the Avatar component.

The following example demonstrates the icon type in action.

{% meta height:150 %}
{% embed_file avatar/appearance/overview/func/app.tsx preview %}
{% embed_file avatar/appearance/overview/func/main.tsx %}
{% endmeta %}

The following example demonstrates the image type in action.

{% meta height:150 %}
{% embed_file avatar/appearance/image/app.tsx preview %}
{% embed_file avatar/appearance/image/main.tsx %}
{% endmeta %}

The following example demonstrates the text type in action.

{% meta height:150 %}
{% embed_file avatar/appearance/text/app.tsx preview %}
{% embed_file avatar/appearance/text/main.tsx %}
{% endmeta %}

## Size

The Avatar allows you to set predefined or custom sizes.
To specify a predefined size, set the [size]({% slug api_layout_avatarprops %}#toc-size) property.

The available [size]({% slug api_layout_avatarprops %}#toc-size) values are:

-   `small`
-   `medium` (Default)
-   `large`

To specify a custom avatar size, use the [style]({% slug api_layout_avatarprops %}#toc-style)property.

{% meta height:200 %}
{% embed_file avatar/appearance/size/func/app.tsx preview %}
{% embed_file avatar/appearance/size/func/main.tsx %}
{% endmeta %}

## Fill Mode

The Avatar enables you to set styling options and create solid or outline avatars by setting the `fillMode` property.

The available [fillMode]({% slug api_layout_avatarprops %}#toc-fillmode) values are:

-   `solid` (Default)
-   `outline`

An additional border around the content of an `outline` avatar can be rendered by setting the [border]({% slug api_layout_avatarprops %}#toc-border) property to `true`.

{% meta height:120 %}
{% embed_file avatar/appearance/fill/func/app.tsx preview %}
{% embed_file avatar/appearance/fill/func/main.tsx %}
{% endmeta %}

## Rounded

The Avatar allows you to set predefined border-radius by setting the `rounded` property.

The available [rounded]({% slug api_layout_avatarprops %}#toc-rounded) values are:

-   `small`
-   `medium` (Default)
-   `large`
-   `full`
-   `none`

An additional border around the content of an `outline` avatar can be rendered by setting the [border]({% slug api_layout_avatarprops %}#toc-border) property to `true`.

{% meta height:200 %}
{% embed_file avatar/appearance/rounded/func/app.tsx preview %}
{% embed_file avatar/appearance/rounded/func/main.tsx %}
{% endmeta %}

## Border

The Avatar allows you to specify whether or not to render an additional `border` around its content by using the [border]({% slug api_layout_avatarprops %}#toc-border) property. By default, `border` is set to false.

{% meta height:200 %}
{% embed_file avatar/appearance/border/func/app.tsx preview %}
{% embed_file avatar/appearance/border/func/main.tsx %}
{% endmeta %}

## Theme Color

The Avatar allows you to specify predefined theme colors.

The available [`themeColor`]({% slug api_layout_avatarprops %}#toc-themeColor) values are:

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

{% meta height:300 %}
{% embed_file avatar/appearance/theme-color/func/app.tsx preview %}
{% embed_file avatar/appearance/theme-color/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

-   [API Reference of the Avatar Component]({% slug api_layout_avatarprops %})
-   [Creating Custom Styles]({% slug themebuilder %})
