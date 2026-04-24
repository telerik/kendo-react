---
title: Keyboard Navigation
page_title: KendoReact Sortable Documentation | Keyboard Navigation
description: "Get started with the KendoReact Sortable and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_sortable
position: 110
---

# Keyboard Navigation


## Managing the Focus


The Sortable component is a single tab-stop. When focused with the keyboard (tabbed into), the first (or last focused) item gets focused. Tab or shift-tab moves focus to the next/previous focusable item on the page. Enter moves the focus to the first focusable element within the currently focused item (if such) and traps and wraps the focus which allows tabbing through the focusable elements within the item content (if any). Escape returns focus to the Sortable item.

## Keyboard Shortcuts

| Shortcut | Behavior |
| -------- | -------- |
| `Right/Down Arrow` | Sets the focus on the next available item. |
| `Left/Up Arrow` | Sets the focus on the previously available item. |
| `Ctrl/⌘`+`Right/Down Arrow` | Moves the focused item after the next item. |
| `Ctrl/⌘`+`Left/Up Arrow` | Moves the focused item before the previous item. |
| `Enter` | Focuses the first focusable element within the item's content (if any). Focus is trapped and wrapped within the item content. |
| `Escape` | When focus is on an internal element within a Sortable item, returns the focus to the item wrapper. |



{% meta height:330 %}
{% embed_file keyboard-navigation/func/app.tsx preview %}
{% embed_file keyboard-navigation/func/main.tsx %}
{% endmeta %}

## See Also
* [API Reference of the Sortable]({% slug api_sortable %})
* [Globalization]({% slug globalization_sortable %})
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
* [Learn about KendoReact Free.](slug:free_components_introduction)
