---
title: Scroll Into View
description: 'Get started with the KendoKendoReact Data Grid and provide an alternative to paging by using its scroll into view mode.'
components: ["datagrid"]
slug: scroll_into_view_grid
position: 3
---

# Scroll Into View

Scroll Into View enables the user to scroll to a specific row in the grid.

> Starting with KendoReact 11.0.0, the default `scrollable` mode of the KendoKendoReact Data Grid is set to `virtual` for developers with an active license.

## Getting Started

1. Set the Grid's height through its [`style`]({% slug api_grid_gridprops %}#toc-style) property.
1. Set the `rowHeight` prop to match the height of the row.
1. Pass the target row index to the `scrollIntoView` method.

The following example demonstrates the basic implementation of the Scroll Into View functionality of the Grid.

{% meta height:530 %}
{% embed_file scroll-into-view/func/app.tsx preview %}
{% embed_file scroll-into-view/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_gridprops %})
