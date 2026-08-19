---
title: Appearance
description: 'Configure the size, fill mode, roundness, spacing, and length of the KendoReact OTPInput component.'
components: ['otpinput']
slug: appearance_otpinput
position: 6
---

# Appearance

The OTPInput exposes a set of appearance props that let you match the component to your application's visual design.

Apart from the default vision of the OTPInput, these alternative styling options enable you to configure each individual aspect of the appearance of a OTPInput.

-   [Size](#size)
-   [Rounded](#rounded)
-   [Fill Mode](#fill-mode)
-   [Spacing](#spacing)
-   [Length](#length)

The following example demonstrates all the available appearance options of the OTPInput in a single, configurable demo.

{% meta height:220 %}
{% embed_file otpinput/appearance/func/app.tsx preview %}
{% embed_file otpinput/appearance/func/main.tsx %}
{% endmeta %}

## Size

The KendoReact OTPInput enables you to configure the [`size`]({% slug api_inputs_otpinputprops %}#size) of the component.

The `size` option supports the following values:

-   `small`
-   `medium` (Default)
-   `large`

The following example demonstrates the available `size` options.

<demo metaUrl="inputs/otpinput/appearance/size/" height="260"></demo>

## Rounded

The KendoReact OTPInput allows you to define different border radius styles by using the [`rounded`]({% slug api_inputs_otpinputprops %}#rounded) property.

The `rounded` option supports the following values:

-   `small`
-   `medium` (Default)
-   `large`
-   `full`
-   `none`

The following example demonstrates the available `rounded` options.

<demo metaUrl="inputs/otpinput/appearance/rounded/" height="260"></demo>

## Fill Mode

The KendoReact OTPInput allows you to set the cell background and border style by using the [`fillMode`]({% slug api_inputs_otpinputprops %}#fillMode) property.

The `fillMode` option supports the following values:

-   `solid` (Default)
-   `flat`
-   `outline`

The following example demonstrates the available `fillMode` options.

<demo metaUrl="inputs/otpinput/appearance/fill-mode/" height="260"></demo>

## Spacing

By default, adjacent cells have a small gap between them. Set [`spacing`]({% slug api_inputs_otpinputprops %}#spacing) to `false` to remove the gap and render cells flush against each other.

The following example demonstrates both `spacing` options.

<demo metaUrl="inputs/otpinput/appearance/spacing/" height="260"></demo>

## Length

The [`length`]({% slug api_inputs_otpinputprops %}#length) prop controls the total number of individual input cells. The default value is `4`.

The following example demonstrates how to configure the OTPInput length.

<demo metaUrl="inputs/otpinput/appearance/length/" height="300"></demo>

## Suggested Links

-   [API Reference of the OTPInput Props]({% slug api_inputs_otpinputprops %})
