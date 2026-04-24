---
title: Content Types
description: 'Set different content types to the KendoReact BottomNavigation items in React projects.'
components: ["bottomnavigation"]
slug: content_types_bottomnavigation
position: 2
---

# Content Types

The BottomNavigation component allows you to specify icons and text labels for the rendered buttons. You can also choose between horizontal or vertical item flow, which determines if the icon and the text are on the same line or one below the other.

## Item Content

To configure the content of the BottomNavigation items, use the following properties in its [`items`]({% slug api_layout_bottomnavigationprops %}#toc-items) collection:

-   [`icon`]({% slug api_layout_bottomnavigationitemprops %}#toc-icon) &mdash; Sets an icon.
-   [`text`]({% slug api_layout_bottomnavigationitemprops %}#toc-text) &mdash; Sets a text label.

{% meta height:200 %}
{% embed_file bottomnavigation/item-content/func/app.tsx preview %}
{% embed_file bottomnavigation/item-content/func/main.tsx %}
{% endmeta %}

## Item Flow

To configure the flow of the BottomNavigation items, use the [itemFlow]({% slug api_layout_bottomnavigationprops %}#toc-itemFlow) property.

The possible values are:

-   `vertical`(Default) &mdash; Renders the text below the icon.
-   `horizontal` &mdash; Renders the text and the icon on the same line.

{% meta height:200 %}
{% embed_file bottomnavigation/item-flow/func/app.tsx preview %}
{% embed_file bottomnavigation/item-flow/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

*   [API Reference of the BottomNavigationProps]({% slug api_layout_bottomnavigationprops %})
*   [API Reference of the BottomNavigationItemProps]({% slug api_layout_bottomnavigationitemprops %})
