---
title: Overriding the Default Rendering
page_title: Overriding Items Rendering - Menu - KendoReact
description: 'Override the default rendering of the KendoReact Menu items in React projects.'
components: ["menu"]
slug: rendering_menu
position: 3
---

# Overriding the Default Rendering

The Menu enables you to override the default rendering of its items.

To customize the item rendering, use any of the following approaches:

-   [Override the rendering of the innermost item part](#toc-items)
-   [Override the rendering of the item link](#toc-links)
-   [Set specific content for the item children](#toc-content)

## Items

By default, the innermost Menu item part includes only text.

To override the rendering of that innermost item part, either:

-   Override the innermost part for a specific item by using the [`render`]({% slug api_layout_basemenuitem %}#toc-render) property.

{% meta height:150 %}
{% embed_file menu/item-render/func/app.tsx preview %}
{% embed_file menu/item-render/func/main.tsx %}
{% endmeta %}

-   Override the innermost part for all items by using the [`itemRender`]({% slug api_layout_menuprops %}#toc-itemrender) property of the Menu.

{% meta height:150 %}
{% embed_file menu/menu-item-render/func/app.tsx preview %}
{% embed_file menu/menu-item-render/func/main.tsx %}
{% endmeta %}

## Links

By default, the Menu item link includes an icon, text, and an arrow.

To override the rendering of the item link, either:

-   Override the item link for a specific item by using the [`linkRender`]({% slug api_layout_basemenuitem %}#toc-linkrender) property.

{% meta height:150 %}
{% embed_file menu/link-render/func/app.tsx preview %}
{% embed_file menu/link-render/func/main.tsx %}
{% endmeta %}

-   Override the item link for all items by using the [`linkRender`]({% slug api_layout_menuprops %}#toc-linkrender) property of the Menu.

{% meta height:150 %}
{% embed_file menu/menu-link-render/func/app.tsx preview %}
{% embed_file menu/menu-link-render/func/main.tsx %}
{% endmeta %}

## Content

You can set specific content that will replace the children of a Menu item by using the [`contentRender`]({% slug api_layout_basemenuitem %}#toc-contentrender) property.

{% meta height:150 %}
{% embed_file menu/content-render/func/app.tsx preview %}
{% embed_file menu/content-render/func/main.tsx %}
{% endmeta %}

If a component that is rendered inside the content utilizes a popup that is rendered outside the content, the Menu closes the item as soon as the user hovers over the popup. Even if the popup is rendered inside the content, it may still overflow, which will cause the mouse to leave the Menu when the popup is closed.

To avoid the accidental closing of content items:

1. Set the `ids` of the content items to the [`customCloseItemIds`]({% slug api_layout_menuprops %}#toc-customcloseitemids) property of the Menu.
1. Provide a **Close** button.

{% meta height:300 %}
{% embed_file menu/content-render-with-popup/func/app.tsx preview %}
{% embed_file menu/content-render-with-popup/func/main.tsx %}
{% embed_file menu/content-render-with-popup/func/content.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

-   [API Reference of the Menu]({% slug api_layout_menuprops %})
-   [API Reference of the MenuItem]({% slug api_layout_menuitemprops %})
-   [API Reference of the MenuItemModel]({% slug api_layout_menuitemmodel %})
