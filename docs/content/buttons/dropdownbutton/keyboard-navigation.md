---
title: Keyboard Navigation
page_title: KendoReact DropDownButton Documentation | Keyboard Navigation
description: "Get started with the KendoReact DropDownButton and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_dropdownbutton
position: 110
---

# Keyboard Navigation


## Managing the Focus


The DropDownButton is a single tab stop component.

## Keyboard Shortcuts


This section lists the keyboard shortcuts supported by the DropDownButton composite elements.

### Main Button Element


The following table summarizes the keyboard combinations and input behavior supported by the main DropDownButton `button` element:

| Shortcut | Behavior |
| -------- | -------- |
| `Alt` + `Down Arrow` | Opens the DropDownButton popup and moves the focus to its first `menuitem` element. |
| `Enter` | Opens the DropDownButton popup and moves the focus to its first `menuitem` element. |
| `Space` | Opens the DropDownButton popup and moves the focus to its first `menuitem` element. |

### Popup Menu Element


The following table summarizes the keyboard combinations and input behavior supported by the popup `menu` element of the DropDownButton:

| Shortcut | Behavior |
| -------- | -------- |
| `Alt` + `Up Arrow` | Closes the popup and moves the focus back to the main `button` element. |
| `Esc` | Closes the popup and moves the focus back to the main button element. |
| `Down Arrow` | Moves the focus to the next `menuitem` element. If the focus is on the last menu item, moves the focus to the first menu item. |
| `Up Arrow` | Moves the focus to the previous `menuitem` element. If the focus is on the first menu item, moves the focus to the last menu item. |
| `Home` | Moves the focus to the first `menuitem` element. |
| `End` | Moves the focus to the last `menuitem` element. |
| `Enter` | Clicks (activates) the currently active `menuitem` element and closes the popup. |
| `Space` | Clicks (activates) the currently active `menuitem` element and closes the popup. |

## Resources

[WAI-ARIA Authoring Practices: Navigation Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/examples/menu-button-links/)



The following example demonstrates the DropDownButton keyboard navigation in action.

{% meta height:280 %}
{% embed_file dropdownbutton/keyboard/func/app.tsx preview %}
{% embed_file dropdownbutton/keyboard/func/main.tsx %}
{% endmeta %}

## See Also

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
* [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)
