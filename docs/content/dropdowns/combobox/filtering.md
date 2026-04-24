---
title: Filtering
description: 'Display the records of a KendoReact ComboBox that meet specified criteria in React projects.'
components: ["combobox"]
slug: filtering_combobox
position: 4
---

# Filtering

To enable the filtering functionality of the ComboBox, set the [`filterable`]({% slug api_dropdowns_comboboxprops %}#toc-filterable) property to `true`.

## Basic Configuration

On every user modification of the input value, the ComboBox triggers an [`onFilterChange`]({% slug api_dropdowns_comboboxprops %}#toc-onfilterchange) event. The event argument contains the typed string value that you can use to filter the source.

{% meta height:250 %}
{% embed_file combobox/filtering-basic/func/app.tsx preview %}
{% embed_file combobox/filtering-basic/func/main.tsx %}
{% endmeta %}

To filter the data after a delay, use a similar implementation. You can toggle the [`loading`]({% slug api_dropdowns_comboboxprops %}#toc-loading) property and provide the user with a visual indication of the filtering process.

{% meta height:250 %}
{% embed_file combobox/filtering-with-delay/func/app.tsx preview %}
{% embed_file combobox/filtering-with-delay/func/main.tsx %}
{% endmeta %}

## Minimum Filter Length

The following example demonstrates how to update the data and open the drop-down list of the ComboBox only after typing a minimum number of characters.

{% meta height:250 %}
{% embed_file combobox/filtering-minfilter/func/app.tsx preview %}
{% embed_file combobox/filtering-minfilter/func/main.tsx %}
{% endmeta %}

## Filtering with Remote Data and Virtualization

The following example demonstrates how to configure the ComboBox to use remote data along with data caching, virtual scrolling, and filtering.

{% meta height:300 %}
{% embed_file combobox/virtualization-filtering-remote-data/func/app.tsx preview %}
{% embed_file combobox/virtualization-filtering-remote-data/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ComboBox]({% slug api_dropdowns_comboboxprops %})
