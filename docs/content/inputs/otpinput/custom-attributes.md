---
title: Custom Attributes
description: 'Apply custom HTML attributes to the input cells of the KendoReact OTPInput component.'
components: ['otpinput']
slug: custom_attributes_otpinput
position: 9
---

# OTPInput Custom Attributes

The [`inputAttributes`]({% slug api_inputs_otpinputprops %}#inputattributes) prop accepts a plain object whose key-value pairs are applied as HTML attributes to every individual input cell rendered by the OTPInput.

A common use case is setting `autocomplete="one-time-code"` to enable browser autofill for OTP codes delivered via SMS.

```tsx
<OTPInput inputAttributes={{ autoComplete: 'one-time-code' }} />
```

The following example demonstrates custom attributes in action. Inspect the rendered `<input>` elements in your browser's DevTools to verify the attribute is applied.

<demo metaUrl="inputs/otpinput/custom-attributes/func/" height="280"></demo>

## Suggested Links

-   [API Reference of the OTPInput Props]({% slug api_inputs_otpinputprops %})
