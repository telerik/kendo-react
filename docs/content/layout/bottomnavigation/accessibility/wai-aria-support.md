---
title: Wai-Aria Support
page_title: KendoReact BottomNavigation Documentation | BottomNavigation  Accessibility
description: "Get started with the KendoReact BottomNavigation and learn about its accessibility support for WAI-ARIA, Section 508, and WCAG 2.1."
tags: telerik,kendoreact,accessibility,wai-aria,wcag
slug: accessibility_bottomnavigation
position: 100
---

# BottomNavigation Accessibility



Out of the box, the Kendo React Bottom Navigation provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.


The Bottom Navigation is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 AA](https://www.w3.org/TR/WCAG22/) standards and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) for its `component` role, provides options for managing its focus and is tested against the most popular screen readers.

## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The Bottom Navigation component is a landmark `<nav>` element or an element with `role="navigation"`(https://www.w3.org/TR/wai-aria-1.2/#navigation). It contains an ordered list of navigation items. Each navigation item contains a link.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-bottom-nav` | `role=navigation` or `nodeName=nav` | The landmark role `navigation` must be assigned to the bottom navigation. |
| `.k-bottom-nav-item` | `role=link` or `nodeName=a` | Associate the link purpose of the bottom navigation items. |
| `.k-bottom-nav-item.k-selected` | `aria-current=true` | Associate the link purpose of the bottom navigation items. |

## Resources

[ARIA practices Navigation](https://www.w3.org/TR/wai-aria-1.2/#navigation)

## Section 508


The Bottom Navigation is fully compliant with the [Section 508 requirements](http://www.section508.gov/).

## Testing


The Bottom Navigation has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

> To report any accessibility issues, contact the team through the [Telerik Support System](https://www.telerik.com/account/support-center).

### Screen Readers


The Bottom Navigation has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| ----------- | ---- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |



## Keyboard Navigation

For more details about the BottomNavigation component's keyboard navigation, refer to the article on [keyboard navigation in the BottomNavigation component]({% slug keyboard_navigation_bottomnavigation %}).

## See Also
* [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
