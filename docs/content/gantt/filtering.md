---
title: Filtering
description: 'Get started with the KendoReact Gantt that makes filtering only of those data records which meet specified criteria possible.'
components: ["gantt"]
slug: filtering_gantt
position: 2
---

# Filtering

The KendoReact Gantt enables you to display only those Gantt records which meet specified criteria.

## Getting Started

To enable filtering:

1. Set the [`filter`]({% slug api_gantt_ganttprops %}#toc-filter) prop of the Gantt. The filtering conditions are declared as [`FilterDescriptors`]({% slug api_kendo-data-query_filterdescriptor %}).
1. Handle the [`onFilterChange`]({% slug api_gantt_ganttprops %}#toc-onfilterchange) or the [`onDataStateChange`]({% slug api_gantt_ganttprops %}#toc-ondatastatechange) event of the Gantt, and filter the data manually or by using the [`filterBy`]({% slug api_gantt_filterby %}) function.
1. Pass the component which will be responsible for the filtering of the column by using the [`filter`]({% slug api_gantt_ganttcolumnprops %}#toc-filter) prop.

Each consecutive filter is added to the previous ones and reduces the subset of data.

## Filter Rows

By default, when filtering is enabled, the Gantt renders a filter row in its header. Based on the type of the filter component which is set in the `filter` prop of the columns, the filter row displays components in each column header where the user can filter string, numeric, boolean, or date inputs.

{% meta height:480 %}
{% embed_file filtering/func/app.tsx preview %}
{% embed_file filtering/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Gantt](slug://overview_gantt)
-   [API Reference of the KendoReact Gantt]({% slug api_gantt_gantt %})
-   [API Reference of the KendoReact GanttProps]({% slug api_gantt_ganttprops %})
