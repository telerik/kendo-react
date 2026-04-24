---
title: Keyboard Navigation
page_title: KendoReact MultiColumnComboBox Documentation | Keyboard Navigation
description: "Get started with the KendoReact MultiColumnComboBox and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_multicolumncombobox
position: 110
---

# Keyboard Navigation


## Keyboard Shortcuts

| Shortcut | Behavior |
| -------- | -------- |
| `Down Arrow` | Selects the next available item. |
| `Up Arrow` | Selects the previous available item. |
| `Alt/Opt(Mac) Down` | Opens pop up |
| `Alt/Opt(Mac) Up` or `Esc` | Closes popup |
| `Esc` | Clears the value if popup is not visible |


Typing in the input should focus matched item.


The Popup element of the component must implement the KB specification for a Popup List component.

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

[ARIA Authoring Practices: Combobox Pattern ](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)

[ARIA Authoring Practices: Listbox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)

[ARIA Authoring Practices: Editable Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-none/)



{% meta height:340 %}
{% embed_file multicolumncombobox/keyboard-navigation/func/app.tsx preview %}
{% embed_file multicolumncombobox/keyboard-navigation/func/main.tsx %}
{% endmeta %}

## See Also

* [API Reference of the MultiColumnComboBox]({% slug api_dropdowns_multicolumncomboboxprops %})
* [Accessibility]({% slug accessibility_multicolumncombobox %})
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
