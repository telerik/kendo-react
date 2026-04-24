---
title: Keyboard Navigation
page_title: KendoReact Tabstrip Documentation | Keyboard Navigation
description: "Get started with the KendoReact Tabstrip and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_tabstrip
position: 110
---

# Keyboard Navigation


## Managing the Focus


Focusable elements in the TabStrip components are:


 - Selected Tab
 - Tab Content/Panel


The tab items focusing mechanism is roving tabindex. Only the active tab should have `tabindex="0"`, the remaining tabs should have `tabindex="-1"`.

## Keyboard Shortcuts


When end is reached, the first tab is focused. When start is reached, the last tab is focused.

| Shortcut | Behavior |
| -------- | -------- |
| `Up Arrow` & `Down Arrow` | Vertical Orientation shortcuts. Activates the previous/next tab, or current tab if there is no active tab. |
| `Left Arrow` & `Right Arrow` | Horizontal Orientation shortcuts. Activates the previous/next tab, or current tab if there is no active tab. |
| `Tab` | Focuses the content for the active navigation item. |
| `Shift` + `Tab` | Navigates to the previous focusable element on the navigation. |
| `Enter` | Activates the tab item if automatic selection is not enabled. |
| `Home` | Focuses the first item and activates it, if automatic selection is enabled. |
| `End` | Focuses the last item and activates it, if automatic selection is enabled. |

## Resources

[ARIA Authoring Practices: Tabs with Automatic Activation](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/)

[ARIA Authoring Practices: Selection Follows Focus](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#decidingwhentomakeselectionautomaticallyfollowfocus)



{% meta height:300 %}
{% embed_file tabstrip/keyboard/func/app.tsx preview %}
{% embed_file tabstrip/keyboard/func/main.tsx %}
{% embed_file tabstrip/keyboard/func/styles.css %}
{% endmeta %}

## See Also

* [API Reference of the Tabstrip]({% slug api_layout_tabstripprops %})
* [API Reference of the TabStrip Tab]({% slug api_layout_tabstriptabprops %})
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
