---
title: Managing Initial Visibility of Chart Series in React
description: Learn how to set and control the initial visibility of a series in a KendoReact Chart, including handling legend clicks to toggle visibility.
type: how-to
page_title: How to Control Visibility of Chart Series in React
slug: chart-initially-visible-series
tags: chart, react, series, visibility, legend, click
res_type: kb
ticketid: 1662984
components: ["chart"]
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>9.0.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Chart</td>
		</tr>
	</tbody>
</table>

## Description

When working with the [KendoReact Chart](https://www.telerik.com/kendo-react-ui/components/charts/chart/), there may be a requirement to set the initial visibility of a series. This involves not only setting the visibility at the initial render but also controlling it programmatically when interacting with the chart's legend. This KB article also answers the following questions:

-   How to initially hide a series in a React Chart?
-   How to toggle series visibility with legend clicks in React?
-   How to manage chart series states programmatically in React?

## Solution

To control the visibility of a chart series in React, you need to manage the visibility state programmatically, especially when interacting with the chart's legend to toggle the visibility of series.

```jsx
const onLegendItemClick = (e) => {
    var clickedItem = series[e.pointIndex];

    let newSeries = series.map((item) => {
        if (item.category === clickedItem.category) {
            item.visible = !item.visible;
        }
        return item;
    });

    setData(newSeries);
};
```

Here's a runnable sample demonstrating the approach described above:

{% meta height:660 %}
{% embed_file charts/initially-visible-series/app.jsx preview %}
{% embed_file charts/initially-visible-series/main.jsx %}
{% endmeta %}

## See Also

-   [Overview of Chart for React](https://www.telerik.com/kendo-react-ui/components/charts/chart/)
-   [Chart API - ChartSeriesItem](https://www.telerik.com/kendo-react-ui/components/charts/api/ChartSeriesItem/)
-   [Handling Events in Chart for React](https://www.telerik.com/kendo-react-ui/components/charts/chart/events/)
