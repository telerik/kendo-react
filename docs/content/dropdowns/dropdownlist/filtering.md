---
title: Filtering
description: 'Display the records of a KendoReact DropDownList that meet specified criteria in React projects.'
components: ["dropdownlist"]
slug: filtering_dropdownlist
subject: Filtering feature of DropDownList
position: 10000
tier: premium
---

# Filtering

To enable the filtering functionality, set the [`filterable`]({% slug api_dropdowns_dropdownlistprops %}#toc-filterable) property to `true`.

<CtaPanelOverview></CtaPanelOverview>

## Basic Configuration

When the filtering functionality is enabled, the component renders a filter input in the drop-down list. On every character input, the component triggers a [`onFilterChange`]({% slug api_dropdowns_dropdownlistprops %}#toc-onfilterchange) event. The event argument contains the typed string value that you can use to filter the source.

{% meta height:400 %}
{% embed_file dropdownlist/filtering-basic/func/app.tsx preview %}
{% embed_file dropdownlist/filtering-basic/func/main.tsx %}
{% endmeta %}

To filter the data after a delay, use a similar implementation. You can toggle the [`loading`]({% slug api_dropdowns_dropdownlistprops %}#toc-loading) property and provide the user with a visual indication of the filtering process.

{% meta height:400 %}
{% embed_file dropdownlist/filtering-with-delay/func/app.tsx preview %}
{% embed_file dropdownlist/filtering-with-delay/func/main.tsx %}
{% endmeta %}

## Minimum Filter Length

The following example demonstrates how to update the data and open the DropDownList only after typing a minimum number of characters.

{% meta height:400 %}
{% embed_file dropdownlist/filtering-minfilter/func/app.tsx preview %}
{% embed_file dropdownlist/filtering-minfilter/func/main.tsx %}
{% endmeta %}

## Grouping with Filtering

The following example demonstrates how to configure the DropDownList in a Grouping + Filtering scenario.

{% meta height:430 %}
{% embed_file dropdownlist/grouping-filtering/app.tsx preview %}
{% embed_file dropdownlist/grouping-filtering/main.tsx %}
{% embed_file dropdownlist/grouping-filtering/data.ts %}
{% endmeta %}

## Filtering with Remote Data and Virtualization

The following example demonstrates how to configure the DropDownList to use remote data along with data caching, virtual scrolling, and filtering.

{% meta height:400 %}
{% embed_file dropdownlist/virtualization-filtering-remote-data/func/app.tsx preview %}
{% embed_file dropdownlist/virtualization-filtering-remote-data/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DropDownList]({% slug api_dropdowns_dropdownlistprops %})
