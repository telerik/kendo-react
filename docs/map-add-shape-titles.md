---
title: Add Titles to Map Shapes
description: Learn how to add titles to shapes in the KendoReact Map.
type: how-to
page_title: Add Titles to Map Shapes - KendoReact Map
slug: map_add_shape_titles
tags: telerik, kendoreact, map, shapes, draw, title
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>5.5.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>

## Description

How can I add some title text for the shapes in the Map?

## Solution

1. Add a [shape layer]({% slug shape_layers_map %}) to the Map configuration.
1. Attach a handler to the [`shapeCreated` event]({% slug events_map %}) of the Map.
1. Create a method that will create a label for a given shape.
1. Inside the method, retrieve the shape center using the [element bounding box]({% slug api_kendo-drawing_element %}#toc-bbox).
1. Get a reference to the shape layer so you can draw on its surface.
1. Draw the label by using the [Text element]({% slug api_kendo-drawing_text %}).

The following example demonstrates how to add title text for Map shapes that are loaded from GeoJSON.

{% meta height:700 %}
{% embed_file map/add-shape-titles/main.jsx preview %}
{% endmeta %}
