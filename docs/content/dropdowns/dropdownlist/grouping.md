---
title: Grouping
description: 'Get started with the grouping functionality of the KendoReact DropDownList and learn how to display grouped data.'
components: ['dropdownlist']
slug: grouping_dropdownlist
position: 5
---

# Grouping

The KendoReact DropDownList provides the option to display grouped data inside the component. The current article discusses the following DropDownList Grouping scenarios:

-   [Basic usage](#toc-basic-usage)
-   [Customization of the different popup elements when working with grouped data](#toc-grouping-customization)
-   [Grouping with filtering]({% slug filtering_dropdownlist %}#toc-grouping-with-filtering)

## Basic Usage

To configure the data grouping in the DropDownList component you need to define the [`groupField`]({% slug api_dropdowns_dropdownlistprops %}#toc-groupfield) property.

-   The `groupField` property sets the field that defines the group name in each data item.

> The Grouping functionality has the following specifics:
>
> 1. DropDownList doesn't internally group the data passed to it. To use the component in a grouping scenario, you need to use the `groupBy` method available in the KendoReact DataQuery package.
> 2. Data that can't be grouped is not visualized in the component - the DropDownList internally filters the data items that doesn't have the field that is set as a `groupField`.

{% meta height:340 %}
{% embed_file dropdownlist/grouping/app.tsx preview %}
{% embed_file dropdownlist/grouping/main.tsx %}
{% embed_file dropdownlist/grouping/data.ts %}
{% endmeta %}

## Grouping Customization

Using the [itemRender]({% slug api_dropdowns_dropdownlistprops %}#toc-itemrender), [groupHeaderItemRender]({% slug api_dropdowns_dropdownlistprops %}#toc-groupheaderitemrender), and [groupStickyHeaderItemRender]({% slug api_dropdowns_dropdownlistprops %}#toc-groupstickyheaderitemrender) of the KendoReact DropDownList component we can customize its `data items`, `group headers`, and the `'sticky' header` that displays the top-most group that is
currently being scrolled.

By customizing the templates passed to each of the listed above properties you can modify the grouped DropDownList data the way your scenario needs it.

{% meta height:380 %}
{% embed_file dropdownlist/grouping-custom/app.tsx preview %}
{% embed_file dropdownlist/grouping-custom/main.tsx %}
{% embed_file dropdownlist/grouping-custom/data.ts %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:getting_started_free_vs_premium)

-   [API Reference of the DropDownList]({% slug api_dropdowns_dropdownlist %})
-   [API Reference of the DropDownListProps]({% slug api_dropdowns_dropdownlistprops %})
