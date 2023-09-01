---
title: Set Custom Colors in Chart Series
description: An example on how to set custom colors in the KendoReact Chart series.
type: how-to
page_title: Set Custom Colors in Chart Series - KendoReact Chart
slug: custom-colors-in-chart-series
tags: chart, kendoreact, dates, format
ticketid: 1410298
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>


## Description

How can I use the API for implementations such as using assigned customized colors for the series plot of a Donut Chart?

## Solution

Use the [`color`]({% slug api_charts_chartseriesitemprops %}#toc-color) or the [`colorField`]({% slug api_charts_chartseriesitemprops %}#toc-colorfield) props of the `ChartSeriesItem`.

{% meta id height:500 %}
{% embed_file charts/set-colors/main.jsx preview %}
{% endmeta %}
