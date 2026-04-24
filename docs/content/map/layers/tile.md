---
title: Tile Layer
description: 'Use the React Map package by KendoReact to render tile maps in React projects.'
components: ["map"]
slug: tile_layers_map
position: 1
---

# Tile Layer

The Tile layer in the Map is suitable for displaying raster tile maps from popular online providers such as [OpenStreetMap](http://www.openstreetmap.org/).

The following example demonstrates how to display an OpenStreetMap tile layer.

{% meta height:660 %}
{% embed_file layers/tile/func/app.tsx preview %}
{% embed_file layers/tile/func/main.tsx %}
{% endmeta %}

## Zoom Levels

Raster maps are divided into images (tiles) for serving over the web. Tiles are typically 256px squares.

The top level (zoom level 0) displays the whole world as a single tile. Each progressive zoom level doubles the size of the Map in the following way:

-   Zoom level 0—1x1 tiles (256px).
-   Zoom level 1—2x2 tiles (512px).
-   Zoom level 2—4x4 tiles (1024px).
-   etc.
