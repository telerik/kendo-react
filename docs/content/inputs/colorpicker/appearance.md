---
title: Appearance
description: 'Add alternative styling options to the KendoReact ColorPicker in React projects.'
components: ['colorpicker']
slug: appearance_colorpicker
position: 6
tag: updated
---

# Appearance

The ColorPicker provides a predefined set of appearance options.

Apart from the default vision of the ColorPicker, these alternative styling options enable you to configure each individual aspect of the appearance of a ColorPicker.

-   [Size](#size)
-   [Fill Mode](#fill-mode)
-   [Border Radius](#border-radius)

## Size

The KendoReact ColorPicker enables you to configure its [`size`](slug:api_inputs_colorpickerprops#size).

-   `small`
-   `medium` (Default)
-   `large`

The following example demonstrates how to set the size of the ColorPicker.

{% meta height:620 %}
{% embed_file colorpicker/appearance/size/app.tsx preview %}
{% embed_file colorpicker/appearance/size/main.tsx %}
{% embed_file colorpicker/appearance/size/styles.css %}
{% endmeta %}

## Fill Mode

The ColorPicker supports the following [`fillMode`](slug:api_inputs_colorpickerprops#fillmode) options:

-   `solid` (Default)
-   `outline`
-   `flat`

The following example demonstrates how to set the fillMode of the ColorPicker.

{% meta height:620 %}
{% embed_file colorpicker/appearance/fillMode/app.tsx preview %}
{% embed_file colorpicker/appearance/fillMode/main.tsx %}
{% embed_file colorpicker/appearance/fillMode/styles.css %}
{% endmeta %}

## Border Radius

The ColorPicker enables you to apply different border radius to the component through the [`rounded`](slug:api_inputs_colorpickerprops#rounded) property.

The [`rounded`](slug:api_inputs_colorpickerprops#rounded) option supports the following values:

-   `small`
-   `medium` (Default)
-   `large`
-   `full`
-   `none` - Does not set a `className` for size

The following example demonstrates how to define the border radius of the ColorPicker.

{% meta height:620 %}
{% embed_file colorpicker/appearance/rounded/app.tsx preview %}
{% embed_file colorpicker/appearance/rounded/main.tsx %}
{% embed_file colorpicker/appearance/rounded/styles.css %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ColorPicker](slug:api_inputs_colorpickerprops)
-   [ColorPicker `size` options](slug:api_inputs_colorpickerprops#size)
-   [ColorPicker `fillMode` options](slug:api_inputs_colorpickerprops#fillmode)
-   [ColorPicker `rounded` options](slug:api_inputs_colorpickerprops#rounded)
-   [Creating Custom Styles](slug:themebuilder)
