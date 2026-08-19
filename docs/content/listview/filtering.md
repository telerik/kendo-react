---
title: Filtering
description: 'Get started with the filtering capabilities of the KendoReact ListView and learn how to filter the data.'
components: ["listview"]
slug: filtering_listview
position: 5
---

# Filtering

The KendoReact ListView can be easily integrated with the [KendoReact Filter]({% slug overview_filter %}) to filter the data in the list.

## Basic Usage

To filter the ListView data, integrate the [KendoReact Filter]({% slug overview_filter %}) component above the ListView and use the `filterBy` utility from the [Data Query](slug:overview_dataquery) package to apply the active [`CompositeFilterDescriptor`](slug:api_kendo-data-query_compositefilterdescriptor) to your data on each [`onChange`]({% slug api_data-tools_filterprops %}#toc-onchange) event. The Filter component supports text, numeric, boolean, and date field types, as well as composite `and`/`or` logic grouping.

The following example demonstrates how to filter ListView items by text, numeric range, and boolean fields using the `Filter` component.

{% meta height:1250 %}
{% embed_file filtering/func/app.tsx preview %}
{% embed_file filtering/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ListView]({% slug api_listview_listviewprops %})
