---
title: Wai-Aria Support
page_title: KendoReact ListBox Documentation | ListBox  Accessibility
description: "Get started with the KendoReact ListBox and learn about its accessibility support for WAI-ARIA, Section 508, and WCAG 2.1."
tags: telerik,kendoreact,accessibility,wai-aria,wcag
slug: accessibility_listbox
position: 100
---

# ListBox Accessibility



Out of the box, the Kendo React ListBox provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.


The ListBox is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 AA](https://www.w3.org/TR/WCAG22/) standards and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) for its `component` role, provides options for managing its focus and is tested against the most popular screen readers.

## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### ListBox List

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-list-ul` | `role=listbox` | Specifies the role of the ListBox `ul` element. |
|  | `aria-label` or `aria-labelledby` | Adds a label to the `ul` element of the ListBox. |
|  | `aria-multiselectable=true` | Signifies that the ListBox allows multiple selection. Present only when the multiple selection of the component is enabled. |
| `.k-list-item` | `role=option` | Specifies the role of the ListBox `item` element. |
|  | `aria-selected=true/false` | Set to `true` if the item is selected. |
|  | `tabindex=0` | The focused listbox item should have tabindex 0, while all others -1. |

### ListBox Toolbar


The ListBox toolbar follows the specification of the ToolBar component.

[ToolBar accessibility specification]({% slug accessibility_toolbar %})

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-listbox-actions` | `role=toolbar` | The toolbar is a collection of command buttons. |
|  | `aria-label` | Clarifies the purpose of the toolbar. |
|  | `aria-controls=.k-list-ul id` | Points to the ids of the `role=listbox` elements that are being controlled by the ToolBar. |
| `.k-listbox-actions .k-button` | `aria-label` or `title` | All buttons in the ToolBar must have lables, so that their purpose is clear. |

## Resources

[WAI-ARIA Authoring Practices: ListBox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)

## Section 508


The ListBox is fully compliant with the [Section 508 requirements](http://www.section508.gov/).

## Testing


The ListBox has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

> To report any accessibility issues, contact the team through the [Telerik Support System](https://www.telerik.com/account/support-center).

### Screen Readers


The ListBox has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| ----------- | ---- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |



## Keyboard Navigation

For more details about the ListBox component's keyboard navigation, refer to the article on [keyboard navigation in the ListBox component]({% slug keyboard_navigation_listbox %}).

## See Also

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
