---
title: Routing
description: 'Use the KendoReact BottomNavigation with the React router.'
components: ["bottomnavigation"]
slug: routing_bottomnavigation
position: 5
---

# Routing

You can use the BottomNavigation as a container for a navigational component with any router library.

## Using Custom Properties to Set Route Paths

To use custom properties and set the route path:

1. Pass a custom `route` property to the `items` collection.
1. Set the property to the corresponding path.
1. After the user makes a selection, identify the selected item and redirect the source.

{% meta height:480 %}
{% embed_file bottomnavigation/routing/func/NavigationContainer.tsx %}
{% embed_file bottomnavigation/routing/func/app.tsx preview %}
{% embed_file bottomnavigation/routing/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

*   [API Reference of the BottomNavigationProps]({% slug api_layout_bottomnavigationprops %})
*   [API Reference of the BottomNavigationItemProps]({% slug api_layout_bottomnavigationitemprops %})
