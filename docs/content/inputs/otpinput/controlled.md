---
title: Controlled Mode
description: 'Learn how to set the KendoReact OTPInput in controlled mode.'
components: ['otpinput']
slug: controlled_otpinput
position: 1
---

# Controlled Mode

By default, the KendoReact OTPInput operates in uncontrolled mode and manages its own internal value state.

## Controlling the Value

To place the OTPInput in controlled mode:

1. Set its [`value`]({% slug api_inputs_otpinputprops %}#value) property.
1. Handle the [`onChange`]({% slug api_inputs_otpinputprops %}#onchange) event and update the value in your component state.

The following example demonstrates controlled mode, including programmatic value setting and clearing via buttons.

<demo metaUrl="inputs/otpinput/controlled/func/" height="220"></demo>

## Suggested Links

-   [API Reference of the OTPInput Props]({% slug api_inputs_otpinputprops %})
