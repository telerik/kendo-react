---
title: Keyboard Navigation
page_title: KendoReact Flatcolorpicker Documentation | Keyboard Navigation
description: "Get started with the KendoReact Flatcolorpicker and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_flatcolorpicker
position: 110
---

# Keyboard Navigation


## Managing the Focus


The FlatColorPicker is a single-tab-stop component. Its inner navigation is activated by pressing the `Enter` key. In that case the focus remains trapped within the component elements. The user returns to page navigation by pressing `Esc`.

## Keyboard Shortcuts

### When wrapper is focused

| Shortcut | Behavior |
| -------- | -------- |
| `Enter` | Activates inner FlatColorPicker navigation. |
| `Tab` | Navigates to the next focusable element on the page. |
| `Shift` + `Tab` | Navigates to the previous focusable element on the page. |

### When inner navigation is activated

| Shortcut | Behavior |
| -------- | -------- |
| `Esc` | Moves focus back to wrapper element. Deactivates inner FlatColorPicker navigation. |
| `Tab` | Navigates to the next focusable element in the FlatColorPicker. If current focus is on the last element, moves focus to the first focusable item in the component. |
| `Shift` + `Tab` | Navigates to the previous focusable element in the FlatColorPicker. If current focus is on the first element, moves focus to the last focusable item in the component. |
| `Enter` | For button items, FlatColorPicker executes the currently focused button action. |

### Inner elements shortcuts


The inner elements implement the shortcuts for their component type. There are **ColorGradient**, **ColorPalette**, and **Button** elements. Note that the ColorGradient must expose directly its inner navigation when used in a FlatColorPicker (the wrapper must not be focusable itself).



The following example demonstrates the FlatColorPicker keyboard navigation.

{% meta height:580 %}
{% embed_file flatcolorpicker/basic/func/app.tsx preview %}
{% embed_file flatcolorpicker/basic/func/main.tsx %}
{% embed_file flatcolorpicker/basic/func/styles.css %}
{% endmeta %}

## See Also

* [API Reference of the FlatColorPicker]({% slug api_inputs_flatcolorpickerprops %})
* [Accessibility]({% slug accessibility_flatcolorpicker %})
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
