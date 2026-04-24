---
title: Keyboard Navigation
page_title: KendoReact Sankey Documentation | Keyboard Navigation
description: "Get started with the KendoReact Sankey and learn about the accessibility support it provides through its keyboard navigation functionality."
tags: telerik,kendoreact,accessibility,wai-aria,wcag,keyboard,navigation
slug: keyboard_navigation_sankey
position: 110
---

# Keyboard Navigation


## Managing the Focus


The Sankey comes with keyboard navigation enabled out of the box. The main interactive parts of the Sankey diagram are reachable through the keyboard - the nodes and links.

## Keyboard Navigation


Once the Sankey element receives focus via the keyboard, the focus highlight will be displayed on the first node. Navigation through nodes and links is controlled using the arrow keys. Pressing `Tab` moves the focus out of the Sankey to the next focusable element on the page. Clicking on a node or link moves the focus to the clicked element without drawing a focus highlight.

| Shortcut | Behavior |
| -------- | -------- |
| `Tab` | Moves the focus to the next focusable element on the page. |
| `Shift + Tab` | Moves the focus to the previous focusable element on the page. |
| `Up` arrow key | If the focus is on a node, moves to the node above (if it exists). If the focus is on a link, moves to the link above (if it exists) within the same source or target links collection as the focused link. |
| `Down` arrow key | If the focus is on a node, moves to the node below (if it exists). If the focus is on a link, moves to the link below (if it exists) within the same source or target links collection as the focused link. |
| `Left` arrow key | If the focus is on a node, moves to its first link on the left side (if it exists). If the focus is on a link, moves to the node on the left side of the focused link. |
| `Right` arrow key | If the focus is on a node, moves to its first link on the right side (if it exists). If the focus is on a link, moves to the node on the right side of the focused link. |
| `Escape` key | Moves the focus to the topmost first node of the Sankey. |



The following example demonstrates the Sankey Chart keyboard navigation in action.

{% meta height:320 %}
{% embed_file sankey/keyboard-navigation/app.tsx preview %}
{% embed_file sankey/keyboard-navigation/main.tsx %}
{% embed_file sankey/keyboard-navigation/data.ts %}
{% endmeta %}

### Disable Keyboard Navigation

To disable the keyboard navigation, set the [`disableKeyboardNavigation`]({% slug api_charts_sankey %}#toc-disableKeyboardNavigation) property to `true`.

## See Also

* [Accessibility in KendoReact]({% slug overview_accessibilty %})
* [Accessibility Compliance and Keyboard Support in KendoReact]({% slug compliance_accessibilty %})
