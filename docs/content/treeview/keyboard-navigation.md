---
title: Keyboard Navigation
page_title: KendoReact TreeView Documentation | Keyboard Navigation
description: "Get started with the KendoReact TreeView and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_treeview
position: 110
---

# Keyboard Navigation


## Managing the Focus


The TreeView implements a roving tab index components strategy. On loading the TreeView, only the first node will contain `tabindex="0"` and the navigation keys will move the focus to other nodes and change the respective tabindex. When the focus is moved away from the TreeView, the `tabindex="0"` remains on the last focused node.

## Keyboard Shortcuts


The TreeView supports the following keyboard shortcuts:

| Shortcut | Behavior |
| -------- | -------- |
| `Enter` | Selects the focused tree view item when the selection mode is single or multiple. When the selection mode is multiple and there are other selected items, they get deselected. |
| `Space` | Checks the checkbox of the TreeView node. |
| `Up Arrow` | Goes to the previous tree node. The focus is moved to the previous node and its tabindex is set to `0`. |
| `Down Arrow` | Goes to the next tree node. The focus is moved to the next node and its tabindex is set to `0`. |
| `Left Arrow` | If the node is expanded, collapses it and the focus remains on the item. If the node is collapsed, the focus is moved to its parent. |
| `Right Arrow` | If the node is collapsed, expands it and the focus remains on the item. If the node is expanded, the focus is moved to the first child node. |
| `Home` | Moves the focus to the first node in the tree without opening or closing a node. |
| `End` | Moves the focus to the last node in the tree that is focusable without opening a node. |
| `Ctrl` (or `Cmd` on Mac) + `Enter` | Selects the focused item. When the item is already selected, it gets deselected. |
| Printable Characters | Typing `M` or any other printable character focuses the next or the first item in the list. |

## Resources

[WAI-ARIA Authoring Practices: Treeview Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/)

[WAI-ARIA Authoring Practices: Navigation Treeview](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-navigation/)



{% meta height:330 %}
{% embed_file keyboard/func/app.tsx preview %}
{% embed_file keyboard/func/main.tsx %}
{% endmeta %}

## See Also

* [Accessibility]({% slug accessibility_treeview %})
* [`onExpandChange`]({% slug api_treeview_treeviewexpandchangeevent %})
* [`onItemClick`]({% slug api_treeview_treeviewitemclickevent %})
* [`onCheckChange`]({% slug api_treeview_treeviewcheckchangeevent %})
* [React TreeView Overview]({% slug overview_treeview %}#react-treeview-overview)
* [API Reference of the TreeView]({% slug api_treeview_treeviewprops %})
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
