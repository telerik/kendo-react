---
title: Keyboard Navigation
page_title: KendoReact Popover Documentation | Keyboard Navigation
description: "Get started with the KendoReact Popover and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_popover
position: 110
---

# Keyboard Navigation


## Managing the Focus


When the Popover does not contain focusable elements, it is not focusable and acts as a Tooltip component. When the Popover contains focusable elements, and gets opened, the first focusable element within the Popover content is focused. Focus is trapped and wrapped in the Popover content. Upon closing the Popover through the keyboard or by interacting with an element within the Popover content, focus is returned back to the anchor element.

## Keyboard Shortcuts

| Shortcut | Behavior |
| -------- | -------- |
| `Escape` | Dismisses the Popover. |

## Resources

[ARIA Authoring Practices: Tooltip Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)

[WAI-ARIA: Dialog Role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)



## See Also
* [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
