---
title: Grouping
description: 'Get started with the grouping functionality of the KendoReact AutoComplete and learn how to display grouped data.'
components: ["autocomplete"]
slug: grouping_autocomplete
position: 6
---

# Grouping

The KendoReact `AutoComplete` provides the option to display grouped data inside the component. The current article discusses the following AutoComplete Grouping scenarios:

-   [Basic usage and differences between the two grouping modes available for the component](#toc-basic-usage)
-   [Customization of the different popup elements when working with grouped data](#toc-grouping-customization)
-   [Grouping with filtering]({% slug filtering_autocomplete %}#toc-grouping-with-filtering)

## Basic Usage

To configure the data grouping in the AutoComplete component you need to define the [`groupField`]({% slug api_dropdowns_autocompleteprops %}#toc-groupfield).

-   The `groupField` property sets the fields that defines the group name in each data item.

> The Grouping functionality has the following specifics:
>
> 1. AutoComplete doesn't internally group the data passed to it. To use the component in a grouping scenario, you need to use the `groupBy` method available in the KendoReact DataQuery package.
> 2. Data that can't be grouped is not visualized in the component - the AutoComplete internally filters the data items that doesn't have the field that is set as a `groupField`.

The following example demonstrates the AutoComplete data grouping in action.

{% meta height:350 %}
{% embed_file autocomplete/grouping/app.tsx preview %}
{% embed_file autocomplete/grouping/data.ts %}
{% embed_file autocomplete/grouping/main.tsx %}
{% endmeta %}

## Grouping Customization

Using the [itemRender]({% slug api_dropdowns_autocompleteprops %}#toc-itemrender), [groupHeaderItemRender]({% slug api_dropdowns_autocompleteprops %}#toc-groupheaderitemrender), and [groupStickyHeaderItemRender]({% slug api_dropdowns_autocompleteprops %}#toc-groupstickyheaderitemrender) of the KendoReact AutoComplete component we can customize its `data items`, `group headers`, and the `'sticky' header` that displays the top-most group that is
currently being scrolled.

By customizing the templates passed to each of the listed above properties you can modify the grouped AutoComplete data the way your scenario needs it.

{% meta height:360 %}
{% embed_file autocomplete/grouping-custom/data.ts %}
{% embed_file autocomplete/grouping-custom/app.tsx preview %}
{% embed_file autocomplete/grouping-custom/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the AutoComplete]({% slug api_dropdowns_autocomplete %})
-   [API Reference of the AutoCompleteProps]({% slug api_dropdowns_autocompleteprops %})
