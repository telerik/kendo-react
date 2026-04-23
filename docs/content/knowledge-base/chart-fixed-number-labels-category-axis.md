---
title: Enforcing a Fixed Number of Labels on KendoReact Chart Category Axis
description: Learn how to enforce an exact number of labels on a category axis in KendoReact Chart using a custom labels.content function.
type: how-to
page_title: Set Exact Number of Labels on KendoReact Chart Axis
meta_title: Set Exact Number of Labels on KendoReact Chart Axis
slug: chart-fixed-number-labels-category-axis
tags: kendoreact, chart, category-axis, labels.content, labels.step
res_type: kb
ticketid: 1699234
components: ["chart"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>12.0.2</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact Chart</td>
	    </tr>
    </tbody>
</table>

## Description

I want to enforce an exact number of labels on the category axis in KendoReact Chart. When dealing with a large dataset, the Chart automatically calculates the number of labels based on its internal logic, which sometimes results in unexpected label counts even when using the `labels.step` property. I need a solution to display a fixed number of labels, such as 10, regardless of the internal calculations.

This knowledge base article also answers the following questions:

-   How can I set a fixed number of category axis labels in KendoReact Chart?
-   Why does changing `labels.step` not result in the desired number of labels?
-   How to use the `labels.content` property for custom label rendering?

## Solution

Use a custom `labels.content` function to control the rendering of axis labels and enforce an exact number of labels. Follow these steps:

1. Calculate the step value by dividing the total number of data points by the desired label count.
2. Use the `labels.content` property to selectively render labels based on the calculated step.

{% meta height:470 %}
{% embed_file charts/fixed-number-labels-category-axis/app.tsx preview %}
{% embed_file charts/fixed-number-labels-category-axis/main.tsx %}
{% embed_file charts/fixed-number-labels-category-axis/ch-weather-data.ts %}
{% endmeta %}

### Key Notes:

-   The `labels.content` function is used to display labels based on specific conditions.
-   The calculated step ensures that labels are evenly distributed and match the desired count.
-   Adjust the logic if your data contains irregular intervals or requires specific label placement.

## See Also

-   [KendoReact Chart Documentation](slug:overview_charts)
-   [Category Axis Configuration](slug:api_charts_chartcategoryaxisitemprops)
-   [Custom Labels Content](slug:api_charts_chartcategoryaxislabelsprops)
-   [StackBlitz Example](https://stackblitz.com/edit/react-hunbzhbw?file=app%2Fapp.jsx)
