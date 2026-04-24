---
title: Keyboard Navigation
page_title: KendoReact Signature Documentation | Keyboard Navigation
description: "Get started with the KendoReact Signature and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_signature
position: 110
---

# Keyboard Navigation


## Managing the Focus


The Signature is focusable by default, and follows the regular tab order of the page.


The maximize and clear buttons, if present, are included in the page tab order.


When the maximize button is pressed, the focus is trapped in the dialog. The focus is moved to the minimize button of the popup dialog. Then the order of tab presses is:


When the dialog is closed, the focus moves to the maximize button of the main signature.

## Keyboard Shortcuts

| Shortcut | Behavior |
| -------- | -------- |
| `Esc` | Closes the dialog if open. |



## See Also

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
