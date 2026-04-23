---
title: Integration with Chart
description: 'Get started with the KendoReact PivotGrid and learn how to integrate it with the React Chart component.'
components: ["pivotgrid"]
slug: integration_with_chart
position: 39
---

# Integration with the KendoReact Chart Component

To configure the Chart's data:

1. Use the PivotGrid's [`dataCells`]({% slug api_pivotgrid_datacells %}) function and pass the PivotGrid's [`rows`]({% slug api_pivotgrid_pivotgridprops %}#toc-rows), [`columns`]({% slug api_pivotgrid_pivotgridprops %}#toc-columns) and [`data`]({% slug api_pivotgrid_pivotgridprops %}#toc-data) props.
1. Loop through the `dataCells` result and create Chart `series` and `categories`.

The following example demonstrates how to visualize the PivotGrid data with the KendoReact Chart component.

{% meta height:980 %}
{% embed_file chart/func/app.tsx preview %}
{% embed_file chart/func/main.tsx %}
{% embed_file chart/func/chart-data.ts %}
{% embed_file chart/func/data.ts %}
{% embed_file chart/func/styles.css %}
{% endmeta %}

## Suggested Links

-   [API Reference of the PivotGrid]({% slug api_pivotgrid %})
-   [Getting Started with the KendoReact Charts]({% slug getstarted_charts %})
