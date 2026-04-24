---
title: Sorting
description: 'Get started with the sorting functionality of the KendoReact Gantt and learn how to sort single and multiple data-bound columns.'
components: ["gantt"]
slug: sorting_gantt
position: 1
---

# Sorting

The KendoReact Gantt enables you to sort single and multiple data-bound columns.

## Getting Started

To enable sorting:

1. Set the [`sortable`]({% slug api_gantt_ganttprops %}#toc-sortable) option of the Gantt.
1. Utilize the [`sort`]({% slug api_gantt_ganttprops %}#toc-sort) option to apply the sorting styles and buttons to the affected columns.
1. Set the [`field`]({% slug api_gantt_ganttcolumnprops %}#toc-field) option of the Gantt column.
1. When [`sortable`]({% slug api_gantt_ganttprops %}#toc-sortable) is configured and the user tries to sort a column, the [`onSortChange`]({% slug api_gantt_ganttprops %}#toc-onsortchange) event is emitted. Handle the `onSortChange` event where you have the option to sort the data programmatically, to make a request to the server for server sorting, or to use the [`orderBy`]({% slug api_gantt_ganttprops %}) function which automatically processes the data.

The following example demonstrates the minimum required configuration for sorting the Gantt records.

{% meta height:560 %}
{% embed_file sorting/func/app.tsx preview %}
{% embed_file sorting/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Gantt](slug://overview_gantt)
-   [API Reference of the KendoReact Gantt]({% slug api_gantt_gantt %})
-   [API Reference of the KendoReact GanttProps]({% slug api_gantt_ganttprops %})
