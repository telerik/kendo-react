---
title: Bubble Map layer
description: 'Use the React Map package by KendoReact to visualize Bubble Maps in React projects.'
components: ["map"]
slug: bubble_layers_map
position: 3
---

# Bubble Map layer

The bubble map layer displays value proportions over geographic regions.

At each location, the layer will render a circle with an area proportional to the value. The rendered shape can be customized by setting [`symbol`]({% slug api_map_mapbubblelayerprops %}#toc-symbol)

## Binding to Data

The Bubble map layer expects the data to contain two fields:

-   Location, specified by [locationField]({% slug api_map_mapbubblelayerprops %}#toc-location-field)
-   Value, specified by [valueField]({% slug api_map_mapbubblelayerprops %}#toc-location-field)

The following example demonstrates how to create a bubble layer:

{% meta height:660 %}
{% embed_file layers/bubble/func/app.tsx preview %}
{% embed_file layers/bubble/func/main.tsx %}
{% endmeta %}

## Tooltips

The Map has a built-in tooltip for bubbles. To display the tooltip, define a bubble tooltip renderer.

The available fields in the bubble tooltip [renderer context]({% slug api_map_bubbletooltipcontext %}) are:

-   `dataItem`&mdash;The original data item used to create the bubble.
-   `layerIndex`&mdash;The index of the bubble layer in the Map.
-   `location`&mdash;The location of the bubble.
-   `value`&mdash;The value of the bubble.

The bubble tooltip is demonstrated in the example below:

{% meta height:660 %}
{% embed_file layers/bubble-tooltip/func/app.tsx preview %}
{% embed_file layers/bubble-tooltip/func/main.tsx %}
{% endmeta %}
