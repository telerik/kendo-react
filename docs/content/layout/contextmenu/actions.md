---
title: Actions
description: 'Get started with the React ContextMenu package by KendoReact and learn more about performing actions.'
components: ["contextmenu"]
slug: actions_contextmenu
position: 2
---

# Actions

The ContextMenu allows you to perform different actions on right-click.

## Actions Implementation

To enable a certain action:

1. Render a [`MenuItem`]({% slug api_layout_menuitem %}) component in the ContextMenu.
1. Based on the use case, pass a string to the action setting via the data prop.
1. Handle the required logic inside the onSelect event

The following example demonstrates how to implement a simple action.

{% meta height:280 %}
{% embed_file menu/context-menu/actions/func/app.tsx preview %}
{% embed_file menu/context-menu/actions/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Getting Started with KendoReact](https://www.telerik.com/kendo-react-ui/components/getting-started/)
-   [API Reference of the KendoReact ContextMenu]({% slug api_layout_contextmenu %})
-   [API Reference of the ContextMenuProps]({% slug api_layout_contextmenuprops %})
