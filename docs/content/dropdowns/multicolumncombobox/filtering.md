---
title: Filtering
description: 'Display the records of a KendoReact MultiColumnComboBox that meet specified criteria in React projects.'
components: ["multicolumncombobox"]
slug: filtering_multicolumncombobox
position: 4
---

# Filtering

To enable the filtering functionality of the MultiColumnComboBox, set the [`filterable`]({% slug api_dropdowns_multicolumncomboboxprops %}#toc-filterable) property to `true`.

## Basic Configuration

Every time a user modifies the input value, the MultiColumnComboBox triggers an [`onFilterChange`]({% slug api_dropdowns_multicolumncomboboxprops %}#toc-onfilterchange) event. The event argument contains the typed string value that you can use to filter the source.

{% meta height:340 %}
{% embed_file multicolumncombobox/filtering/basic/func/app.tsx preview %}
{% embed_file multicolumncombobox/filtering/basic/func/main.tsx %}
{% endmeta %}

To filter the data after a delay, use a similar implementation. You can toggle the [`loading`]({% slug api_dropdowns_multicolumncomboboxprops %}#toc-loading) property and provide the user with a visual indication of the filtering process.

{% meta height:340 %}
{% embed_file multicolumncombobox/filtering/with-delay/func/app.tsx preview %}
{% embed_file multicolumncombobox/filtering/with-delay/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the MultiColumnComboBox]({% slug api_dropdowns_multicolumncomboboxprops %})
-   [ComboBox Filtering]({% slug filtering_combobox %})
