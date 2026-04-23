---
title: Sorting
description: 'Get started with the KendoReact PivotGrid UI Component and learn how to create and configure the widget.'
components: ["pivotgrid"]
slug: sorting_pivotgrid
position: 4
---

# Sorting

The KendoReact PivotGrid component supports sorting through the [`usePivotOLAPService`]({% slug api_pivotgrid_usepivotolapservice %}) hook or the [`PivotOLAPService`]({% slug api_pivotgrid_pivotolapservice %}) higher-order component.

The `sort` property is a JavaScript array of [SortDescriptor]({% slug api_kendo-data-query_sortdescriptor %}) objects containing the following keys:

-   field&mdash;The name of the dimension, for example, `[Date].[Calendar]`.
-   dir&mdash;The direction of the sorting.

> All inner members of the selected dimension will also be sorted.

## Configuration

To set an initial `sort`, pass the [`defaultSort`]({% slug api_pivotgrid_pivotolapserviceargs %}#sort) property to the [`usePivotOLAPService`]({% slug api_pivotgrid_usepivotolapservice %}) hook or the [`PivotOLAPService`]({% slug api_pivotgrid_pivotolapservice %}) higher-order component.

The following example demonstrates the basic configuration of the default sorting.

{% meta height:770 %}
{% embed_file sort/configuration/func/app.tsx preview %}
{% embed_file sort/configuration/func/main.tsx %}
{% embed_file sort/configuration/func/wide-column.tsx %}
{% endmeta %}

## Suggested Links

-   [PivotGrid Filtering]({% slug filtering_pivotgrid %})
-   [API Reference of the KendoReact usePivotOLAPService hook]({% slug api_pivotgrid_usepivotolapservice %})
-   [API Reference of the KendoReact PivotOLAPService HOC]({% slug api_pivotgrid_pivotolapservice %})
