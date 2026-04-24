---
title: Marker Layer
description: 'Use the React Map package by KendoReact to display map Markers in React projects.'
components: ["map"]
slug: marker_layers_map
position: 4
---

# Marker Layer

The marker layer displays markers over specified Points of Interest (POI).

The following example demonstrates how to create a marker layer:

{% meta height:660 %}
{% embed_file layers/marker/func/app.tsx preview %}
{% embed_file layers/marker/func/main.tsx %}
{% endmeta %}

## Tooltips

The Map has a built-in tooltip for markers. To display the tooltip, define a marker tooltip renderer.

The available fields in the marker tooltip [renderer context]({% slug api_map_markertooltipcontext %}) are:

-   `dataItem`&mdash;The original data item used to create the marker.
-   `layerIndex`&mdash;The index of the marker layer in the Map.
-   `title`&mdash;The marker title.
-   `location`&mdash;The marker location.

The marker tooltip is demonstrated in the example below:

{% meta height:660 %}
{% embed_file layers/marker-tooltip/func/app.tsx preview %}
{% embed_file layers/marker-tooltip/func/main.tsx %}
{% endmeta %}
