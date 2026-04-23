---
title: Items
description: 'Get started with the KendoReact GridLayout and configure its items dimensions.'
components: ["gridlayout"]
slug: items_gridlayout
position: 3
---

# Items

The GridLayout enables you to control the position of its items. This component provides a grid-based positioning system where you can place elements at specific coordinates and define their span across rows and columns. Using the configuration properties below, you can implement common layout patterns such as dashboards, admin interfaces, and content displays without writing complex CSS positioning code.

You can set up your item layout using these configuration properties:

-   [`col`]({% slug api_layout_gridlayoutitemprops %}#toc-col)&mdash;Sets the column line where your `GridLayoutItem` starts.
-   [`row`]({% slug api_layout_gridlayoutitemprops %}#toc-row)&mdash;Sets the row line where your `GridLayoutItem` starts.
-   [`colSpan`]({% slug api_layout_gridlayoutitemprops %}#toc-colSpan)&mdash;Sets how many columns your `GridLayoutItem` covers.
-   [`rowSpan`]({% slug api_layout_gridlayoutitemprops %}#toc-rowSpan)&mdash;Sets how many rows your `GridLayoutItem` covers.

The following demo shows how to create a colorful dashboard-like layout by positioning boxes of different sizes and colors using the `col`, `row`, `colSpan`, and `rowSpan` properties.

{% meta height:580 %}
{% embed_file gridlayout/items/func/app.tsx preview %}
{% embed_file gridlayout/items/func/main.tsx %}
{% embed_file gridlayout/items/func/styles.css %}
{% endmeta %}

## Suggested Links

-   [API Reference of the GridLayout]({% slug api_layout_gridlayout %})
-   [API Reference of the GridLayoutProps]({% slug api_layout_gridlayoutprops %})
-   [API Reference of the GridLayoutItem]({% slug api_layout_gridlayoutitem %})
-   [API Reference of the GridLayoutItemProps]({% slug api_layout_gridlayoutitemprops %})
