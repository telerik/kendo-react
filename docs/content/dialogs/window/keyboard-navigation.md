---
title: Keyboard Navigation
page_title: KendoReact Window Documentation | Keyboard Navigation
description: "Get started with the KendoReact Window and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_window
position: 100
---

# Keyboard Navigation


## Managing the Focus


 - Initial focus - When opened, the Window should be focused.
 - Action buttons are accessed with `Tab` key
 - Tab Key Trap is implemented for modal windows

## Keyboard Shortcuts

| Shortcut | Behavior |
| -------- | -------- |
| `Alt/Opt(Mac) + DownArrow` | Minimizes or restores the state, if the focused element is the window |
| `Alt/Opt(Mac) + UpArrow` | Maximizes or restores the state, if the focused element is the window |
| `Arrow Keys` | Move the window to the respective direction (UP |
| `Ctrl/Cmd(Mac) + UpArrow` | Decreases the height of the window triggering the resizing capabilities. Applicable only when the component is resizable. |
| `Ctrl/Cmd(Mac) + DownArrow` | Increases the height of the window triggering the resizing capabilities. Applicable only when the component is resizable. |
| `Ctrl/Cmd(Mac) + LeftArrow` | Decreases the width of the window triggering the resizing capabilities. Applicable only when the component is resizable. |
| `Ctrl/Cmd(Mac) + RightArrow` | Increases the width of the window triggering the resizing capabilities. Applicable only when the component is resizable. |
| `Escape` | Closes the window. When the window is modal, the focus should be returned to the element that triggered the open. |

## Resources

[ARIA Authoring Practices: Modal Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)



{% meta height:550 %}
{% embed_file window/overview/func/app.tsx preview %}
{% embed_file window/overview/func/main.tsx %}
{% endmeta %}

## See Also
* [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
