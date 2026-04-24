---
title: Titles
description: 'Configure the titles of the KendoReact PanelBar items in React projects.'
components: ["panelbar"]
slug: titlesitems_panelbar
position: 2
---

# Titles

You can configure the PanelBar items by adding images and rendering icons next to them.

## Getting Started

You can handle the title of each PanelBar item by setting the [`title`]({% slug api_layout_panelbaritemprops %}#toc-title) property.

{% meta height:200 %}
{% embed_file panelbar/items/titles/getting-started/func/app.tsx preview %}
{% embed_file panelbar/items/titles/getting-started/func/main.tsx %}
{% endmeta %}

## Adding Images

You can load images next to the titles of the PanelBar items by setting the [`imageUrl`]({% slug api_layout_panelbaritemprops %}#toc-imageurl) property.

{% meta height:300 %}
{% embed_file panelbar/items/titles/images/func/app.tsx preview %}
{% embed_file panelbar/items/titles/images/func/main.tsx %}
{% embed_file panelbar/items/titles/images/func/styles.css %}
{% endmeta %}

## Adding Icons

You can render icons next to the titles of the PanelBar items by either:

-   Setting the [`icon`]({% slug api_layout_panelbaritemprops %}#toc-icon) property (for build-in icons), or
-   Setting the [`iconClass`]({% slug api_layout_panelbaritemprops %}#toc-iconclass) property (for custom icons).

{% meta height:700 %}
{% embed_file panelbar/items/titles/icons/func/app.tsx preview %}
{% embed_file panelbar/items/titles/icons/func/main.tsx %}
{% embed_file panelbar/items/titles/icons/func/styles.css %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

-   [API Reference of the PanelBar]({% slug api_layout_panelbarprops %})
-   [API Reference of the PanelBarItem]({% slug api_layout_panelbaritemprops %})
