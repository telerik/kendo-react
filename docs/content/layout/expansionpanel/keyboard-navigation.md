---
title: Keyboard Navigation
page_title: KendoReact Expansionpanel Documentation | Keyboard Navigation
description: "Get started with the KendoReact Expansionpanel and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_expansionpanel
position: 110
---

# Keyboard Navigation


## Managing the Focus


The ExpansionPanel is a single-tab-stop component. By default only its header is focusable and interactive. If there are focusable elements within the component's content, they remain in the page tab sequence.

## Keyboard Shortcuts

| Shortcut | Behavior |
| -------- | -------- |
| `Enter` | Expands and collapses the focused ExpansionPanel. |
| `Space` | Expands and collapses the focused ExpansionPanel. |

## Resources

[ARIA Authoring Practices: Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)



{% meta height:610 %}
{% embed_file expansionpanel/overview/func/app.tsx preview %}
{% embed_file expansionpanel/overview/func/main.tsx %}
{% embed_file expansionpanel/overview/func/styles.css %}
{% embed_file expansionpanel/overview/func/data.ts %}
{% endmeta %}

## See Also
* [Learn about KendoReact Free.](slug:free_components_introduction)

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
