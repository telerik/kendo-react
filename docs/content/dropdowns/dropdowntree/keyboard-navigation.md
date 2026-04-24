---
title: Keyboard Navigation
page_title: KendoReact DropDownTree Documentation | Keyboard Navigation
description: "Get started with the KendoReact DropDownTree and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_dropdowntree
position: 110
---

# Keyboard Navigation


## Keyboard Shortcuts


This section lists the keyboard shortcuts supported by the DropDownTree composite elements.

### DropDownTree Wrapping Element


The following table summarizes the keyboard combinations and input behavior supported by the DropDownTree wrapper element:

| Shortcut | Behavior |
| -------- | -------- |
| `Down Arrow` | Selects the next available item. |
| `Up Arrow` | Selects the previous available item. |
| `Alt/Opt(Mac) Down` | Opens the popup. |
| `Alt` (or `Opt` on Mac) + `Up Arrow` or `Esc` | `Closes the popup. |
| `Enter` | Selects and confirms the focused item. |
| `Esc` | Clears the value when the popup is not open. |

### Listbox Popup


The `treeview` element inside the popup must implement the keyboard navigation specification for a TreeView component:

[TreeView  specification]({% slug keyboard_navigation_treeview %})

## Resources

[WAI-ARIA Authoring Practices: Combobox Pattern ](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)

[WAI-ARIA Authoring Practices: Select-Only Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/)

[WAI-ARIA Authoring Practices: Navigation Treeview](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-navigation/)



{% meta height:400 %}
{% embed_file dropdowntree/basic/func/app.tsx preview %}
{% embed_file dropdowntree/basic/func/main.tsx %}
{% embed_file dropdowntree/basic/func/overview-styles.css %}
{% endmeta %}

## See Also

* [API Reference of the DropDownTree]({% slug api_dropdowns_dropdowntreeprops %})
* [Accessibility]({% slug accessibility_dropdowntree %})
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
