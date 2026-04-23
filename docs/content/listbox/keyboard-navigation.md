---
title: Keyboard Navigation
page_title: KendoReact ListBox Documentation | Keyboard Navigation
description: "Get started with the KendoReact ListBox and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_listbox
position: 110
---

# Keyboard Navigation


## Managing the Focus


The ListBox component contains a list of items and, optionally, a toolbar. When the toolbar is not enabled, the component is a single-tab-stop component. When the toolbar is present, it is included in the tab sequence of the page. Depending on its position and the LTR or RTL configuration, the toolbar can either preceed or succeed the list of ListBox items. Its tab position must respect its position on the screen.

## Keyboard Shortcuts

### `list` Element

| Shortcut | Behavior |
| -------- | -------- |
| `F10` | Focuses the ListBox toolbar (the last focused or the first button in it). |
| `Space` | Selects the focused ListBox Item |
| `Up Arrow` | Selects the previous item. |
| `Down Arrow` | Selects the next item. |
| `Ctrl` (or `Control` on Mac) + `Space` | Selects or deselects an item. |
| `Shift` + `Up Arrow` | Adds the previous item to the selected items. |
| `Shift` + `Down Arrow` | Adds the next item to the selected items. |
| `Ctrl` (or `Cmd` on Mac) + `Up Arrow` | Moves the focus to the previous item. |
| `Ctrl` (or `Cmd` on Mac) + `Down Arrow` | Moves the focus to the next item. |
| `Del` | Deletes the selected items. |
| `Ctrl` (or `Cmd` on Mac) + `Right Arrow` | Adds the selected items to the connected ListBox. |
| `Ctrl` (or `Cmd` on Mac) + `Left Arrow` | Adds the selected items from the connected ListBox to the current one. |
| `Ctrl` (or `Cmd` on Mac) + `Shift` + `Up Arrow` | Shifts the selected items upwards. |
| `Ctrl` (or `Cmd` on Mac) + `Shift` + `Down Arrow` | Shifts the selected items downwards. |
| `Ctrl` (or `Cmd` on Mac) + `Shift` + `Right Arrow` | Transfers all items to the connected ListBox. |
| `Ctrl` (or `Cmd` on Mac) + `Shift` + `Left Arrow` | Transfers all items from the connected ListBox. |

### `toolbar` Element

| Shortcut | Behavior |
| -------- | -------- |
| `Right Arrow` or `Down Arrow` | Focuses the next button in the toolbar. |
| `Left Arrow` or `Up Arrow` | Focuses the previous button in the toolbar. |
| `Enter` | Executes the currenly focused button command if enabled. |

## Resources

[WAI-ARIA Authoring Practices: Listbox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)



{% meta height:500 %}
{% embed_file keyboard-navigation/func/app.tsx preview %}
{% embed_file keyboard-navigation/func/main.tsx %}
{% endmeta %}

## See Also

* [API Reference of the ListBox]({% slug api_listbox_listboxprops %})
* [Accessibility]({% slug accessibility_listbox %})
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
* [Learn about KendoReact Free.](slug:free_components_introduction)
