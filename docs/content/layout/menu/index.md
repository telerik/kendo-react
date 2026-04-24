---
title: Overview
description: 'Discover the features of the KendoReact Menu and learn how to use the component in React projects.'
components: ["menu"]
slug: overview_menu
position: 1
---

# KendoReact Menu Overview

The KendoReact Menu is a multi-level component for displaying hierarchical data.

You can describe the Menu items either by:

-   Using nested [MenuItem]({% slug api_layout_menuitem %}) components, or
-   Setting the [`items`]({% slug api_layout_menuprops %}#toc-items) property.

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates the Menu in action.

{% meta height:200 %}
{% embed_file menu/overview/basic/func/items.json %}
{% embed_file menu/overview/basic/func/app.tsx preview %}
{% embed_file menu/overview/basic/func/main.tsx %}
{% endmeta %}

> The Menu is part of the [KendoReact Layout]({% slug overview_layout %}) component library. The procedures for installing, importing, and using all components in the library are identical. To learn how to use the Menu and the rest of the components in the package, see the [Getting Started with the KendoReact Layout Package]({% slug getstarted_layout %}) guide.

## Key Features

-   [Data binding]({% slug databinding_menu %})&mdash;You can bind the Menu to local arrays of data or to remote data.
-   [Items]({% slug items_menu %})&mdash;To configure the items, you can use a variety of built-in properties or you can override their default rendering.
-   [Vertical Menu]({% slug vertical_menu %})&mdash;You can easily render a vertical menu by using the `vertical` property.
-   [Opening and closing]({% slug opening_closing_menu %})&mdash;The Menu allows you to control its behavior on item click or hover.
-   [Routing]({% slug routing_menu %})&mdash;You can use the Menu as a container for navigational components with any router library.
-   [Keyboard navigation]({% slug keyboard_navigation_menu %})&mdash;The Menu supports various keyboard shortcuts.
-   [Accessibility]({% slug accessibility_menu %})&mdash;The Menu is accessible by screen readers and provides full WAI-ARIA support.
-   [Events]({% slug events_menu %})&mdash;You can tailor the behavior of the Menu by using the variety of generated events.

## Suggested Links

-   [Getting Started with the KendoReact Layout Package]({% slug getstarted_layout %})
-   [API Reference of the Menu]({% slug api_layout_menuprops %})
-   [API Reference of the MenuItem]({% slug api_layout_menuitemprops %})
-   [API Reference of the MenuItemModel]({% slug api_layout_menuitemmodel %})
