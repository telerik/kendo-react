---
title: Displaying Category-Level Totals Inside KendoReact Stacked Bar Chart
description: Learn how to display category-level totals inside the chart area next to each bar in KendoReact Stacked Bar Chart without compressing the plot area.
type: how-to
page_title: Show Totals Next to Bars in KendoReact Stacked Bar Chart - KendoReact Chart
slug: chart-stacked-bar-display-category-totals
tags: chart, stacked-bar-chart, display-totals, labels, series
ticketid: 1708621
res_type: kb
category: knowledge-base
components: ['chart']
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>13.3.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Chart</td>
		</tr>
	</tbody>
</table>

## Description

I want to display the sum of all stacked series for each category inside the chart area, positioned horizontally right next to each bar in a KendoReact Stacked Bar Chart. The totals should appear next to the bars without shrinking or compressing the column width or the main plot area. Adding an additional series for totals should not affect the chart layout.

This knowledge base article also answers the following questions:

-   How to show totals for stacked series in KendoReact Stacked Bar Chart?
-   How to position labels next to bars in KendoReact Chart?
-   How to add a zero-value series to display totals?

## Solution

To achieve this behavior, add a series with zero values and use custom labels to display the totals. This approach ensures the layout remains unchanged while positioning the totals next to the bars.

1. Compute the totals for each category by summing all series values.
2. Add a new series with zero values and custom labels that display the computed totals.
3. Position the labels to the right of the bars using the `position: 'right'` setting.

<demo metaUrl="knowledge-base/charts/stacked-bar-totals/" height="470"></demo>

### Key Details

-   **Zero-value series**: Adding a series with zero values ensures the chart layout and bar widths remain unaffected.
-   **Custom labels**: The `labels.content` callback allows displaying the pre-computed totals instead of the actual series value.
-   **Label positioning**: Setting `position: 'right'` places the totals next to the end of each stacked bar.

## See Also

-   [KendoReact Chart Overview](slug:overview_charts)
-   [KendoReact Bar Chart Documentation](slug:barcolumn_seriestypes_charts)
-   [KendoReact ChartSeriesItem API](slug:api_charts_chartseriesitem)
