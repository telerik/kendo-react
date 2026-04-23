---
title: Keyboard Navigation
page_title: KendoReact ComboBox Documentation | Keyboard Navigation
description: "Get started with the KendoReact ComboBox and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_combobox
position: 110
---

# Keyboard Navigation


## Keyboard Shortcuts


This section lists the keyboard shortcuts supported by the ComboBox composite elements.

### ComboBox Wrapping Element


The following table summarizes the keyboard combinations and input behavior supported by the ComboBox wrapper element:

| Shortcut | Behavior |
| -------- | -------- |
| Typing in the input | Focuses the matched item. |
| `Down Arrow` | Highlights the next available item. |
| `Up Arrow` | Highlights the previous available item. |
| `Enter` | Selects the focused item. |
| `Alt` (or `Opt` on Mac) + `Down` | Opens the popup. |
| `Alt` (or `Opt` on Mac) + `Up` or `Esc` | Closes the popup. |
| `Esc` | If the popup is not visible, clears the value. |

### Listbox Popup


The popup element of the ComboBox has to implement the keyboard navigation specification for a Popup List component.

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

[WAI-ARIA Authoring Practices: Listbox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)

[WAI-ARIA Authoring Practices: Editable Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-none/)



{% meta height:340 %}
{% embed_file combobox/keyboard-navigation/func/app.tsx preview %}
{% embed_file combobox/keyboard-navigation/func/main.tsx %}
{% endmeta %}

## See Also

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
