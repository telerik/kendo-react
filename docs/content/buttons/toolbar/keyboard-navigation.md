---
title: Keyboard Navigation
page_title: KendoReact Toolbar Documentation | Keyboard Navigation
description: "Get started with the KendoReact Toolbar and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_toolbar
position: 110
---

# Keyboard Navigation


## Managing the Focus


The ToolBar is a single tab stop component. All focus movements inside the ToolBar are managed according to the logic of the roving tabindex. When the user navigates through the tabs, the ToolBar focuses either the first tool or the tool that was focused last.

## Keyboard Shortcuts


For scenarios where inputs, or comboboxes appear in the ToolBar, you must wrap them in focusable wrappers. To activate the inner component navigation, the user must press `Enter`. To return the focus to the wrapper and activate again the TolBar navigation, the user must press `Esc`.


For nested ToolBar components, refer to their respective keyboard navigation specification. The CommandOverflow menu must acquire the same behavior as the DropDownButton.

### ToolBar

| Shortcut | Behavior |
| -------- | -------- |
| `Tab` | Moves the focus to and from the ToolBar. |
| `Right Arrow` | Moves the focus to the next focusable element in the ToolBar. Focuses the first element if the end of the ToolBar is reached. |
| `Left Arrow` | Moves the focus to the previous focusable element in the ToolBar. Focuses the last element if the beginning of the ToolBar is reached. |
| `Home` | Moves the focus to the first focusable element. |
| `End` | Moves the focus to the last focusable element. |
| `Enter` | Clicks the currently active button or changes the state of the currently active toggleable button. If the active tool is represented by an `<input>` element, enters the inner navigation mode of the tool. |
| `Esc` | If the active tool is represented by an `<input>` element and its inner navigation is active, deactivates the tool navigation and returns the focus to the ToolBar. |
| `Alt` + `Down Arrow` | Opens the currently active SplitButton, DropDownButton, or CommandOverflow. |
| `Alt` + `Up Arrow` | Closes the currently active SplitButton, DropDownButton, or CommandOverflow. |

## Resources

[WAI-ARIA Authoring Practices: Toolbar Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/)



## See Also

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
