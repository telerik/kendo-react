---
title: Wai-Aria Support
page_title: KendoReact Chip Documentation | Chip  Accessibility
description: "Get started with the KendoReact Chip and learn about its accessibility support for WAI-ARIA, Section 508, and WCAG 2.1."
tags: telerik,kendoreact,accessibility,wai-aria,wcag
slug: accessibility_chip
position: 100
---

# Chip Accessibility



Out of the box, the Kendo React Chip provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.


The Chip is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 AA](https://www.w3.org/TR/WCAG22/) standards and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) for its `component` role, provides options for managing its focus and is tested against the most popular screen readers.

## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `*:not(.k-chip-list) > .k-chip` | `role=button` | Announces that a chip is an optional inner component within the Chip list. |
| `*:not(.k-chip-list) > .k-chip.k-selected` | `aria-pressed=true` | Announces that the Chip has been selected. |
| `*:not(.k-chip-list) > .k-chip:not(.k-selected)` | `aria-pressed=false` | Announces that the Chip has not benn selected. |

## Resources

[WAI-ARIA Authoring Practices: Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)

## Section 508


The Chip is fully compliant with the [Section 508 requirements](http://www.section508.gov/).

## Testing


The Chip has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

> To report any accessibility issues, contact the team through the [Telerik Support System](https://www.telerik.com/account/support-center).

### Screen Readers


The Chip has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| ----------- | ---- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |



## Keyboard Navigation

For more details about the Chip component's keyboard navigation, refer to the article on [keyboard navigation in the Chip component]({% slug keyboard_navigation_chip %}).

## See Also

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
* [Learn about KendoReact Free.](slug:free_components_introduction)
