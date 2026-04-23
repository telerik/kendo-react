---
title: Keyboard Navigation
page_title: KendoReact AutoComplete Documentation | Keyboard Navigation
description: "Get started with the KendoReact AutoComplete and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_autocomplete
position: 110
---

# Keyboard Navigation


## Keyboard Shortcuts


This section lists the keyboard shortcuts supported by the AutoComplete composite elements.

### AutoComplete Wrapping Element


The following table summarizes the keyboard combinations and input behavior supported by the AutoComplete wrapper element:

| Shortcut | Behavior |
| -------- | -------- |
| Typing in the input | Focuses the matched item. |
| `Alt` (or `Opt` on Mac) + `Down Arrow` | Opens the popup. |
| `Alt` (or `Opt` on Mac) + `Up Arrow` or `Esc` | Closes the popup. |
| `Esc` | Resets the value in the input when the popup is closed. |
| `Enter` | Triggers the `change` event. |

### Listbox Popup


The popup element of the AutoComplete has to implement the keyboard navigation specification for a Popup List component.

| Shortcut | Behavior |
| -------- | -------- |
| `Down Arrow` | Moves the focus to the next item. |
| `Up Arrow` | Moves the focus to the previous item. |
| `Alt` (or `Opt` on Mac) + `Up Arrow` or `Esc` | Closes the popup. |
| `Home` | Moves the focus to the first item. Applicable only when the currently focused element is not an input. When an input is the focused element, the `Home` and `End` keys are used for the cursor position. |
| `End` | Moves the focus to the last item. Applicable only when the currently focused element is not an input. When an input is the focused element, the `Home` and `End` keys are used for the cursor position. |
| `Enter` | Selects the item. |
| `Page Up` | Scrolls the popup list up. |
| `Page Down` | Scrolls the popup list down. |
| `Tab` | Closes the popup and focuses the next focusable element. |

## Resources

[WAI-ARIA Authoring Practices: Combobox Pattern ](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)

[WAI-ARIA Authoring Practices: Editable Combobox With List Autocomplete](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/)

[WAI-ARIA Authoring Practices: Listbox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)



{% meta height:280 %}
{% embed_file autocomplete/keyboard-navigation/func/app.tsx preview %}
{% embed_file autocomplete/keyboard-navigation/func/main.tsx %}
{% endmeta %}

## See Also
* [Learn about KendoReact Free.](slug:free_components_introduction)

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
