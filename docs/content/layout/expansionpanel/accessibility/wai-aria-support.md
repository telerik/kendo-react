---
title: Wai-Aria Support
page_title: KendoReact ExpansionPanel Documentation | ExpansionPanel  Accessibility
description: "Get started with the KendoReact ExpansionPanel and learn about its accessibility support for WAI-ARIA, Section 508, and WCAG 2.1."
tags: telerik,kendoreact,accessibility,wai-aria,wcag
slug: accessibility_expansionpanel
position: 100
---

# ExpansionPanel Accessibility



Out of the box, the Kendo React ExpansionPanel provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.


The ExpansionPanel is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 AA](https://www.w3.org/TR/WCAG22/) standards and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) for its `component` role, provides options for managing its focus and is tested against the most popular screen readers.

## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### ExpansionPanel Wrapping Element

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-expander-header` | `role=button` | Sets the proper role for the ExpansionPanel component. |
|  | `aria-controls=.k-expander-content-wrapper id` | Points to the controlled element based on the given `id`. |
|  | `aria-expanded=true/false` | Indicates the expanded state of the ExpansionPanel. |
|  | `tabindex=0` | The element should be focusable. |
| `.k-disabled .k-expander-header` | `aria-disabled=true/false` | The attribute is rendered only when the ExpansionPanel is disabled. |

## Resources

[ARIA Practices: Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)

## Section 508


The ExpansionPanel is fully compliant with the [Section 508 requirements](http://www.section508.gov/).

## Testing


The ExpansionPanel has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

> To report any accessibility issues, contact the team through the [Telerik Support System](https://www.telerik.com/account/support-center).

### Screen Readers


The ExpansionPanel has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| ----------- | ---- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |



## Keyboard Navigation

For more details about the ExpansionPanel component's keyboard navigation, refer to the article on [keyboard navigation in the ExpansionPanel component]({% slug keyboard_navigation_expansionpanel %}).

## See Also
* [Learn about KendoReact Free.](slug:free_components_introduction)

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
