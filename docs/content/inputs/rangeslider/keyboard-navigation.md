---
title: Keyboard Navigation
page_title: KendoReact Rangeslider Documentation | Keyboard Navigation
description: "Get started with the KendoReact Rangeslider and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_rangeslider
position: 110
---

# Keyboard Navigation


## Managing the Focus


Both slider handles are focusable through Tab Key, and the below shortcuts are applicable to them.

## Keyboard Shortcuts

| Shortcut | Behavior |
| -------- | -------- |
| `Arrow Down or Arrow Left` | Decreases value by small step. |
| `Arrow Up or Arrow Right` | Increases value by small step. |
| `Home` | Sets value to the Min value. |
| `End` | Sets value to the Max value. |
| `Page up` | Increases value by large step. |
| `Page down` | Decreases value by large step. |

## Resources

[ARIA Authoring Practices: Slider Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/slider/)

[ARIA Authoring Practices: Multi-Thumb Slider Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/)



{% meta height:130 %}
{% embed_file rangeslider/steps/app.tsx preview %}
{% embed_file rangeslider/steps/main.tsx %}
{% endmeta %}

## See Also

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
