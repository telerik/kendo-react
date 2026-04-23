---
title: Filtering
description: 'Get started with the KendoReact PivotGrid UI Component and learn how to create and configure the widget.'
components: ["pivotgrid"]
slug: filtering_pivotgrid
position: 3
---

# Filtering

The KendoReact PivotGrid component supports filtering through the [`usePivotOLAPService`]({% slug api_pivotgrid_usepivotolapservice %}) hook or the [`PivotOLAPService`]({% slug api_pivotgrid_pivotolapservice %}) higher-order component.

The `filter` property is a JavaScript array of [FilterDescriptor]({% slug api_kendo-data-query_filterdescriptor %}) objects containing the following keys:

-   field&mdash;The full path to the tuple member. For example, `[Date].[Calendar].[Calendar Year].&[2005]`.
-   operator&mdash;All operators that work with strings. Note that the component treats field values as strings.
-   value&mdash;The filter value.

## Configuration

To set an initial `filter`, pass the [`defaultFilter`]({% slug api_pivotgrid_pivotolapserviceargs %}#filter) property to the [`usePivotOLAPService`]({% slug api_pivotgrid_usepivotolapservice %}) hook or the [`PivotOLAPService`]({% slug api_pivotgrid_pivotolapservice %}) higher-order component.

The following example demonstrates the basic configuration of the default filter.

{% meta height:770 %}
{% embed_file filter/configuration/func/app.tsx preview %}
{% embed_file filter/configuration/func/main.tsx %}
{% embed_file filter/configuration/func/wide-column.tsx %}
{% endmeta %}

## Suggested Links

-   [PivotGrid Sorting]({% slug sorting_pivotgrid %})
-   [API Reference of the KendoReact usePivotOLAPService hook]({% slug api_pivotgrid_usepivotolapservice %})
-   [API Reference of the KendoReact PivotOLAPService HOC]({% slug api_pivotgrid_pivotolapservice %})
