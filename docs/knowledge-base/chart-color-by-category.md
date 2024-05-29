---
title: Set different colors in Chart for ChartSeriesItem based on category value
description: An example on how to set different colors per category for the ChartSeriesItem
type: how-to
page_title: Setting different colors per category for ChartSeriesItem - KendoReact Chart
slug: chart-color-by-category
tags: chart, chartseriesitem, customization, color
ticketid: 
res_type: kb
category: knowledge-base
---

## Environment
<table>
    <tbody>
	    <tr> 
	    	<td>Product Version</td>
	    	<td>5.12.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description
I want to have different colors per category value for the ChartSeriesItem


## Solution
The color property of the ChartSeriesItem accepts function where the dataItem is accessible. Using the category value we can create a random color per each category (or use predefined colors) and store it in an array or an object, so it can be re-used for other items with the same category. 

This is an example showcasing how to limit the value:

{% meta id:index height:760 %}
{% embed_file charts/chart-color-by-category/app.jsx preview %}
{% embed_file charts/chart-color-by-category/main.jsx %}
{% embed_file charts/chart-color-by-category/bubble-data.json %}
{% endmeta %}
