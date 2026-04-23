---
title: Keyboard Navigation
page_title: KendoReact Contextmenu Documentation | Keyboard Navigation
description: "Get started with the KendoReact Contextmenu and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_contextmenu
position: 110
---

# Keyboard Navigation


## Managing the Focus


When the context menu is opened, the focus will go to the first item of the context menu. Only one node will have tabindex in the menu.Interaction on a `menuitem` should focus it.

## Keyboard Shortcuts

| Shortcut | Behavior |
| -------- | -------- |
| `Shift`+`F10` | When applied to a target, the command opens the ContextMenu. |
| `Up Arrow` | Focuses the previous item. |
| `Down Arrow` | Focuses the next item. |
| `Left Arrow` | <ul><li>(For root items) opens the item and focuses the last child.</li> <li>(For child items) closes and focuses the parent.</li></ul> |
| `Right Arrow` | If the item has children, opens the item and focuses the first child. For child items without children, focuses and opens the next root item. |
| `Escape` | Closes the ContextMenu and returns the focus to the target. |
| `Home` | Focuses the first item. |
| `End` | Focuses the last item. |
| `Enter` | Selects the focused item. If the item has children, opens the item and focuses the first child. If the item does not have children and has a URL, navigates to the specified URL. |
| `Space` | Selects the focused item. If the item has children, opens the item and focuses the first child. If the item does not have children and has a URL, navigates to the specified URL. |
| `Alphanumeric character` | Focuses the next item with text starting with the character. |

## Resources

[ARIA Authoring Practices: Menu Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/)

[ARIA Authoring Practices: Developing a Keyboard Interface](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/)



## See Also

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
