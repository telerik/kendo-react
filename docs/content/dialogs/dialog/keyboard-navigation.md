---
title: Keyboard Navigation
page_title: KendoReact Dialog Documentation | Keyboard Navigation
description: "Get started with the KendoReact Dialog and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_dialog
position: 110
---

# Keyboard Navigation



The dialog component should implement tab key trap to allow navigation in the dialog. Only the `x` button in the dialog element is included in the tab sequence. The dialog itself is not a focusable element. By default, on open the focus goes to the first focusable element in the content, or the primary action button if there is no focusable element in the content.

## Keyboard Shortcuts

### Button element

| Shortcut | Behavior |
| -------- | -------- |
| `Tab` | Focus is moved between the elements in the dialog and is trapped into the component. |
| `Escape` | Closes the dialog. When the dialog is modal, the focus should be returned to the element that triggered the open. |

## Resources

[ARIA Authoring Practices: Modal Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)



The following example is based on the official [accessibility standard](https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html) for a modal dialog.

{% meta height:450 %}
{% embed_file dialog/keyboard-navigation/func/app.tsx preview %}
{% embed_file dialog/keyboard-navigation/func/main.tsx %}
{% endmeta %}

## See Also
* [Learn about KendoReact Free.](slug:free_components_introduction)

* [Get Started with the Dialog]({% slug overview_dialog %})
* [API Reference of the Dialog]({% slug api_dialogs %})
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
