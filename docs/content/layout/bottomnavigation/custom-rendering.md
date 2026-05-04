---
title: 'Custom Rendering'
description: 'Customize the KendoReact BottomNavigation items in React projects.'
components: ['bottomnavigation']
slug: custom_rendering_bottomnavigation
position: 6
---

# Custom Rendering

The BottomNavigation enables you to override the default rendering of its items or apply modifications on the existing one.

To customize the appearance of the items, use the [`item`]({% slug api_layout_bottomnavigationprops %}#toc-item) property of the BottomNavigation.

The following example demonstrates how to add additional components in the BottomNavigation items such as `FloatingActionButton`, `Icon`, and `Badge`:

{% meta height:700 %}
{% embed_file bottomnavigation/custom-rendering/func/app.tsx preview %}
{% embed_file bottomnavigation/custom-rendering/func/main.tsx %}
{% endmeta %}

## Item Render Property

To override the default rendering of the whole item, use the [`itemRender`]({% slug api_layout_bottomnavigationprops %}#toc-itemRender) property of the BottomNavigation.

{% meta height:300 %}
{% embed_file bottomnavigation/item-render/func/app.tsx preview %}
{% embed_file bottomnavigation/item-render/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

*   [API Reference of the BottomNavigationProps]({% slug api_layout_bottomnavigationprops %})
*   [API Reference of the BottomNavigationItemProps]({% slug api_layout_bottomnavigationitemprops %})
