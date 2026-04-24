---
title: Overview
description: 'Discover the React TileLayout UI Component by KendoReact that covers everything from resizing, reordering and custom rendering of the tiles.'
components: ["tilelayout"]
slug: overview_tilelayout
position: 0
---

# KendoReact TileLayout Overview

The KendoReact TileLayout component is based on the two-dimensional [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) and displays content in tiles. They can be `resized` and `reordered` as desired by the user.

The component features draggable and resizable items (tiles), static ones, various auto flows, fixed widths and heights, configurable number of columns, and many more.

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates the TileLayout in action.

{% meta height:1140 %}
{% embed_file tilelayout/overview/func/conversion-rate.tsx %}
{% embed_file tilelayout/overview/func/conversions-chart.tsx %}
{% embed_file tilelayout/overview/func/app.tsx preview %}
{% embed_file tilelayout/overview/func/main.tsx %}
{% embed_file tilelayout/overview/func/page-views.tsx %}
{% embed_file tilelayout/overview/func/popular-pages-chart.tsx %}
{% embed_file tilelayout/overview/func/users-grid.tsx %}
{% embed_file tilelayout/overview/func/visitors-donut.tsx %}
{% embed_file tilelayout/overview/func/tileLayout-data.tsx %}
{% endmeta %}

The example above showcases the TileLayout among other KendoReact components, namely the [Grid]({% slug overview_grid %}) and [Chart]({% slug overview_charts %}) components. The types of React Charts shown here are [Line]({% slug line_seriestypes_charts %}) charts and a [Donut]({% slug donut_seriestypes_charts %}) chart, which is a variation of the React [Pie]({% slug pie_seriestypes_charts %}) chart.

> The TileLayout is part of the [KendoReact Layout]({% slug overview_layout %}) component library. The procedures for installing, importing, and using all components in the library are identical. To learn how to use the TileLayout and the rest of the components in the package, see the [Getting Started with the KendoReact Layout Package]({% slug getstarted_layout %}) guide.

## Key Features

-   [Auto Flows]({% slug autoflows_tilelayout %})&mdash;The TileLayout allows you to control how the auto-placement algorithm works.
-   [Tiles settings]({% slug tiles_tilelayout %})&mdash;You can customize the behavior of the tiles in the TileLayout.
-   [Globalization]({% slug rtl_layout %})&mdash;The TileLayout has built-in globalization support.
-   [Resizable tiles]({% slug api_layout_tilelayoutitem %}#toc-resizable)&mdash;End users can resize the tiles according to their needs.
-   [Reorderable tiles]({% slug api_layout_tilelayoutitem %}#toc-reorderable)&mdash;End users can drag and reorder tiles across the layout.

## Suggested Links

-   [Getting Started with the KendoReact Layout Package]({% slug getstarted_layout %})
-   [API Reference of the TileLayout]({% slug api_layout_tilelayout %})
-   [API Reference of the TileLayoutProps]({% slug api_layout_tilelayoutprops %})
-   [API Reference of the TileLayoutItem]({% slug api_layout_tilelayoutitem %})
