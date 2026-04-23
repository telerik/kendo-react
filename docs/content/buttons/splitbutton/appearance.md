---
title: Appearance
description: 'Add alternative styling options to the KendoReact SplitButton in React projects.'
components: ['splitbutton']
slug: appearance_splitbutton
position: 6
tag: updated
---

# Appearance

The SplitButton provides a predefined set of appearance options.

Apart from the default vision of the SplitButton, these alternative styling options enable you to configure each individual aspect of the appearance of a SplitButton.

-   [Size](#size)
-   [Border Radius](#border-radius)
-   [Fill Mode](#fill-mode)
-   [Theme Colors](#theme-colors)

## Size

The KendoReact SplitButton enables you to configure its [`size`](slug:api_buttons_splitbuttonprops#size).

-   `small`
-   `medium` (Default)
-   `large`

The following example demonstrates how to set the size of the SplitButton.

{% meta height:220 %}
{% embed_file splitbutton/appearance/size/app.tsx preview %}
{% embed_file splitbutton/appearance/size/main.tsx %}
{% embed_file splitbutton/appearance/size/styles.css %}
{% endmeta %}

## Border Radius

The SplitButton enables you to apply different `border radius` to the component through the [`rounded`](slug:api_buttons_splitbuttonprops#rounded) property.

The [`rounded`](slug:api_buttons_splitbuttonprops#rounded) option supports the following values:

-   `small`
-   `medium` (Default)
-   `large`
-   `full`

The following example demonstrates how to define the border radius of the SplitButton.

{% meta height:220 %}
{% embed_file splitbutton/appearance/rounded/app.tsx preview %}
{% embed_file splitbutton/appearance/rounded/main.tsx %}
{% embed_file splitbutton/appearance/rounded/styles.css %}
{% endmeta %}

## Fill Mode

The SplitButton allows you to set different fill modes by using the [`fillMode`](slug:api_buttons_splitbuttonprops#fillMode) property.

The [`fillMode`](slug:api_buttons_splitbuttonprops#fillMode) option supports the following values:

-   `solid` (Default)
-   `flat`
-   `outline`
-   `link`

The following example demonstrates how to define the fill mode of the SplitButton.

{% meta height:220 %}
{% embed_file splitbutton/appearance/fillMode/app.tsx preview %}
{% embed_file splitbutton/appearance/fillMode/main.tsx %}
{% embed_file splitbutton/appearance/fillMode/styles.css %}
{% endmeta %}

## Theme Colors

The SplitButton allows you to set different theme colors by using the [`themeColor`](slug:api_buttons_splitbuttonprops#themeColor) property. It accepts values of type [`SplitButtonThemeColor`](slug:api_buttons_splitbuttonprops) or `none`.

The [`themeColor`](slug:api_buttons_splitbuttonprops#themeColor) option supports the following values:

-   `base` (Default) - Applies coloring based on the `base` theme color.
-   `primary` - Applies coloring based on the `primary` theme color.
-   `secondary` - Applies coloring based on the `secondary` theme color.
-   `tertiary` - Applies coloring based on the `tertiary` theme color.
-   `info` - Applies coloring based on the `info` theme color.
-   `success` - Applies coloring based on the `success` theme color.
-   `warning` - Applies coloring based on the `warning` theme color.
-   `error` - Applies coloring based on the `error` theme color.
-   `dark` - Applies coloring based on the `dark` theme color.
-   `light` - Applies coloring based on the `light` theme color.
-   `inverse` - Applies coloring based on the `inverse` theme color.

The following example demonstrates how to define the theme color of the SplitButton.

{% meta height:220 %}
{% embed_file splitbutton/appearance/themeColor/app.tsx preview %}
{% embed_file splitbutton/appearance/themeColor/main.tsx %}
{% embed_file splitbutton/appearance/themeColor/styles.css %}
{% endmeta %}

## Suggested Links

-   [API Reference of the SplitButton](slug:api_buttons_splitbuttonprops)
-   [Creating Custom Styles](slug:themebuilder)
