---
title: Filtering
description: 'Display the records of a KendoReact AutoComplete that meet specified criteria in React projects.'
components: ["autocomplete"]
slug: filtering_autocomplete
position: 10000
---

# Filtering

The AutoComplete enables you to display only those suggestion list items which meet specified criteria.

## Basic Configuration

On every user modification of the input value, the AutoComplete triggers an [`onChange`]({% slug api_dropdowns_autocompleteprops %}#toc-onchange) event. The event argument contains the typed string value that you can use to filter the source.

{% meta height:310 %}
{% embed_file autocomplete/filtering-basic/func/app.tsx preview %}
{% embed_file autocomplete/filtering-basic/func/main.tsx %}
{% endmeta %}

To filter the data after a delay, use a similar implementation. You can toggle the [`loading`]({% slug api_dropdowns_autocompleteprops %}#toc-loading) property and provide the user with a visual indication of the filtering process.

{% meta height:310 %}
{% embed_file autocomplete/filtering-with-delay/func/app.tsx preview %}
{% embed_file autocomplete/filtering-with-delay/func/main.tsx %}
{% endmeta %}

## Minimum Filter Length

The following example demonstrates how to update the data and open the drop-down list of the AutoComplete only after typing a minimum number of characters.

{% meta height:310 %}
{% embed_file autocomplete/filtering-minfilter/func/app.tsx preview %}
{% embed_file autocomplete/filtering-minfilter/func/main.tsx %}
{% endmeta %}

## Grouping with Filtering

The following example demonstrates how to configure the AutoComplete in a Grouping + Filtering scenario.

{% meta height:360 %}
{% embed_file autocomplete/grouping-filtering/data.ts %}
{% embed_file autocomplete/grouping-filtering/app.tsx preview %}
{% embed_file autocomplete/grouping-filtering/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the AutoComplete]({% slug api_dropdowns_autocompleteprops %})
