---
title: Appearance
description: 'Add alternative styling options to the KendoReact NumericTextBox in React projects.'
components: ["numerictextbox"]
slug: appearance_numerictextbox
position: 7
---

# Appearance

The NumericTextBox provides a predefined set of appearance options.

Apart from the default vision of the NumericTextBox, these alternative styling options enable you to configure each individual aspect of the appearance of a NumericTextBox.

-   [Size](#size)
-   [Fill Mode](#fill-mode)
-   [Border Radius](#border-radius)

## Size

The NumericTextBox allows you to set different `size` options. To achieve this, use the [`size`]({% slug api_inputs_numerictextboxprops %}#toc-size) property.

The [`size`]({% slug api_inputs_numerictextboxprops %}#toc-size) option supports the following values:

-   `small`
-   `medium`
-   `large`
-   `none`

The following example demonstrates how to define the size of the NumericTextBox.

{% meta height:300 %}
{% embed_file numerictextbox/appearance/size/app.tsx preview %}
{% embed_file numerictextbox/appearance/size/main.tsx %}
{% endmeta %}

## Fill Mode

The NumericTextBox allows you to set different fill modes by using the [`fillMode`]({% slug api_inputs_numerictextboxprops %}#toc-fillMode) property.

The [`fillMode`]({% slug api_inputs_numerictextboxprops %}#toc-fillMode) option supports the following values:

-   `flat`
-   `solid`
-   `outline`
-   `none`

The following example demonstrates how to define the fill mode of the NumericTextBox.

{% meta height:300 %}
{% embed_file numerictextbox/appearance/fillMode/app.tsx preview %}
{% embed_file numerictextbox/appearance/fillMode/main.tsx %}
{% endmeta %}

## Border Radius

The NumericTextBox enables you to apply different border radius to the component through the [`rounded`]({% slug api_inputs_numerictextboxprops %}#toc-rounded) property.

The [`rounded`]({% slug api_inputs_numerictextboxprops %}#toc-rounded) option supports the following values:

-   `small`
-   `medium`
-   `large`
-   `full`
-   `none`

{% meta height:300 %}
{% embed_file numerictextbox/appearance/borderradius/app.tsx preview %}
{% embed_file numerictextbox/appearance/borderradius/main.tsx %}
{% endmeta %}

## Width

The NumericTextBox enables you to apply different width size to the component through the [`width`]({% slug api_inputs_numerictextboxprops %}#toc-width) property.

{% meta height:170 %}
{% embed_file numerictextbox/appearance/width/app.tsx preview %}
{% embed_file numerictextbox/appearance/width/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

-   [API Reference of the NumericTextBox]({% slug api_inputs_numerictextboxprops %})
-   [NumericTextBox `prefix` options]({% slug api_inputs_numerictextboxprops %}#toc-prefix)
-   [NumericTextBox `suffix` options]({% slug api_inputs_numerictextboxprops %}#toc-suffix)
-   [NumericTextBox `size` options]({% slug api_inputs_numerictextboxprops %}#toc-size)
-   [NumericTextBox `fillMode` options]({% slug api_inputs_numerictextboxprops %}#toc-fillMode)
-   [NumericTextBox `rounded` options]({% slug api_inputs_numerictextboxprops %}#toc-rounded)
-   [Creating Custom Styles]({% slug themebuilder %})
