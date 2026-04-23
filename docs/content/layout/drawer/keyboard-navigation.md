---
title: Keyboard Navigation
page_title: KendoReact Drawer Documentation | Keyboard Navigation
description: "Get started with the KendoReact Drawer and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_drawer
position: 110
---

# Keyboard Navigation


## Managing the Focus


 - Initial focus - First item in the drawer
 - Removing TabIndex components Practice for managing the focus
 - Persist only the last focused element with TabIndex = 0

## Keyboard Shortcuts

| Shortcut | Behavior |
| -------- | -------- |
| `Enter` | Execute the item action |
| `Arrow Up` | Goes to the previous item. Focus is moved to the prev item and its tabindex is set to 0. |
| `Arrow Down` | Goes to the next item. Focus is moved to the next item and its tabindex is set to 0. |



{% meta height:500 %}
{% embed_file drawer/mini-mode/func/app.tsx preview %}
{% embed_file drawer/mini-mode/func/main.tsx preview %}
{% embed_file drawer/mini-mode/func/styles.css %}
{% endmeta %}

## See Also
* [Learn about KendoReact Free.](slug:free_components_introduction)

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
