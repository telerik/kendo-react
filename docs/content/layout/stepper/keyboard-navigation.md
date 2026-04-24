---
title: Keyboard Navigation
page_title: KendoReact Stepper Documentation | Keyboard Navigation
description: "Get started with the KendoReact Stepper and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_stepper
position: 110
---

# Keyboard Navigation


## Keyboard Shortcuts

| Shortcut | Behavior |
| -------- | -------- |
| `Shift + Tab` | Focuses previous link. |
| `Tab` | Focuses next link. |
| `Home` | Focuses first link. |
| `End` | Focuses last link. |
| `Space / Enter` | Activates the currently focused link. |

### Select on focus


In addition to the above, the component could also implement the `selection follows focus` pattern. In that case, the active link in the Stepper will move together with the focus. Moving the focus to another link will automatically activate the newly focused link.

## Resources

[ARIA Authoring Practices: Navigation Landmark](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html)



{% meta height:140 %}
{% embed_file stepper/keyboard-navigation/func/app.tsx preview %}
{% embed_file stepper/keyboard-navigation/func/main.tsx %}
{% endmeta %}

## See Also

* [API Reference of the Stepper Props]({% slug api_layout_stepperprops %})
* [API Reference of the Step Props]({% slug api_layout_stepprops %})
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
* [Learn about KendoReact Free.](slug:free_components_introduction)
