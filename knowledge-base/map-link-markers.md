---
title: Link Map Markers to Locations
description: "Learn how to draw location pointers for markers in the KendoReact Map."
type: how-to
page_title: Link Map Markers to Locations - KendoReact Map
slug: map_link_markers
tags: telerik, kendoreact, map, markers, draw, link, line
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

How can I draw a straight line between a marker and a location?

## Solution

1. Add [shape and marker layers]({% slug overview_layers_map %}) to the Map configuration.
1. Attach a handler to the [reset event]({% slug events_map %}) of the Map.
1. Create a method that will draw a line between a marker and a specified position.
1. Inside the method, retrieve the from and to coordinates for the line by using the [locationToView method]({% slug api_map_map %}#toc-locationtoview).
1. Get a reference to the shape layer so you can draw on its surface.
1. Draw the line by using the [Path element]({% slug api_kendo-drawing_path %}).

The following example demonstrates how to draw a straight line between a marker and a location.

{% meta height:700 %}
{% embed_file map/link-markers/main.tsx preview %}
{% endmeta %}
