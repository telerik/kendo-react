---
title: Keyboard Navigation
page_title: KendoReact Panelbar Documentation | Keyboard Navigation
description: "Get started with the KendoReact Panelbar and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_panelbar
position: 110
---

# Keyboard Navigation


## Managing the Focus


The PanelBar is a single-tab-stop component. It implements the roving tab index strategy. On initial load - only first item will contain `tabindex="0"` and navigation keys move the focus to other nodes and change the respective tabindex. When the focus is moved away from the treeview, the `tabindex="0"` remains on the last focused node.

> Note that the ARIA specification and its implementation in the PanelBar component concerns only the `item` > `items` scenario. It does not treat the `item` > `content` scenario, which is not supported in terms of accessibility in the component. For such implementations, please use the ExpansionPanel instead, or a set of seleral ExpansionPanels.

## Keyboard Shortcuts

| Shortcut | Behavior |
| -------- | -------- |
| `Arrow Up` | Focuses the previous PanelBar item. If no previous item is available, focuses the last item. |
| `Arrow Down` | Focuses the next PanelBar item. If no next item is available, focuses the first item. |
| `Arrow Left` | Collapses an expanded item. If the item is collapsed, focuses its parent. |
| `Arrow Right` | Expands a collapsed item. If the item is expanded, focuses its first child node. |
| `Home` | Moves focus to the first item in the PanelBar without expanding or collapsing an item. |
| `End` | Moves focus to the last item in the PanelBar that is focusable without expanding an item. |
| `Enter` | Selects the focused item and toggles the item if it is expandable. It also triggers its action (click or opening url). |
| `Space` | Selects the focused item and toggles the item if it is expandable. It also triggers its action (click or opening url). |

## Resources

[ARIA Authoring Practices: Treeview Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/)

[ARIA Authoring Practices: Navigation Treeview](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-navigation/)

[ARIA Authoring Practices: Developing a Keyboard Interface](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/)



{% meta height:450 %}
{% embed_file panelbar/keyboard/func/app.tsx preview %}
{% embed_file panelbar/keyboard/func/main.tsx %}
{% endmeta %}


## See Also
* [Learn about KendoReact Free.](slug:free_components_introduction)

* [API Reference of the PanelBar]({% slug api_layout_panelbarprops %})
* [Accessibility]({% slug accessibility_panelbar %})
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
