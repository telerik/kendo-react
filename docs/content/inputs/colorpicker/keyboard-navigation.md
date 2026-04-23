---
title: Keyboard Navigation
page_title: KendoReact Colorpicker Documentation | Keyboard Navigation
description: "Get started with the KendoReact Colorpicker and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_colorpicker
position: 110
---

# Keyboard Navigation


## Keyboard Shortcuts

### When k-colorpicker element is focused

| Shortcut | Behavior |
| -------- | -------- |
| `Alt/Opt(Mac) Down` | Opens pop up |
| `Enter` | Opens pop up |
| `Alt/Opt(Mac) Up` or `Esc` | Closes popup |

### When focus is in the Popup


When opened, the Popup element uses Tab navigation to iterate over its inner elements. The focus remains trapped within the Popup. The inner elements (**ColorPlatte**, **ColorGradient** and **Buttons**s implement their own specification).

| Shortcut | Behavior |
| -------- | -------- |
| `Esc` | Closes Popup and moves focus back to k-colorpicker element. |
| `Tab` | Navigates to the next focusable element in the Popup. If current focus is on the last element, moves focus to the first focusable item in the Popup. |
| `Shift` + `Tab` | Navigates to the previous focusable element in the Popup. If current focus is on the first element, moves focus to the last focusable item in the Popup. |
| `Enter` | For button items, executes the currently focused button action. |

## Resources

[ARIA Authoring Practices: Combobox Pattern ](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)



{% embed_file colorpicker/keyboard/func/app.tsx preview %}
{% embed_file colorpicker/keyboard/func/main.tsx %}
{% endmeta %}


## Navigation Scenarios

When the popup of the ColorPicker is opened, it adopts the same keyboard shortcuts as the keyboard shortcuts of the [ColorPalette]({% slug keyboard_navigation_colorpalette %}) and [ColorGradient]({% slug overview_colorgradient %}).

## See Also

* [API Reference of the ColorPicker]({% slug api_inputs_colorpickerprops %})
* [Accessibility]({% slug accessibility_colorpicker %})
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
