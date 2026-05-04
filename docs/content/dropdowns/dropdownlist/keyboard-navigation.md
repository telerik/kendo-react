---
title: Keyboard Navigation
page_title: KendoReact DropDownList Documentation | Keyboard Navigation
description: "Get started with the KendoReact DropDownList and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_dropdownlist
position: 110
---

# Keyboard Navigation


## Keyboard Shortcuts


The DropDownList supports the following keyboard shortcuts:

| Shortcut | Behavior |
| -------- | -------- |
| `Down Arrow` | Selects the next available item. |
| `Up Arrow` | Selects the previous available item. |
| `Home` | Selects the first available item. Shortcut is not applicable when the current focused item is the filter textbox. Then focused is in a textbox, home and end keys control the cursor position. |
| `End` | Selects the last available item. Shortcut is not applicable when the current focused item is the filter textbox. Then focused is in a textbox, home and end keys control the cursor position. |
| `Enter` | Opens popup |
| `Space` | Opens popup |
| `Alt/Opt(Mac) Down` | Opens popup |
| `Alt/Opt(Mac) Up` or `Esc` | `Closes popup |
| `printable characters` | Typing "M" or any other printable character should select the next or first item in the list. Swiftly typing should capture multiple printable characters after the first one. |


The Popup element of the component must implement the KB specification for a Popup List component:

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

[WAI-ARIA Authoring Practices: Select-Only Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/)



{% meta height:440 %}
{% embed_file dropdownlist/basic/func/app.tsx preview %}
{% embed_file dropdownlist/basic/func/main.tsx %}
{% endmeta %}

## See Also
* [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

* [API Reference of the DropDownList]({% slug api_dropdowns_dropdownlistprops %})
* [Accessibility]({% slug accessibility_dropdownlist %})
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
