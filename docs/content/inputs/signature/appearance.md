---
title: Appearance
description: 'Add alternative styling options to the KendoReact Signature in React projects.'
components: ['signature']
slug: appearance_signature
position: 4
tag: updated
---

# Appearance

The Signature provides a predefined set of appearance options.

Apart from the default vision of the Signature, these alternative styling options enable you to configure each individual aspect of the appearance of a Signature.

-   [Stroke Width](#stroke-width)
-   [Colors](#colors)
-   [Size](#size)
-   [Fill Mode](#fill-mode)
-   [Border Radius](#border-radius)

## Stroke Width

The Signature allows you to control the line thickness width through the [`strokeWidth`](slug:api_inputs_signatureprops#strokewidth) property.

The following example demonstrates how to define the stroke width of the Signature.

{% meta height:300 %}
{% embed_file signature/appearance/stroke-width/func/app.tsx preview %}
{% embed_file signature/appearance/stroke-width/func/main.tsx %}
{% embed_file signature/appearance/stroke-width/func/styles.css %}
{% endmeta %}

## Colors

The Signature allows you to control the line and background color through the [`color`](slug:api_inputs_signatureprops#color) and [`backgroundColor`](slug:api_inputs_signatureprops#backgroundcolor) properties.

The color options supports the following formats:

| Format         | Description                                                                                                                  |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| red            | The [basic](http://www.w3.org/TR/css3-color/#html4) or [extended](http://www.w3.org/TR/css3-color/#svg-color) CSS Color name |
| #ff0000        | The Hex RGB value                                                                                                            |
| rgb(255, 0, 0) | The RGB value                                                                                                                |

The following example demonstrates how to define the Signature colors.

{% meta height:220 %}
{% embed_file signature/appearance/color/func/app.tsx preview %}
{% embed_file signature/appearance/color/func/main.tsx %}
{% embed_file signature/appearance/color/func/styles.css %}
{% endmeta %}

## Size

The Signature enables you to configure its [`size`](slug:api_inputs_signatureprops#size).

-   `small`
-   `medium` (Default)
-   `large`

The following example demonstrates how to set the size of the Signature.

{% meta height:220 %}
{% embed_file signature/appearance/size/app.tsx preview %}
{% embed_file signature/appearance/size/main.tsx %}
{% embed_file signature/appearance/size/styles.css %}
{% endmeta %}

## Fill Mode

The Signature supports the following [`fillMode`](slug:api_inputs_signatureprops#fillmode) options:

-   `solid` (Default)
-   `outline`
-   `flat`

The following example demonstrates how to set the fillMode of the Signature.

{% meta height:220 %}
{% embed_file signature/appearance/fillMode/app.tsx preview %}
{% embed_file signature/appearance/fillMode/main.tsx %}
{% embed_file signature/appearance/fillMode/styles.css %}
{% endmeta %}

## Border Radius

The Signature enables you to apply different `border radius` to the component through the [`rounded`](slug:api_inputs_signatureprops#rounded) property.

The [`rounded`](slug:api_inputs_signatureprops#rounded) option supports the following values:

-   `small`
-   `medium` (Default)
-   `large`
-   `none` - Does not set a `className` for size

The following example demonstrates how to define the border radius of the Signature.

{% meta height:220 %}
{% embed_file signature/appearance/rounded/app.tsx preview %}
{% embed_file signature/appearance/rounded/main.tsx %}
{% embed_file signature/appearance/rounded/styles.css %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Signature](slug:api_inputs_signatureprops)
-   [Signature `size` options](slug:api_inputs_signatureprops#size)
-   [Signature `fillMode` options](slug:api_inputs_signatureprops#fillmode)
-   [Signature `rounded` options](slug:api_inputs_signatureprops#rounded)
-   [Creating Custom Styles](slug:themebuilder)
