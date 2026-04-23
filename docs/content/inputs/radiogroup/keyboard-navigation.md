---
title: Keyboard Navigation
page_title: KendoReact Radiogroup Documentation | Keyboard Navigation
description: "Get started with the KendoReact Radiogroup and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_radiogroup
position: 110
---

# Keyboard Navigation


## Keyboard Navigation


The group of RadioButtons does not implement any keyboard navigation. Everything is handled through the default browser behavior for radio buttons.

| Shortcut | Behavior |
| -------- | -------- |
| `Up/Left` | Moves focus to previous button and selects it. If first button is focused, moves focus to the last. |
| `Down Arrow` or `Right Arrow` | Moves the focus to the next button and selects it. If the last button is focused, moves the focus to the first one. |

## Resources

[WAI-ARIA Authoring Practices: Radio Group Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)



{% meta height:155 %}
{% embed_file radiogroup/keyboard/func/app.tsx preview %}
{% embed_file radiogroup/keyboard/func/main.tsx %}
{% endmeta %}

## See Also
* [Learn about KendoReact Free.](slug:free_components_introduction)

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
