---
title: Set custom rendering for the Heatmap ChartSeriesItem
description: An example on how to set custom rendering for the ChartSeriesItem in Heatmap
type: how-to
page_title: Setting Different ChartSeriesItem Visual in Heatmap - KendoReact Chart
slug: chart-heatmap-custom-series-item
tags: chart, chartseriesitem, customization, visual
ticketid: 
res_type: kb
category: knowledge-base
---

## Environment
<table>
    <tbody>
	    <tr> 
	    	<td>Product Version</td>
	    	<td>5.14.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description
I want to add border radius in Heatmap series items (ChartSeriesItem)


## Solution
Set custom visual for ChartSeriesItem and draw custom shape with border radius.

This is an example demonstrating the above approach:

{% meta id height:660 %}
{% embed_file charts/heatmap-custom-series-item/app.jsx preview %}
{% embed_file charts/heatmap-custom-series-item/main.jsx %}
{% endmeta %}
