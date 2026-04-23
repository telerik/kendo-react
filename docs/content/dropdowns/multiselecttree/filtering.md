---
title: Filtering
description: 'Display the records of a KendoReact MultiSelectTree that meet specified criteria in React projects.'
components: ["multiselecttree"]
slug: filtering_multiselecttree
position: 2
---

# Filtering

To enable the filtering functionality, set the [`filterable`]({% slug api_dropdowns_multiselecttreeprops %}#toc-filterable) property to `true`.

## Basic Configuration

When the filtering functionality is enabled, the MultiSelectTree component renders a filter input in the drop-down list. On every character input, the MultiSelectTree triggers a [`onFilterChange`]({% slug api_dropdowns_multiselecttreeprops %}#toc-onfilterchange) event. The event argument contains the typed string value that you can use to filter the source.

{% meta height:380 %}
{% embed_file multiselecttree/filtering/func/app.tsx preview %}
{% embed_file multiselecttree/filtering/func/main.tsx %}
{% endmeta %}

## Visualize Filtering

You can toggle the [`loading`]({% slug api_dropdowns_multiselecttreeprops %}#toc-loading) property and provide the user with a visual indication of the filtering process.

{% meta height:380 %}
{% embed_file multiselecttree/filtering-with-delay/func/app.tsx preview %}
{% embed_file multiselecttree/filtering-with-delay/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the MultiSelectTree]({% slug api_dropdowns_multiselecttreeprops %})
