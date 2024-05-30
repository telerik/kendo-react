---
title: Set PlotBands on a Plot-Area Click of a Chart
description: An example of how to set PlotBands when clicking on the Plot Area of a KendoReact Chart.
type: how-to
page_title: Set PlotBands on Plot-Area Clicks of a Chart - KendoReact Charts
slug: chart-set-plotbands-on-plot-click
tags: grid, kendoreact, plotbands, charts, chart, plotarea, click
ticketid: 1521237
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>4.6.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description

How to set PlotBands when clicking on the Plot Area of a KendoReact Chart?

## Solution

This can be achieved by using the [`onPlotAreaClick`]({% slug api_charts_chartprops %}#toc-onplotareaclick) property whose event handler will trigger every time the user clicks on the Plot Area.

It will be used to get the crosshair values and set the values of the plotBands to be those of the crosshair. 

Optional: In order to avoid the Chart to play animations each time the PlotBands are updated, the [`transitions`]({% slug api_charts_chartprops %}#toc-transitions) property of the Chart should be set to false.



{% meta id height:520 %}
{% embed_file charts/set-plotbands-on-plot-area-click/app.jsx preview %}
{% embed_file charts/set-plotbands-on-plot-area-click/main.jsx %}
{% endmeta %}
