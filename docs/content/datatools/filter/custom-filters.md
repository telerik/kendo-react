---
title: Custom Filters
page_title: KendoReact Filter Documentation | Custom Filters
description: "Get started with the KendoReact Filter and learn how to add and implement custom filter inputs."
components: ["filter"]
slug: custom_filters_filters
position: 100
---

# Getting Started with the KendoReact Custom Filters

The Filter component can utilize custom filters if the built-in filters do not fit the scenario. The next steps showcase how a custom filter can be used in the Filter component.

1. Pass down a custom filter via the `fields` prop.

2. Handle the `onFilterChange` event coming from the props of the filter callback. The event receives two objects:
    - `nextFilter` which receives `FilterDescriptor`.
    - `prevFilter` which receives `FilterDescriptor`.

The following demo showcases how to implement and pass a custom filter to the Filter component.

{% meta height:785 %}
{% embed_file filter/custom-filter/app.tsx preview %}
{% embed_file filter/custom-filter/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Filter Props]({% slug api_data-tools_filterprops %})
