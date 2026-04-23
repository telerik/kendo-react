---
title: Appearance
description: 'Add alternative styling options to the KendoReact TextArea in React projects.'
components: ['textarea']
slug: appearance_textarea
position: 7
tag: updated
---

# Appearance

The TextArea provides a predefined set of appearance options.

Apart from the default vision of the TextArea, these alternative styling options enable you to configure each individual aspect of the appearance of a TextArea.

-   [Size](#size)
-   [Fill Mode](#fill-mode)
-   [Border Radius](#border-radius)

## Size

The KendoReact TextArea enables you to configure its [`size`](slug:api_inputs_textareaprops#size).

-   `small`
-   `medium` (Default)
-   `large`

The following example demonstrates how to set the size of the TextArea.

{% meta height:180 %}
{% embed_file textarea/appearance/size/app.tsx preview %}
{% embed_file textarea/appearance/size/main.tsx %}
{% embed_file textarea/appearance/size/styles.css %}
{% endmeta %}

## Fill Mode

The TextArea supports the following [`fillMode`](slug:api_inputs_textareaprops#fillmode) options:

-   `solid` (Default)
-   `outline`
-   `flat`

The following example demonstrates how to set the fillMode of the TextArea.

{% meta height:180 %}
{% embed_file textarea/appearance/fillMode/app.tsx preview %}
{% embed_file textarea/appearance/fillMode/main.tsx %}
{% embed_file textarea/appearance/fillMode/styles.css %}
{% endmeta %}

## Border Radius

The TextArea enables you to apply different `border radius` to the component through the [`rounded`](slug:api_inputs_textareaprops#rounded) property.

The [`rounded`](slug:api_inputs_textareaprops#rounded) option supports the following values:

-   `small`
-   `medium` (Default)
-   `large`
-   `full`
-   `none` - Does not set a `className` for size

The following example demonstrates how to define the border radius of the TextArea.

{% meta height:180 %}
{% embed_file textarea/appearance/rounded/app.tsx preview %}
{% embed_file textarea/appearance/rounded/main.tsx %}
{% embed_file textarea/appearance/rounded/styles.css %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

-   [API Reference of the TextArea](slug:api_inputs_textareaprops)
-   [TextArea `size` options](slug:api_inputs_textareaprops#size)
-   [TextArea `fillMode` options](slug:api_inputs_textareaprops#fillmode)
-   [TextArea `rounded` options](slug:api_inputs_textareaprops#rounded)
-   [Creating Custom Styles](slug:themebuilder)
