---
title: Grouping
description: 'Get started with the grouping functionality of the KendoReact MultiColumnComboBox and learn how to display grouped data.'
components: ["multicolumncombobox"]
slug: grouping_multicolumncombobox
position: 5
---

# Grouping

The KendoReact `MultiColumnComboBox` provides the option to display grouped data inside the component. The current article discusses the following MultiColumnComboBox Grouping scenarios:

-   [Basic usage](#toc-basic-usage)
-   [Grouping with filtering](#toc-grouping-with-filtering)
-   [Customization of the different popup elements when working with grouped data](#toc-grouping-customization)

## Basic Usage

To configure the data grouping in the MultiColumnComboBox component you need to define the [groupField]({% slug api_dropdowns_multicolumncomboboxprops %}#toc-groupfield) property.

-   The `groupField` property sets the field that defines the group name in each data item.

> The Grouping functionality has the following specifics:
>
> 1. MultiColumnComboBox doesn't internally group the data passed to it. To use the component in a grouping scenario, you need to use the `groupBy` method available in the KendoReact DataQuery package.
> 2. Data that can't be grouped is not visualized in the component - the MultiColumnComboBox internally filters the data items that doesn't have the field that is set as a `groupField`.

The following example demonstrates the grouping mode in action.

{% meta height:400 %}
{% embed_file multicolumncombobox/grouping/data.ts %}
{% embed_file multicolumncombobox/grouping/app.tsx preview %}
{% embed_file multicolumncombobox/grouping/main.tsx %}
{% endmeta %}

## Grouping with Filtering

The following example demonstrates how to configure the MultiColumnComboBox in a Grouping + Filtering scenario.

{% meta height:400 %}
{% embed_file multicolumncombobox/grouping-filtering/app.tsx preview %}
{% embed_file multicolumncombobox/grouping-filtering/main.tsx %}
{% embed_file multicolumncombobox/grouping-filtering/data.ts %}
{% endmeta %}

## Grouping Customization

Using the [itemRender]({% slug api_dropdowns_multicolumncomboboxprops %}#toc-itemrender), [groupHeaderItemRender]({% slug api_dropdowns_multicolumncomboboxprops %}#toc-groupheaderitemrender), and [groupStickyHeaderItemRender]({% slug api_dropdowns_multicolumncomboboxprops %}#toc-groupstickyheaderitemrender) of the KendoReact MultiColumnComboBox component we can customize its `data items`, `group headers`, and the `'sticky' header` that displays the top-most group that is
currently being scrolled.

By customizing the templates passed to each of the listed above properties you can modify the grouped MultiColumnComboBox data the way your scenario needs it.

{% meta height:420 %}
{% embed_file multicolumncombobox/grouping-custom/app.tsx preview %}
{% embed_file multicolumncombobox/grouping-custom/main.tsx %}
{% embed_file multicolumncombobox/grouping-custom/data.ts %}
{% embed_file multicolumncombobox/grouping-custom/custom-multicolumn.css %}
{% endmeta %}

## Suggested Links

-   [API Reference of the MultiColumnComboBox]({% slug api_dropdowns_multicolumncombobox %})
-   [API Reference of the MultiColumnComboBoxProps]({% slug api_dropdowns_multicolumncomboboxprops %})
