---
title: Custom Rendering
description: 'Customize the KendoReact Drawer to show and hide details by expanding and collapsing items vertically.'
components: ["drawer"]
slug: custom_rendering
position: 6
---

# Custom Rendering

The Drawer enables you to customize the content of its items.

To customize the appearance of the items, use the [`item`]({% slug api_layout_drawerprops %}#toc-item) property of the Drawer.

The following example demonstrates how to customize the look and feel of the drawer items.

## Items

{% meta height:400 %}
{% embed_file drawer/custom-render/func/app.tsx preview %}
{% embed_file drawer/custom-render/func/main.tsx %}
{% embed_file drawer/custom-render/func/Content.tsx %}
{% embed_file drawer/custom-render/func/DrawerContainer.tsx %}
{% embed_file drawer/custom-render/func/styles.css %}
{% endmeta %}

## Hierarchical Drawer

The Drawer component works with a flat structure of items by design. However many real world scenarios require a navigation with hierarchical structure.

The following example demonstrates how to achieve this by toggling the visibility of the Drawer items depending on the currently selected item.

The `level` property of each item sets its level of nesting beneath the parent element in the hierarchy tree.

{% meta height:660 %}
{% embed_file drawer/hierarchical/func/app.tsx preview %}
{% embed_file drawer/hierarchical/func/main.tsx %}
{% embed_file drawer/hierarchical/func/Content.tsx %}
{% embed_file drawer/hierarchical/func/DrawerContainer.tsx %}
{% embed_file drawer/hierarchical/func/styles.css %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DrawerProps]({% slug api_layout_drawerprops %})
-   [API Reference of the DrawerItemProps]({% slug api_layout_draweritemprops %})
