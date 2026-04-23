---
title: Exploding Pie/Donut Chart Series On Click
description: This article demonstrates how to enable click-to-expand functionality for pie chart segments in a React application.
type: how-to
page_title: Exploding Pie/Donut Chart Series On Click
slug: chart-click-to-expand-pie-series
tags: react, pie chart, click, expand, chart series
res_type: kb
ticketid: 1651859
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

How can I make the Pie or Donut Chart series explode when clicking them?

## Solution

To achieve click-to-expand functionality in a React pie chart you should:

1. Handle the [`seriesClick`](slug:api_charts_chartprops#toc-onseriesclick) event:

```html
<Chart onSeriesClick="{onSeriesClick}"> </Chart>
```

2. Within the event handler function, toggle the [`explodeField`](slug:api_charts_chartseriesitemprops#toc-explodefield) property and update the Chart data by reference to re-render the Chart.

```jsx
const onSeriesClick = (event) => {
    const newData = data.map((item) => {
        item.exploded = item === event.dataItem ? !item.exploded : false;
        return item;
    });

    setData(newData);
};
```

The following example demonstrates the full implementation of the suggested approach.

{% meta height:650 %}
{% embed_file charts/chart-click-to-expand/app.jsx preview %}
{% embed_file charts/chart-click-to-expand/main.jsx %}
{% endmeta %}

## See Also

-   [React Charts Documentation](https://www.telerik.com/kendo-react-ui/components/charts/)
-   [Chart SeriesItem Component](https://www.telerik.com/kendo-react-ui/components/charts/api/ChartSeriesItem/)
-   [Handling Events in React Charts](https://www.telerik.com/kendo-react-ui/components/charts/chart-elements/events/)
