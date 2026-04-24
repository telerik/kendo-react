---
title: Filtering
description: 'Display the records of a KendoReact MultiSelect that meet specified criteria in React projects.'
components: ["multiselect"]
slug: filtering_multiselect
subject: Filtering feature of MultiSelect
position: 10000
tier: premium
---

# Filtering

To enable the filtering functionality of the MultiSelect, set the [`filterable`]({% slug api_dropdowns_multiselectprops %}#toc-filterable) property to `true`.

<CtaPanelOverview></CtaPanelOverview>

## Basic Configuration

On every user modification of the input value, the MultiSelect triggers an [`onFilterChange`]({% slug api_dropdowns_multiselectprops %}#toc-onfilterchange) event. The event argument contains the typed string value that you can use to filter the source.

{% meta height:300 %}
{% embed_file multiselect/filtering-basic/func/app.tsx preview %}
{% embed_file multiselect/filtering-basic/func/main.tsx %}
{% endmeta %}

To filter the data after a delay, use a similar implementation. You can toggle the [`loading`]({% slug api_dropdowns_multiselectprops %}#toc-loading) property and provide the user with a visual indication of the filtering process.

{% meta height:300 %}
{% embed_file multiselect/filtering-with-delay/func/app.tsx preview %}
{% embed_file multiselect/filtering-with-delay/func/main.tsx %}
{% endmeta %}

## Minimum Filter Length

The following example demonstrates how to update the data and open the drop-down list of the MultiSelect only after typing a minimum number of characters.

{% meta height:300 %}
{% embed_file multiselect/filtering-minfilter/func/app.tsx preview %}
{% embed_file multiselect/filtering-minfilter/func/main.tsx %}
{% endmeta %}

## Grouping with Filtering

The following example demonstrates how to configure the MultiSelect in a Grouping + Filtering scenario.

{% meta height:350 %}
{% embed_file multiselect/grouping-filtering/data.ts %}
{% embed_file multiselect/grouping-filtering/app.tsx preview %}
{% embed_file multiselect/grouping-filtering/main.tsx %}
{% endmeta %}

## Filtering with Remote Data and Virtualization

The following example demonstrates how to configure the MultiSelect to use remote data along with data caching, virtual scrolling, and filtering.

{% meta height:300 %}
{% embed_file multiselect/virtualization-filtering-remote-data/func/app.tsx preview %}
{% embed_file multiselect/virtualization-filtering-remote-data/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the MultiSelect]({% slug api_dropdowns_multiselectprops %})
