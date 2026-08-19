---
title: Adaptive Rendering
description: 'Configure the on-screen keyboard for the KendoReact OTPInput to implement adaptiveness in your React projects.'
components: ['otpinput']
slug: adaptive_rendering_otpinput
position: 11
---

# Adaptive Rendering

The OTPInput does not require specific adaptive rendering, but you can use the [`inputAttributes`]({% slug api_inputs_otpinputprops %}#inputAttributes) property to enable the browser to show an input-specific on-screen keyboard.

## On-Screen Keyboard

To enhance the mobile user experience of your React apps, configure the type of on-screen keyboard for the OTPInput. Use the [`inputAttributes`]({% slug api_inputs_otpinputprops %}#inputAttributes) property to set the `inputMode` HTML attribute on every inner `<input>` element. Based on the `inputMode` setting, the browser will display the most appropriate virtual keyboard.

> Test the different virtual keyboard types by opening this example on a mobile device.

<demo metaUrl="inputs/otpinput/adaptive-rendering/func/" height="270"></demo>

## Suggested Links

-   [API Reference of the OTPInput Props]({% slug api_inputs_otpinputprops %})
-   [The `inputmode` Global Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)
