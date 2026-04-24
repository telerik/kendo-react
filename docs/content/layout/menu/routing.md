---
title: Routing
description: "Use the KendoReact Menu with the React router."
components: ["menu"]
slug: routing_menu
position: 6
---

# Routing

You can use the Menu as a navigational component by wiring it with any router library.

1. Set the [`data`]({% slug api_layout_basemenuitem %}#toc-data) property of each Menu item to the corresponding route path.
1. Upon the selection of a Menu item, read the route path from the [`data`]({% slug api_layout_basemenuitem %}#toc-data) property and push it to `props.history`.
1. The component that is passed through `props.children` corresponds to the new route path.



{% meta height:600 %}
{% embed_file menu/routing/func/About.tsx %}
{% embed_file menu/routing/func/Home.tsx %}
{% embed_file menu/routing/func/MenuNavContainer.tsx %}
{% embed_file menu/routing/func/Products.tsx %}
{% embed_file menu/routing/func/Team.tsx %}
{% embed_file menu/routing/func/app.tsx preview %}
{% embed_file menu/routing/func/main.tsx %}
{% endmeta %}


## Suggested Links

* [API Reference of the Menu]({% slug api_layout_menuprops %})
* [API Reference of the MenuItem]({% slug api_layout_menuitemprops %})
* [API Reference of the MenuItemModel]({% slug api_layout_menuitemmodel %})
