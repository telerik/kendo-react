---
title: Overview
description: 'Get started with the layer types which the React Map package by KendoReact supports.'
components: ["map"]
slug: overview_layers_map
position: 0
---

# Map Layers Overview

The information that the Map renders is organized into layers.

## Layer Types

The Map supports the following layer types:

-   [Tile map layer]({% slug tile_layers_map %})
-   [Shape layer (GeoJSON vector map)]({% slug shape_layers_map %})
-   [Bubble map layer]({% slug bubble_layers_map %})
-   [Marker layer]({% slug marker_layers_map %})

## Layer Ordering

These layers are stacked by type, regardless of declaration order. The default order is:

-   Tile layer
-   Shape layer(s)
-   Bubble layer(s)
-   Marker layer(s)

The order can be changed by setting a `zIndex` on each layers. The following example demonstrates how to place a Bubble layer on top of a Shape layer using z-index.

{% meta height:660 %}
{% embed_file layers/zindex/func/app.tsx preview %}
{% embed_file layers/zindex/func/main.tsx %}
{% endmeta %}
