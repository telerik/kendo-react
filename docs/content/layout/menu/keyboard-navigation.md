---
title: Keyboard Navigation
page_title: KendoReact Menu Documentation | Keyboard Navigation
description: "Get started with the KendoReact Menu and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_menu
position: 110
---

# Keyboard Navigation


## Managing the Focus


Roving tab index components strategy implemented. Meaning that only one node has tabindex in the menu. Interaction on a `menuitem` should focus it.

## Keyboard Shortcuts

### Actions applied to the Horizontal Menu:

| Shortcut | Behavior |
| -------- | -------- |
| `Up Arrow` | <ul><li>(For root items) Opens the item and focuses the last child.</li> <li>(For child items) Focuses the previous item.</li></ul> |
| `Down Arrow` | <ul><li>(For root items) Opens the item and focuses the first child.</li> <li>(For child items) Focuses the next item.</li></ul> |
| `Left Arrow` | <ul><li>(For root items) Focuses the previous item.</li> <li>(For child items) For direct children of a root item, focuses and opens the previous root item. Otherwise, closes and focuses the parent.</li></ul> |
| `Right Arrow` | <ul><li>(For root items) Focuses the next item.</li> <li>(For child items) If the item has children, opens the item and focuses the first child. Otherwise, focuses and opens the next root item.</li></ul> |
| `Home` | Focuses the first item. |
| `End` | Focuses the last item. |
| `Enter` | Selects the focused item. If the item has children, opens the item and focuses the first child. If the item does not have children and has a URL, navigates to the specified URL. |
| `Space` | Selects the focused item. If the item has children, opens the item and focuses the first child. If the item does not have children and has a URL, navigates to the specified URL. |
| `Escape` | (For child items) Closes and focuses the parent. |
| `Alphanumeric character` | Focuses the next item with text starting with the character. |

### If the Menu is vertical, the arrow keys perform the following actions:

| Shortcut | Behavior |
| -------- | -------- |
| `Up Arrow` | Focuses the previous item. |
| `Down Arrow` | Focuses the next item. |
| `Left Arrow` | <ul><li>(For root items) opens the item and focuses the last child.</li> <li>(For child items) closes and focuses the parent.</li></ul> |
| `Right Arrow` | If the item has children, opens the item and focuses the first child. For child items without children, focuses and opens the next root item. |

## Resources

[ARIA Authoring Practices: Menu Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/)

[ARIA Authoring Practices: Developing a Keyboard Interface](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/)



### Horizontal Menu

{% meta height:200 %}
{% embed_file menu/overview/basic/func/items.json %}
{% embed_file menu/overview/basic/func/app.tsx preview %}
{% embed_file menu/overview/basic/func/main.tsx %}
{% endmeta %}

### Vertical Menu

{% meta height:200 %}
{% embed_file menu/vertical/func/app.tsx preview %}
{% embed_file menu/vertical/func/main.tsx %}
{% endmeta %}


## See Also
* [Learn about KendoReact Free.](slug:free_components_introduction)

* [API Reference of the Menu]({% slug api_layout_menuprops %})
* [API Reference of the MenuItem]({% slug api_layout_menuitemprops %})
* [API Reference of the MenuItemModel]({% slug api_layout_menuitemmodel %})
* [Accessibility]({% slug accessibility_menu %})
* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
