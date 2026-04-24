---
title: Configuring Item Properties
page_title: Configuring Item Properties - Menu - KendoReact
description: 'Configure the text, URLs, icons, and styles for the KendoReact Menu in React projects.'
components: ["menu"]
slug: itemproperties_menu
position: 2
tag: updated
---

# Configuring Item Properties

The Menu enables you to apply configuration options to its item properties.

-   [Setting the item text](#toc-text)
-   [Setting a URL](#toc-url)
-   [Setting an icon](#toc-icon)
-   [Setting styles and classes](#toc-styles-and-classes)
-   [Disabling items](#toc-disabled-items)
-   [Showing Separator Items](#toc-showing-separator-items)

## Text

You can set the text of the Menu items by using the [`text`]({% slug api_layout_basemenuitem %}#toc-text) property.

{% meta height:120 %}
{% embed_file menu/items/properties/text/func/app.tsx preview %}
{% embed_file menu/items/properties/text/func/main.tsx %}
{% endmeta %}

## URL

You can set the URL of the items by using the [`url`]({% slug api_layout_basemenuitem %}#toc-url) property. The URL will be rendered as a `href` attribute on the item link.

{% meta height:120 %}
{% embed_file menu/items/properties/url/func/app.tsx preview %}
{% embed_file menu/items/properties/url/func/main.tsx %}
{% endmeta %}

## Icon

You can specify the name of a [font icon]({% slug icons %}#toc-list-of-font-icons) that will be rendered for the item by using the [`icon`]({% slug api_layout_basemenuitem %}#toc-icon) property.

{% meta height:120 %}
{% embed_file menu/items/properties/icon/func/app.tsx preview %}
{% embed_file menu/items/properties/icon/func/main.tsx %}
{% endmeta %}

## Styles and Classes

You can set styles and classes to the items by using the [`cssStyle`]({% slug api_layout_basemenuitem %}#toc-cssstyle) and [`cssClass`]({% slug api_layout_basemenuitem %}#toc-cssclass) properties.

{% meta height:120 %}
{% embed_file menu/items/properties/styles/func/app.tsx preview %}
{% embed_file menu/items/properties/styles/func/main.tsx %}
{% embed_file menu/items/properties/styles/func/styles.css %}
{% endmeta %}

## Disabled Items

You can specify that a Menu item is disabled by using the [`disabled`]({% slug api_layout_basemenuitem %}#toc-disabled) property.

{% meta height:120 %}
{% embed_file menu/items/properties/disabled/func/app.tsx preview %}
{% embed_file menu/items/properties/disabled/func/main.tsx %}
{% endmeta %}

## Showing Separator Items

You can specify a separator item by using the [`separator`]({% slug api_layout_basemenuitem %}#toc-separator) property.
{% meta height:120 %}
{% embed_file menu/items/separator/app.tsx preview %}
{% embed_file menu/items/separator/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

-   [API Reference of the Menu]({% slug api_layout_menuprops %})
-   [API Reference of the MenuItem]({% slug api_layout_menuitemprops %})
-   [API Reference of the MenuItemModel]({% slug api_layout_menuitemmodel %})
