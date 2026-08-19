---
title: Separator
description: 'Add string or icon separators between groups of cells in the KendoReact OTPInput component.'
components: ['otpinput']
slug: separator_otpinput
position: 3
---

# OTPInput Separator

The OTPInput can visually group its cells and render a separator between each group. You control grouping with the [`groupLength`]({% slug api_inputs_otpinputprops %}#grouplength) prop and the separator character or icon with the [`separator`]({% slug api_inputs_otpinputprops %}#separator) prop.

## String Separators

Pass any string to the [`separator`]({% slug api_inputs_otpinputprops %}#separator) prop to render it between groups. The [`groupLength`]({% slug api_inputs_otpinputprops %}#grouplength) prop accepts:

-   A single `number` — all groups have the same length.
-   A `number[]` — each element sets the length of the corresponding group. The sum of all values must equal `length`.

<demo metaUrl="inputs/otpinput/separator/func/" height="200"></demo>

## Icon Separators

You can render a Kendo SVG icon as the separator by passing an [`OTPSeparatorIcon`]({% slug api_inputs_otpseparatoricon %}) object to the [`separator`]({% slug api_inputs_otpinputprops %}#separator) prop.

<demo metaUrl="inputs/otpinput/separator/icon/func/" height="200"></demo>

## Suggested Links

-   [API Reference of the OTPInput Props]({% slug api_inputs_otpinputprops %})
