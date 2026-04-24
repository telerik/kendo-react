---
title: Shape Layer (GeoJSON)
description: 'Use the React Map package by KendoReact to render GeoJSON data in React projects.'
components: ["map"]
slug: shape_layers_map
position: 2
---

# Shape Layer

The Map Shape layer displays vector maps encoded in the industry-standard [GeoJSON](https://geojson.org/) format.

## Binding to GeoJSON Data

The following example demonstrates how to bind a Shape layer to GeoJSON data:

{% meta height:660 %}
{% embed_file layers/shape/func/app.tsx preview %}
{% embed_file layers/shape/func/main.tsx %}
{% endmeta %}

## Customizing Shapes

The layer is rendered using the [Drawing API]({% slug overview_drawing %}) and can be customized.

The following example demonstrates how the set the shape color in the [ShapeCreatedEvent]({% slug api_map_shapecreatedevent %})

{% meta height:660 %}
{% embed_file layers/shape-custom/func/app.tsx preview %}
{% embed_file layers/shape-custom/func/main.tsx %}
{% endmeta %}

## Tooltips

The Map has a built-in tooltip for shapes. To display the tooltip, define a shape tooltip renderer.

The available fields in the shape tooltip [renderer context]({% slug api_map_shapetooltipcontext %}) are:

-   `dataItem`&mdash;The original data item used to create the shape.
-   `layerIndex`&mdash;The index of the bubble layer in the Map.
-   `location`&mdash;The location of the center of the shape.

The shape tooltip is demonstrated in the example below:

{% meta height:660 %}
{% embed_file layers/shape-tooltip/func/app.tsx preview %}
{% embed_file layers/shape-tooltip/func/main.tsx %}
{% endmeta %}
