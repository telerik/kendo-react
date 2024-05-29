---
title: Render Custom Symbols for Map Bubble Layers
description: "Learn how to render custom symbols on a Bubble layer in the KendoReact Map."
type: how-to
page_title: Render Custom Symbols for Map Bubble Layers - KendoReact Map
slug: map_add_shape_titles
tags: telerik, kendoreact, map, shapes, bubble
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

How can I add some custom symbols to the Bubble layer of the Map?

## Solution

The [Bubble Layer]({% slug bubble_layers_map %}) allows you to define the way symbols are rendered.
This approach works by defining a symbol function that uses the [Drawing API]({% slug overview_drawing %}) to define the shape. The symbol is typically a Group of shapes.

The following example demonstrates how to render 200-kilometer lines in West-East direction as a symbol.

> The lines get longer the farther you go North, which is due to that fact that the example uses the [Mercator Projection](https://en.wikipedia.org/wiki/Mercator_projection).

{% meta height:700 %}
{% embed_file map/custom-bubble-symbols/app.tsx preview %}
{% embed_file map/custom-bubble-symbols/main.tsx %}
{% embed_file map/custom-bubble-symbols/urban-areas.json %}
{% endmeta %}
