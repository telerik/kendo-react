---
title: Filtering
description: 'Display the records of a KendoReact DropDownTree that meet specified criteria in React projects.'
components: ["dropdowntree"]
slug: filtering_dropdowntree
position: 2
---

# Filtering

To enable the filtering functionality, set the [`filterable`]({% slug api_dropdowns_dropdowntreeprops %}#toc-filterable) property to `true`.

## Basic Configuration

When the filtering functionality is enabled, the DropDownTree component renders a filter input in the drop-down list. On every character input, the DropDownTree triggers a [`onFilterChange`]({% slug api_dropdowns_dropdowntreeprops %}#toc-onfilterchange) event. The event argument contains the typed string value that you can use to filter the source.

{% meta height:400 %}
{% embed_file dropdowntree/filtering/func/app.tsx preview %}
{% embed_file dropdowntree/filtering/func/main.tsx %}
{% endmeta %}

## Visualize Filtering

You can toggle the [`loading`]({% slug api_dropdowns_dropdowntreeprops %}#toc-loading) property and provide the user with a visual indication of the filtering process.

{% meta height:400 %}
{% embed_file dropdowntree/filtering-with-delay/func/app.tsx preview %}
{% embed_file dropdowntree/filtering-with-delay/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DropDownTree]({% slug api_dropdowns_dropdowntreeprops %})
