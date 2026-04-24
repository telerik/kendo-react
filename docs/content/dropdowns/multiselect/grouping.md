---
title: Grouping
description: 'Get started with the grouping functionality of the KendoReact MultiSelect and learn how to display grouped data.'
components: ["multiselect"]
slug: grouping_multiselect
position: 5
---

# Grouping

The KendoReact `MultiSelect` provides the option to display grouped data inside the component. The current article discusses the following MultiSelect Grouping scenarios:

-   [Basic usage and differences between the two grouping modes available for the component](#toc-basic-usage)
-   [Customization of the different popup elements when working with grouped data](#toc-grouping-customization)
-   [Grouping with filtering]({% slug filtering_multiselect %}#toc-grouping-with-filtering)

## Basic Usage

To configure the data grouping in the MultiSelect component you need to define the [`groupField`]({% slug api_dropdowns_multiselectprops %}#toc-groupfield).

-   The `groupField` property sets the fields that defines the group name in each data item.

> The Grouping functionality has the following specifics:
>
> 1. MultiSelect doesn't internally group the data passed to it. To use the component in a grouping scenario, you need to use the `groupBy` method available in the KendoReact DataQuery package.
> 2. Data that can't be grouped is not visualized in the component - the MultiSelect internally filters the data items that doesn't have the field that is set as a `groupField`.

The following example demonstrates the MultiSelect data grouping in action.

{% meta height:350 %}
{% embed_file multiselect/grouping/data.ts %}
{% embed_file multiselect/grouping/app.tsx preview %}
{% embed_file multiselect/grouping/main.tsx %}
{% endmeta %}

## Grouping Customization

Using the [itemRender]({% slug api_dropdowns_multiselectprops %}#toc-itemrender), [groupHeaderItemRender]({% slug api_dropdowns_multiselectprops %}#toc-groupheaderitemrender), and [groupStickyHeaderItemRender]({% slug api_dropdowns_multiselectprops %}#toc-groupstickyheaderitemrender) of the KendoReact MultiSelect component we can customize its `data items`, `group headers`, and the `'sticky' header` that displays the top-most group that is
currently being scrolled.

By customizing the templates passed to each of the listed above properties you can modify the grouped MultiSelect data the way your scenario needs it.

{% meta height:350 %}
{% embed_file multiselect/grouping-custom/data.ts %}
{% embed_file multiselect/grouping-custom/app.tsx preview %}
{% embed_file multiselect/grouping-custom/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the MultiSelect]({% slug api_dropdowns_multiselect %})
-   [API Reference of the MultiSelectProps]({% slug api_dropdowns_multiselectprops %})
