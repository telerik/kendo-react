---
title: Set Multiple X-Axes for a Chart
description: An example on how to set multiple x-axes for a KendoReact Chart.
type: how-to
page_title: Set Multiple X-Axes for a Chart - KendoReact Chart
slug: chart-set-multiple-x-axes
tags: chat, axes, multiple axes, x-axis
ticketid: 1559361
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>5.1.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>


## Description

How can I set multiple x-axes for a chart?

## Solution

Use the [axisCrossingValue](https://www.telerik.com/kendo-react-ui/components/charts/api/ChartCategoryAxisItemProps/#toc-axiscrossingvalue) in order to pass the values for the overlapping axes:

{% meta id:index height:600 %}
{% embed_file charts/set-multiple-x-axes/main.jsx preview %}
{% endmeta %}
