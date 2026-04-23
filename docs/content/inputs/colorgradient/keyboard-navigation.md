---
title: Keyboard Navigation
page_title: KendoReact Colorgradient Documentation | Keyboard Navigation
description: "Get started with the KendoReact Colorgradient and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_colorgradient
position: 110
---

# Keyboard Navigation


## Managing the Focus


The ColorGradient is a single-tab-stop component. Its inner navigation is activated by pressing the `Enter` key. In that case the focus remains trapped within the component elements. The user returns to page navigation by pressing `Esc`.

## Keyboard Shortcuts

### When wrapper is focused

| Shortcut | Behavior |
| -------- | -------- |
| `Enter` | Activates inner ColorGradient navigation. |
| `Tab` | Navigates to the next focusable element on the page. |
| `Shift` + `Tab` | Navigates to the previous focusable element on the page. |

### When inner navigation is activated

| Shortcut | Behavior |
| -------- | -------- |
| `Esc` | Moves focus back to wrapper element. Deactivates inner ColorGradient navigation. |
| `Tab` | Navigates to the next focusable element in the ColorGradient. If current focus is on the last element, moves focus to the first focusable item in the component. |
| `Shift` + `Tab` | Navigates to the previous focusable element in the ColorGradient. If current focus is on the first element, moves focus to the last focusable item in the component. |
| `Enter` | For button items, ColorGradient executes the currently focused button action. |

### Inner elements shortcuts


The inner elements implement the shortcuts for their component type. There are `k-draghandle` (**Slider**) elements and `k-numerictextbox` (**NumericTextBox**) elements.

### k-hsv-draghandle


Apart from the default implementation, there is a two-dimensional **Slider** element (`k-hsv-draghandle`) implementing the following arrow keys shortcuts:

| Shortcut | Behavior |
| -------- | -------- |
| `Arrow Up` | Moves slider up by large step. |
| `Arrow Down` | Moves slider down by large step. |
| `Arrow Left` | Moves slider left by large step. |
| `Arrow Right` | Moves slider right by large step. |
| `Shift` + `Arrow Up` | Moves slider up by small step. |
| `Shift` + `Arrow Down` | Moves slider down by small step. |
| `Shift` + `Arrow Left` | Moves slider left by small step. |
| `Shift` + `Arrow Right` | Moves slider right by small step. |



The following example demonstrates the ColorGradient keyboard navigation.

{% meta height:500 %}
{% embed_file colorgradient/overview/func/app.tsx preview %}
{% embed_file colorgradient/overview/func/main.tsx %}
{% embed_file colorgradient/overview/func/styles.css %}
{% endmeta %}

## See Also

* [API Reference of the ColorGradient]({% slug api_inputs_colorgradientprops %})
* [Accessibility]({% slug accessibility_colorgradient %})
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
