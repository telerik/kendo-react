---
title: Virtualization
description: 'Enable the virtual scrolling functionality of the KendoReact ComboBox in React projects.'
components: ["combobox"]
slug: virtualization_combobox
position: 8
---

# Virtualization

Virtual scrolling provides an alternative to paging and is useful for displaying large sets of data.

The virtualization functionality uses a fixed amount of list items in the pop-up list of the component. While the user is scrolling the pop-up list, the ComboBox requests and displays only the visible items.

To enable virtualization, configure the [`onPageChange`]({% slug api_dropdowns_comboboxprops %}#toc-onpagechange) event and the composite [`virtual`]({% slug api_dropdowns_comboboxprops %}#toc-virtual) property which contains the following fields:

-   `total`&mdash;Represents the number of records.
-   `skip`&mdash;Represents the start of the sub-set of data which is loaded in the ComboBox.
-   `pageSize`&mdash;Indicates the size of the sub-set of data.
-   `onPageChange`&mdash;Provides the data for each page through the `onPageChange` event handler.

> -   In order for the virtualization to work properly, the items in the popup list must have the same height. If the content of an item does not fit in a single row, the height of this item will be different from the height of the other items.
> -   You also need to make sure that the `pageSize` value is equal to twice the number of visible items in the Popup.

## Basic Configuration

The following example demonstrates how to set the virtualization of the ComboBox.

{% meta height:350 %}
{% embed_file combobox/virtualization-basic/func/app.tsx preview %}
{% embed_file combobox/virtualization-basic/func/main.tsx %}
{% endmeta %}

## Virtualization with Filtering

If you use virtualization in your project alongside filtering, scrolling will be reset every time the value of the filter input is changed.

{% meta height:320 %}
{% embed_file combobox/virtualization-filtering/func/app.tsx preview %}
{% embed_file combobox/virtualization-filtering/func/main.tsx %}
{% endmeta %}

## Virtualization with Grouping

The below example shows how we can use the ComboBox in a scenario with Grouping and Virtualization.

{% meta height:320 %}
{% embed_file combobox/virtualization-grouping/func/app.tsx preview %}
{% embed_file combobox/virtualization-grouping/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Virtualization with Filtering and Remote Data]({% slug filtering_combobox %}#toc-filtering-with-remote-data-and-virtualization)
-   [API Reference of the ComboBox]({% slug api_dropdowns_comboboxprops %})
