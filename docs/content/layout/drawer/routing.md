---
title: Routing
description: 'Use the KendoReact Drawer with the React router.'
components: ['drawer']
slug: routing_drawer
position: 5
---

# Routing

You can use the Drawer as a container for a navigational components with any router library.

## Using Custom Properties to Set Route Paths

To use custom properties and set the route path:

1. Pass `route` custom property to the `items` collection.
1. Set the property to the corresponding path.
1. After the user makes a selection, identify the selected item and redirect the source.

{% meta height:600 %}
{% embed_file drawer/routing/func/app.tsx preview %}
{% embed_file drawer/routing/func/main.tsx %}
{% embed_file drawer/routing/func/DrawerContainer.tsx %}
{% embed_file drawer/routing/func/styles.css %}
{% embed_file drawer/routing/func/Home.tsx %}
{% embed_file drawer/routing/func/Products.tsx %}
{% embed_file drawer/routing/func/About.tsx %}
{% embed_file drawer/routing/func/Team.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)
-   [API Reference of the DrawerProps]({% slug api_layout_drawerprops %})
-   [API Reference of the DrawerItemProps]({% slug api_layout_draweritemprops %})
