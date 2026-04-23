---
title: Appearance
description: 'Add alternative styling options to the KendoReact MaskedTextBox in React projects.'
components: ['maskedtextbox']
slug: appearance_maskedtextbox
position: 8
tag: updated
---

# Appearance

The MaskedTextBox provides a predefined set of appearance options.

Apart from the default vision of the MaskedTextBox, these alternative styling options enable you to configure each individual aspect of the appearance of a MaskedTextBox.

-   [Size](#size)
-   [Fill Mode](#fill-mode)
-   [Border Radius](#border-radius)

## Size

The KendoReact MaskedTextBox enables you to configure its [`size`](slug:api_inputs_maskedtextboxprops#size).

-   `small`
-   `medium` (Default)
-   `large`

The following example demonstrates how to set the size of the MaskedTextBox.

{% meta height:140 %}
{% embed_file maskedtextbox/appearance/size/app.tsx preview %}
{% embed_file maskedtextbox/appearance/size/main.tsx %}
{% embed_file maskedtextbox/appearance/size/styles.css %}
{% endmeta %}

## Fill Mode

The MaskedTextBox supports the following [`fillMode`](slug:api_inputs_maskedtextboxprops#fillmode) options:

-   `solid` (Default)
-   `outline`
-   `flat`

The following example demonstrates how to set the fillMode of the MaskedTextBox.

{% meta height:140 %}
{% embed_file maskedtextbox/appearance/fillMode/app.tsx preview %}
{% embed_file maskedtextbox/appearance/fillMode/main.tsx %}
{% embed_file maskedtextbox/appearance/fillMode/styles.css %}
{% endmeta %}

## Border Radius

The MaskedTextBox enables you to apply different `border radius` to the component through the [`rounded`](slug:api_inputs_maskedtextboxprops#rounded) property.

The [`rounded`](slug:api_inputs_maskedtextboxprops#rounded) option supports the following values:

-   `small`
-   `medium` (Default)
-   `large`
-   `full`
-   `none` - Does not set a `className` for size

The following example demonstrates how to define the border radius of the MaskedTextBox.

{% meta height:140 %}
{% embed_file maskedtextbox/appearance/rounded/app.tsx preview %}
{% embed_file maskedtextbox/appearance/rounded/main.tsx %}
{% embed_file maskedtextbox/appearance/rounded/styles.css %}
{% endmeta %}

## Adornments

You can also render custom React Components like the Icon and Button by configuring the `prefix` and `suffix` props of the MaskedTextBox component and then implement custom functionality on top of them.

> For correct styling, wrap custom adornments in [`InputPrefix`]({% slug api_inputs_inputprefix %}) and [`InputSuffix`]({% slug api_inputs_inputsuffix %}) containers.

{% meta height:280 %}
{% embed_file maskedtextbox/appearance/adornments/func/app.tsx preview %}
{% embed_file maskedtextbox/appearance/adornments/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the MaskedTextBox](slug:api_inputs_maskedtextboxprops)
-   [MaskedTextBox `prefix` options](slug:api_inputs_maskedtextboxprops#prefix)
-   [MaskedTextBox `suffix` options](slug:api_inputs_maskedtextboxprops#suffix)
-   [MaskedTextBox `size` options](slug:api_inputs_maskedtextboxprops#size)
-   [MaskedTextBox `fillMode` options](slug:api_inputs_maskedtextboxprops#fillmode)
-   [MaskedTextBox `rounded` options](slug:api_inputs_maskedtextboxprops#rounded)
-   [Creating Custom Styles](slug:themebuilder)
