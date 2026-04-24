---
title: Keyboard Navigation
page_title: KendoReact MultiSelect Documentation | Keyboard Navigation
description: "Get started with the KendoReact MultiSelect and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_multiselect
position: 110
---

# Keyboard Navigation


## Keyboard Shortcuts


This section lists the keyboard shortcuts supported by the MultiSelect and its composite elements.

### MultiSelect Wrapping Element


The following table summarizes the keyboard shortcuts and input behavior supported by the MultiSelect wrapper element:

| Shortcut | Behavior |
| -------- | -------- |
| Typing in the input | Focuses the matched item. |
| `Alt` (or `Opt` on Mac) + `Down` | Opens the popup. |
| `Alt` (or `Opt` on Mac) + `Up` or `Esc` | Closes the popup. |
| `Left Arrow` | Focuses the previous tag item in the selected list. |
| `Right Arrow` | Focuses the next tag item in the selected list. |
| `Delete` or `Backspace` | When the focused item is a tag list, removes the item from the selection. |
| `Esc` | Clears the value when the popup is not open. |

### Listbox Popup

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


The listbox placed in the popup element of the MultiSelect has to implement the keyboard navigation specification for a Popup List component. In addition to the above-mentioned combinations, the listbox also supports the shortcuts listed in the following table. Note that the combinations including the `Shift` key are based on the behavior of the Windows File Explorer.

| Shortcut | Behavior |
| -------- | -------- |
| `Shift` + `Up Arrow` | Creates a range selection between the last selected or deselected item and the item that is immediately before the currently focused one. All items outside that range are deselected. The last selected or deselected item is stored when using the mouse to click an item, or when using `Enter` to select or deselect an item. The last selected or deselected item is reset when the value of the MultiSelect is cleared. If the there is no previously selected item, selects only the currently focused and the previous one. At the end of the operation, the focus moves to the the item that is immediately before the currently focused one. |
| `Shift` + `Down Arrow` | Creates a range selection between the last selected or deselected item and the item that is immediately after the currently focused one. All items outside that range are deselected. The last selected or deselected item is stored when using the mouse to click an item, or when using `Enter` to select or deselect an item. The last selected or deselected item is reset when the value of the MultiSelect is cleared. If the there is no previously selected item, selects only the currently focused and the next one. At the end of the operation, the focus moves to the the item that is immediately after the currently focused one. |
| `Ctrl` (or `Cmd` on Mac) + `Shift` + `Home` | Creates a range selection from the currently focused item up to the beginning of the list. All items outside that range are deselected. |
| `Ctrl` (or `Cmd` on Mac) + `Shift` + `End` | Creates a range selection from the currently focused item down to the end of the list. All items outside that range are deselected. |
| `Ctrl` (or `Cmd` on Mac) + `A` | Selects all items present in the list. If all items are already selected, deselects them. |

## Resources

[WAI-ARIA Authoring Practices: Combobox Pattern ](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)

[WAI-ARIA Authoring Practices: Listbox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)

[WAI-ARIA Authoring Practices: Select-Only Combobox](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/)



{% meta height:300 %}
{% embed_file multiselect/controlled/func/app.tsx preview %}
{% embed_file multiselect/controlled/func/main.tsx %}
{% endmeta %}

## See Also
* [Learn about KendoReact Free.](slug:free_components_introduction)

* [API Reference of the MultiSelect]({% slug api_dropdowns_multiselectprops %})
* [Accessibility]({% slug accessibility_multiselect %})
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
