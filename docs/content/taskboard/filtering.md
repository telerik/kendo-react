---
title: Filtering
description: 'Get started with the React TaskBoard package by KendoReact and learn more about the filtering functionality.'
components: ["taskboard"]
slug: filtering_taskboard
position: 2
---

# Filtering

The KendoReact TaskBoard enables you to display only the tasks that meet the specified criteria.

## Getting Started

To enable filtering:

1. Render an input component in the [TaskBoardToolbar]({% slug api_taskboard_taskboardtoolbar %}) component.
1. Based on the user input, create a [`CompositeFilterDescriptor`]({% slug api_kendo-data-query_compositefilterdescriptor %}) and filter the `taskData` by using the [`filterBy`]({% slug api_kendo-data-query_filterby %}) function.

The following example demonstrates how to implement the filtering functionality.

{% meta height:760 %}
{% embed_file basic/func/app.tsx preview %}
{% embed_file basic/func/main.tsx %}
{% embed_file basic/func/cards.ts %}
{% endmeta %}

## Suggested Links

-   [Getting Started with KendoReact](https://www.telerik.com/kendo-react-ui/components/getting-started/)
-   [API Reference of the KendoReact TaskBoard]({% slug api_taskboard_taskboard %})
-   [API Reference of the TaskBoardProps]({% slug api_taskboard_taskboardprops %})
-   [API Reference of the TaskBoardToolbar]({% slug api_taskboard_taskboardtoolbar %})
-   [API Reference of the TaskBoardToolbarProps]({% slug api_taskboard_taskboardtoolbarprops %})
-   [`CompositeFilterDescriptor`]({% slug api_kendo-data-query_compositefilterdescriptor %})
