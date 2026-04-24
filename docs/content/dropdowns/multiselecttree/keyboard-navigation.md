---
title: Keyboard Navigation
page_title: KendoReact MultiSelectTree Documentation | Keyboard Navigation
description: "Get started with the KendoReact MultiSelectTree and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_multiselecttree
position: 110
---

# Keyboard Navigation


## Keyboard Shortcuts

| Shortcut | Behavior |
| -------- | -------- |
| `Down Arrow` | Selects the next available item. |
| `Up Arrow` | Selects the previous available item. |
| `Alt/Opt(Mac) Down` | Opens pop up |
| `Alt/Opt(Mac) Up` or `Esc` | `Closes popup |
| `Enter` | Selects and confirm the focused item. |
| `Space` | Selects and confirm the focused item. |
| `printable characters` | Typing "M" or any other printable character should select the next or first item in the list |
| `Esc` | Clears the value when the popup is not open. |


The TreeView element inside the Popup should implement the KB specification for a **TreeView** component.

[TreeView  specification]({% slug keyboard_navigation_treeview %})


 The items in the TreeView should not be selectable when used in the MultiSelectTreeView. Hence, when clicking (or pressing Enter/Space) on an item, it should not receive the `.k-selected` class.

## Resources

[ARIA Authoring Practices: Combobox Pattern ](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)

[ARIA Authoring Practices: Select-Only Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/)

[ARIA Authoring Practices: Navigation Treeview](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-navigation/)



{% meta height:400 %}
{% embed_file multiselecttree/basic/func/app.tsx preview %}
{% embed_file multiselecttree/basic/func/main.tsx %}
{% endmeta %}

## See Also

* [API Reference of the MultiSelectTree]({% slug api_dropdowns_multiselecttreeprops %})
* [Accessibility]({% slug accessibility_multiselecttree %})
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
