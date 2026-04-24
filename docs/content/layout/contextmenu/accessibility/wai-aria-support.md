---
title: Wai-Aria Support
page_title: KendoReact ContextMenu Documentation | ContextMenu  Accessibility
description: "Get started with the KendoReact ContextMenu and learn about its accessibility support for WAI-ARIA, Section 508, and WCAG 2.1."
tags: telerik,kendoreact,accessibility,wai-aria,wcag
slug: accessibility_contextmenu
position: 100
---

# ContextMenu Accessibility



Out of the box, the Kendo React ContextMenu provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.


The ContextMenu is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 AA](https://www.w3.org/TR/WCAG22/) standards and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) for its `component` role, provides options for managing its focus and is tested against the most popular screen readers.

## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-context-menu` | `role=menu` | The context menu implements the `menu` role. |


Apart from the above, the ContextMenu element should implement the specification for a vertical **Menu** component.

[Menu accessibility specification]()

## Resources

[ARIA patterns Menu](https://www.w3.org/WAI/ARIA/apg/patterns/menu/)

## Section 508


The ContextMenu is fully compliant with the [Section 508 requirements](http://www.section508.gov/).

## Testing


The ContextMenu has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

> To report any accessibility issues, contact the team through the [Telerik Support System](https://www.telerik.com/account/support-center).

### Screen Readers


The ContextMenu has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| ----------- | ---- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |



## Keyboard Navigation

For more details about the ContextMenu component's keyboard navigation, refer to the article on [keyboard navigation in the ContextMenu component]({% slug keyboard_navigation_contextmenu %}).

## See Also

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
