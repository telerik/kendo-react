---
title: WAI-ARIA Support
page_title: KendoReact OTPInput Documentation | OTPInput Accessibility
description: 'Get started with the KendoReact OTPInput and learn about its accessibility support for WAI-ARIA, Section 508, and WCAG 2.2.'
tags: telerik,kendoreact,accessibility,wai-aria,wcag
slug: accessibility_otpinput
position: 100
---

# OTPInput Accessibility

Out of the box, the KendoReact OTPInput provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The OTPInput is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 AA](https://www.w3.org/TR/WCAG22/) standards and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) for its `group` role, provides options for managing its focus and is tested against the most popular screen readers.

## WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements.

> To prevent sensitive information exposure, the [`autocomplete` attribute is disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#off) by default.

### OTP Container

| Selector | Attribute    | Usage                             |
| -------- | ------------ | --------------------------------- |
| `.k-otp` | `role=group` | Sets the proper role for the OTP. |

### Hidden Value Input

The OTPInput renders a hidden `<input>` element that holds the aggregated value of all cells. It is invisible to assistive technologies.

| Selector         | Attribute          | Usage                                                 |
| ---------------- | ------------------ | ----------------------------------------------------- |
| `.k-otp > input` | `type=hidden`      | The hidden input holding the combined OTPInput value. |
| `.k-otp > input` | `aria-hidden=true` | Hides the hidden input from assistive technologies.   |

### Input Cells

| Selector                                                                                          | Attribute                                  | Usage                                                                                                      |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| `.k-otp .k-otp-input > .k-input-inner`                                                            | `aria-label` / `aria-labelledby`           | Each cell requires an accessible name. Provide a label via the `label` prop or `aria-label`.               |
| `.k-otp .k-otp-input > .k-input-inner`                                                            | `autocomplete=off`                         | Disables browser autocomplete on individual cells by default.                                              |
| `.k-otp .k-otp-input > .k-input-inner`                                                            | `aria-describedby`                         | Points to the hint or error message for the OTPInput. Present only when a hint or validation error is set. |
| `.k-otp.k-invalid .k-otp-input > .k-input-inner, .k-otp.ng-invalid .k-otp-input > .k-input-inner` | `aria-invalid=true`                        | Rendered only when the OTPInput is in a form and its value is invalid.                                     |
| `.k-otp.k-disabled .k-otp-input > .k-input-inner`                                                 | `disabled=disabled` / `aria-disabled=true` | Rendered only when the OTPInput is disabled.                                                               |

## Resources

[WAI-ARIA Authoring Practices — Group Role](https://www.w3.org/WAI/ARIA/apg/patterns/)

## Section 508

The OTPInput is fully compliant with the [Section 508 requirements](http://www.section508.gov/).

## Testing

The OTPInput has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

> To report any accessibility issues, contact the team through the [Telerik Support System](https://www.telerik.com/account/support-center).

### Screen Readers

The OTPInput has been tested with the following screen readers and browser combinations:

| Environment    | Tool |
| -------------- | ---- |
| Firefox        | NVDA |
| Chrome         | JAWS |
| Microsoft Edge | JAWS |

## Keyboard Navigation

For more details about the OTPInput keyboard navigation, refer to the article on [keyboard navigation in the OTPInput component]({% slug keyboard_navigation_otpinput %}).

## See Also

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)
-   [Accessibility in KendoReact]({% slug overview_accessibilty %})
-   [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
