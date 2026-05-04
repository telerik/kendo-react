---
title: Wai-Aria Support
page_title: KendoReact Window Documentation | Window  Accessibility
description: "Get started with the KendoReact Window and learn about its accessibility support for WAI-ARIA, Section 508, and WCAG 2.1."
tags: telerik,kendoreact,accessibility,wai-aria,wcag
slug: accessibility_window
position: 100
---

# Window Accessibility



Out of the box, the Kendo React Window provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.


The Window is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 AA](https://www.w3.org/TR/WCAG22/) standards and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) for its `component` role, provides options for managing its focus and is tested against the most popular screen readers.

## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-window:not(.k-dialog)` | `role=dialog` | Announces the dialog role of the component. |
|  | `aria-labelledby=.k-window-title id` | Associate the title of the dialog. |
| `.k-overlay + .k-window` | `aria-modal=true` | Announces that the dialog is modal. Attribute is added only when the dialog is modal. |


Action buttons follow the **Button** specification.

[Button accessibility specification]({% slug accessibility_button %})

## Resources

[ARIA practices Modal Dialog Example](https://www.w3.org/WAI/ARIA/apg/example-index/dialog-modal/dialog)

## Section 508


The Window is fully compliant with the [Section 508 requirements](http://www.section508.gov/).

## Testing


The Window has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

> To report any accessibility issues, contact the team through the [Telerik Support System](https://www.telerik.com/account/support-center).

### Screen Readers


The Window has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| ----------- | ---- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |



## Keyboard Navigation

For more details about the Window component's keyboard navigation, refer to the article on [keyboard navigation in the Window component]({% slug keyboard_navigation_window %}).
## See Also
* [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
