---
title: Configuration
description: 'An example demonstrating how to use the KendoReact TileLayout configuration options in React project.'
components: ["tilelayout"]
slug: configuration_tilelayout
position: 1
---

# TileLayout Configuration Options

The KendoReact TileLayout provides various built-in configuration options that allow you to quickly adjust it to your specific application requirements.

The TileLayout features the following options:

-   Sets custom [number of columns]({% slug api_layout_tilelayoutprops %}#toc-columns);
-   Sets custom [row heights]({% slug api_layout_tilelayoutprops %}#toc-rowHeight) and [column widths]({% slug api_layout_tilelayoutprops %}#toc-columnWidth);
-   Sets [gaps]({% slug api_layout_tilelayoutprops %}#toc-gap) between rows and columns;
-   Sets [autoFlow]({% slug api_layout_tilelayoutprops %}#toc-autoFlow) algorithm;
-   Sets [resizing]({% slug api_layout_tilelayoutitem %}#toc-resizable) and [reordering]({% slug api_layout_tilelayoutitem %}#toc-reorderable) for the tiles.

{% meta height:700 %}
{% embed_file tilelayout/get-started/config/func/app.tsx preview %}
{% embed_file tilelayout/get-started/config/func/main.tsx %}
{% endmeta %}

# TileLayout items unique keys

The KendoReact TileLayout provides option for setting unique item key. Set the [dataItemKey]({% slug api_layout_tilelayoutprops %}#toc-dataitemkey) property to determine the key field. Make sure that the field contains unique values.

The following example demonstrates TileLayout items with unique keys.

{% meta height:700 %}
{% embed_file tilelayout/get-started/keys/func/app.tsx preview %}
{% embed_file tilelayout/get-started/keys/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the TileLayout]({% slug api_layout_tilelayout %})
-   [API Reference of the TileLayoutProps]({% slug api_layout_tilelayoutprops %})
-   [API Reference of the TileLayoutItem]({% slug api_layout_tilelayoutitem %})
