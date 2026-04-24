---
title: Grouping
description: 'Get started with the grouping functionality of the KendoReact ComboBox and learn how to display grouped data.'
components: ["combobox"]
slug: grouping_combobox
position: 5
---

# Grouping

The KendoReact `ComboBox` provides the option to display grouped data inside the component. The current article discusses the following Combobox Grouping scenarios:

-   [Basic usage and differences between the two grouping modes available for the component](#toc-basic-usage)
-   [Grouping with filtering](#toc-grouping-with-filtering)
-   [Customization of the different popup elements when working with grouped data](#toc-grouping-customization)

## Basic Usage

To configure the data grouping in the ComboBox component you need to define the [`groupField`]({% slug api_dropdowns_comboboxprops %}#toc-groupfield) property.

-   The `groupField` property sets the field that defines the group name in each data item.

> The Grouping functionality has the following specifics:
>
> 1. ComboBox doesn't internally group the data passed to it. To use the component in a grouping scenario, you need to use the `groupBy` method available in the KendoReact DataQuery package.
> 2. Data that can't be grouped is not visualized in the component - the ComboBox internally filters the data items that doesn't have the field that is set as a `groupField`.

The following example demonstrates the `modern` grouping mode in action.

{% meta height:320 %}
{% embed_file combobox/grouping/app.tsx preview %}
{% embed_file combobox/grouping/main.tsx %}
{% embed_file combobox/grouping/data.ts %}
{% endmeta %}

## Grouping with Filtering

The following example demonstrates how to configure the ComboBox in a Grouping + Filtering scenario.

{% meta height:320 %}
{% embed_file combobox/grouping-filtering/app.tsx preview %}
{% embed_file combobox/grouping-filtering/main.tsx %}
{% embed_file combobox/grouping-filtering/data.ts %}
{% endmeta %}

## Grouping Customization

Using the [itemRender]({% slug api_dropdowns_comboboxprops %}#toc-itemrender), [groupHeaderItemRender]({% slug api_dropdowns_comboboxprops %}#toc-groupheaderitemrender), and [groupStickyHeaderItemRender]({% slug api_dropdowns_comboboxprops %}#toc-groupstickyheaderitemrender) of the KendoReact ComboBox component we can customize its `data items`, `group headers`, and the `'sticky' header` that displays the top-most group that is
currently being scrolled.

By customizing the templates passed to each of the listed above properties you can modify the grouped ComboBox data the way your scenario needs it.

{% meta height:320 %}
{% embed_file combobox/grouping-custom/app.tsx preview %}
{% embed_file combobox/grouping-custom/main.tsx %}
{% embed_file combobox/grouping-custom/data.ts %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ComboBox]({% slug api_dropdowns_combobox %})
-   [API Reference of the ComboBoxProps]({% slug api_dropdowns_comboboxprops %})
