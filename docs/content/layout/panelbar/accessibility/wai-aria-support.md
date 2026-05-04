---
title: Wai-Aria Support
page_title: KendoReact Panelbar Documentation | Panelbar  Accessibility
description: "Get started with the KendoReact Panelbar and learn about its accessibility support for WAI-ARIA, Section 508, and WCAG 2.1."
tags: telerik,kendoreact,accessibility,wai-aria,wcag
slug: accessibility_panelbar
position: 100
---

# Panelbar Accessibility



Out of the box, the Kendo React PanelBar provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.


The PanelBar is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 AA](https://www.w3.org/TR/WCAG22/) standards and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) for its `component` role, provides options for managing its focus and is tested against the most popular screen readers.

## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-panelbar` | `role=tree` | The root element of the PanelBar has role `tree`. |
|  | `aria-activedescendant=.k-item id` | Points to the currently focused item in the PanelBar. |
| `.k-panelbar-group` | `role=group` | The `ul` element that wraps child nodes. |
| `[aria-expanded='false']>.k-panelbar-group` | `aria-hidden=true` | Hides the `group` element from assistive technologies when its parent is not expanded. |
| `.k-item` | `role=treeitem` | The `li` element rendered for a PanelBar item. |
|  | `aria-expanded=true/false` | Announces the expanded state of the item (if expandable). It is `true` when expanded, and `false` when collapsed. |
|  | `aria-selected=true/false` | Announces the selected state of the item. |

## Resources

[ARIA practices Navigation Treeview Example](https://www.w3.org/WAI/ARIA/apg/example-index/treeview/treeview-navigation.html)

## Section 508


The PanelBar is fully compliant with the [Section 508 requirements](http://www.section508.gov/).

## Testing


The PanelBar has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

> To report any accessibility issues, contact the team through the [Telerik Support System](https://www.telerik.com/account/support-center).

### Screen Readers


The PanelBar has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| ----------- | ---- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |



## Keyboard Navigation

For more details about the Panelbar component's keyboard navigation, refer to the article on [keyboard navigation in the Panelbar component]({% slug keyboard_navigation_panelbar %}).

## See Also
* [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
