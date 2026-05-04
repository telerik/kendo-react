---
title: 'Display Modes'
description: 'Get started with the KendoReact Drawer and set its overlay or push expand modes or its compact mini view in React projects.'
components: ['drawer']
slug: display_modes_drawer
position: 3
---

# Display Modes

The Drawer provides [expand modes](#toc-expand-modes) and a [compact mini view](#toc-mini-view).

## Expand Modes

For displaying its content, the Drawer provides the following expand modes:

-   `"overlay"`&mdash;The Drawer expands on top of the container content and displays a grayed overlay over it. Use `onOverlayClick` event handler to handle when the overlay is clicked.
-   `"push"`&mdash;The Drawer expands side by side to the container content by shrinking its width.

To configure the expand mode, use the [`mode`]({% slug api_layout_drawerprops %}#toc-mode) property of the Drawer.

{% meta height:500 %}
{% embed_file drawer/display-modes/func/app.tsx preview %}
{% embed_file drawer/display-modes/func/main.tsx %}
{% embed_file drawer/display-modes/func/styles.css %}
{% endmeta %}

## Mini View

A compact view can be displayed when the Drawer is collapsed. To toggle between expanded and compact views, use its [`mini`]({% slug api_layout_drawerprops %}#toc-mode) property of the Drawer.

> The Drawer will always be visible displaying only the item icon even when it is collapsed.

{% meta height:500 %}
{% embed_file drawer/mini-mode/func/app.tsx preview %}
{% embed_file drawer/mini-mode/func/main.tsx %}
{% embed_file drawer/mini-mode/func/styles.css %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)
-   [API Reference of the Drawer Props]({% slug api_layout_drawerprops %})
