---
title: Virtualization
description: 'Enable the virtual scrolling functionality of the KendoReact MultiColumnComboBox in React projects.'
components: ["multicolumncombobox"]
slug: virtualization_multicolumncombobox
position: 6
---

# Virtualization

The virtual scrolling provides an alternative to paging and it is useful for displaying large sets of data.

The virtualization functionality uses a fixed amount of list items in the pop-up list of the component. While the user is scrolling the pop-up list, the MultiColumnComboBox requests and displays only the visible items.

## Configuration

To enable the virtualization, configure the [`onPageChange`]({% slug api_dropdowns_multicolumncomboboxprops %}#toc-onpagechange) event and the composite [`virtual`]({% slug api_dropdowns_multicolumncomboboxprops %}#toc-virtual) property, which contains the following fields:

-   `total`&mdash;Represents the number of records.
-   `skip`&mdash;Represents the start of the sub-set of data which is loaded in the MultiColumnComboBox.
-   `pageSize`&mdash;Indicates the size of the sub-set of data.
-   `onPageChange`&mdash;Provides the data for each page through the `onPageChange` event handler.

Observe the following rules:

> -   The items in the popup list must have the same height. If the content of an item does not fit in the row, the height of this item will differ from the height of the other items.
> -   The `pageSize` value must be set to double the number of visible items in the Popup.

The following example demonstrates how to set the virtualization of the MultiColumnComboBox.

{% meta height:380 %}
{% embed_file multicolumncombobox/virtualization/func/app.tsx preview %}
{% embed_file multicolumncombobox/virtualization/func/main.tsx %}
{% endmeta %}

## Virtualization with Grouping

The below example shows how we can use the MultiColumnComboBox in a scenario with Grouping and Virtualization.

{% meta height:370 %}
{% embed_file multicolumncombobox/virtualization-grouping/func/app.tsx preview %}
{% embed_file multicolumncombobox/virtualization-grouping/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the MultiColumnComboBox]({% slug api_dropdowns_multicolumncomboboxprops %})
-   [ComboBox with Virtualization, Filtering and Remote Data]({% slug filtering_combobox %}#toc-filtering-with-remote-data-and-virtualization)
