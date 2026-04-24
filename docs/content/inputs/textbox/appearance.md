---
title: Appearance
description: 'Add alternative styling options to the KendoReact TextBox in React projects.'
components: ["textbox"]
slug: appearance_textbox
position: 6
---

# Appearance

The TextBox provides a predefined set of appearance options.

Apart from the default vision of the TextBox, these alternative styling options enable you to configure each individual aspect of the appearance of a TextBox.

-   [Size](#size)
-   [Border Radius](#border-radius)
-   [Fill Mode](#fill-mode)


## Size

The KendoReact TextBox enables you to configure its [`size`]({% slug api_inputs_textboxprops %}#toc-size).

* `small`
* `large`
* `medium` (Default)
* `null` Does not set a size `className`

The following example demonstrates how to set the size of the TextBox.

{% meta height:180 %}
{% embed_file textbox/appearance/size/app.tsx preview %}
{% embed_file textbox/appearance/size/main.tsx %}
{% endmeta %}

## Border Radius

The TextBox enables you to apply different `border radius` to the component through the [`rounded`]({% slug api_inputs_textboxprops %}#rounded) property.

The [`rounded`](slug://api_inputs_textboxprops#rounded) option supports the following values:

* `small`
* `medium` (Default)
* `large`
* `full`
* `none`&mdash; Does not set a `className` for size

The following example demonstrates how to define the border radius of the TextBox.

{% meta height:220 %}
{% embed_file textbox/appearance/border-radius/app.tsx preview %}
{% embed_file textbox/appearance/border-radius/main.tsx %}
{% endmeta %}

## Fill Mode

The TextBox allows you to set different fill modes by using the [`fillMode`]({% slug api_inputs_textboxprops %}#toc-fillMode) property.

The [`fillMode`]({% slug api_inputs_textboxprops %}#toc-fillMode) option supports the following values:

* `solid` (Default)
* `flat`
* `outline`
* `clear`
* `link`
* `null`

The following example demonstrates how to define the fill mode of the TextBox.

{% meta height:200 %}
{% embed_file textbox/appearance/fillMode/app.tsx preview %}
{% embed_file textbox/appearance/fillMode/main.tsx %}
{% endmeta %}


## Suggested Links

-   [API Reference of the TextBox]({% slug api_inputs_textboxprops %})
-   [TextBox `size` options]({% slug api_inputs_textboxprops %}#toc-size)
-   [TextBox `fillMode` options]({% slug api_inputs_textboxprops %}#toc-fillMode)
-   [TextBox `rounded` options]({% slug api_inputs_textboxprops %}#toc-rounded)
-   [Creating Custom Styles]({% slug themebuilder %})
