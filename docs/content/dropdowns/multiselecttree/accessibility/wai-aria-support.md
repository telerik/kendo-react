---
title: Wai-Aria Support
page_title: KendoReact MultiSelectTree Documentation | MultiSelectTree  Accessibility
description: "Get started with the KendoReact MultiSelectTree and learn about its accessibility support for WAI-ARIA, Section 508, and WCAG 2.1."
tags: telerik,kendoreact,accessibility,wai-aria,wcag
slug: accessibility_multiselecttree
position: 100
---

# MultiSelectTree Accessibility



Out of the box, the Kendo React MultiSelectTree provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.


The MultiSelectTree is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 AA](https://www.w3.org/TR/WCAG22/) standards and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) for its `component` role, provides options for managing its focus and is tested against the most popular screen readers.

## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### MultiSelectTree Wrapping Element

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-multiselecttree` | `role=combobox` | Announces the presence of a combobox as inner element of the multiselect used for filtering. |
|  | `label for` or `aria-label` or `aria-labelledby` | The input needs an accessible name to be assigned to it. |
|  | `aria-haspopup=tree` | Indicates the presence of a tree popup. |
|  | `aria-expanded=true/false` | Announces the state of the visibility of the popup. |
|  | `aria-controls=.k-treeview id` | Points to the treeview element. Signifies that the `combobox` element controls the `treeview`. |
|  | `aria-autocomplete=list` | Attribute is rendered and value is set to list when **filtering** feature is enabled. |
|  | `aria-describedby=.k-chip-list id` | Points to the taglist element that contains the selected items. |
|  | `aria-readonly=true` | Attribute is rendered only when the multiselect is readonly. |
|  | `aria-invalid=true` | Attribute is rendered only when the multiselect is in form and announces the valid state of the component. |
|  | `aria-busy=true` | Attribute is rendered only when the multiselect is loading data. |
|  | `tabindex=0` | The element should be focusable. |
| `.k-multiselecttree.k-disabled` | `aria-disabled=true` | Attribute is rendered only when the multiselect is disabled. |
| `.k-input-button` | `role=button` | The element should either be a `<button>` element or should have `role="button"` assigned. |
|  | `aria-label` | The button needs an accessible name to be assigned to it. |
|  | `tabindex=-1` | Button element should not be focusable. |

### Popup

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-animation-container` | `role=region` | When the component container is appended to the `<body>` element of the document, it needs a landmark role to be assigned to it. Otherwise, it should be appended to an element with an appropriate landmark role. |
|  | `aria-label` or `aria-labelledby` | Provides a label when the container has a `region` role assigned. |

### TreeView


The Tree placed in the Popup element of the component should implement the specification for a **TreeView** component.

[TreeView accessibility specification]({% slug accessibility_treeview %})

## Resources

[ARIA practices: TreeView Example](https://www.w3.org/WAI/ARIA/apg/example-index/treeview/treeview-navigation)

[ARIA practices: Select-Only Combobox Example](https://www.w3.org/WAI/ARIA/apg/example-index/combobox/combobox-select-only.html)

## Section 508


The MultiSelectTree is fully compliant with the [Section 508 requirements](http://www.section508.gov/).

## Testing


The MultiSelectTree has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

> To report any accessibility issues, contact the team through the [Telerik Support System](https://www.telerik.com/account/support-center).

### Screen Readers


The MultiSelectTree has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| ----------- | ---- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |



## Keyboard Navigation

For more details about the MultiSelectTree component's keyboard navigation, refer to the article on [keyboard navigation in the MultiSelectTree component]({% slug keyboard_navigation_multiselecttree %}).

## See Also

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
