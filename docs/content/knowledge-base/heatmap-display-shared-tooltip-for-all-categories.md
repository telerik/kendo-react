---
title: Display shared tooltip for all categories
description: An example of how to display a shared tooltip for all categories
type: how-to
page_title: Display shared tooltip for all categories - KendoReact HeatMap
slug: heatmap-display-shared-tooltip-for-all-categories
tags: heatmap, tooltip, shared-tooltip
res_type: kb
category: knowledge-base
components: ["heatmap"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>10.2.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact HeatMap</td>
	    </tr>
    </tbody>
</table>

## Description

I have a `HeatMap` with multiple categories, but the shared tooltip render only the hovered value category.

## Solution

The behavior is expected and in order for the tooltip to display all category values, use custom rendering for the `ChartTooltip` and manually search for all values from the categories matching the x value of the hovered point.

{% meta height:400 %}
{% embed_file charts/heatmap-display-shared-tooltip-for-all-categories/app.tsx preview %}
{% embed_file charts/heatmap-display-shared-tooltip-for-all-categories/main.tsx %}
{% embed_file charts/heatmap-display-shared-tooltip-for-all-categories/ch-commit-data.tsx %}
{% endmeta %}
