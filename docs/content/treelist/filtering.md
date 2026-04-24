---
title: Filtering
description: 'Get started with the KendoReact TreeList that makes filtering only of those data records which meet specified criteria possible.'
components: ["treelist"]
slug: filtering_treelist
position: 30
---

# Filtering

The KendoReact TreeList enables you to display only those TreeList records which meet specified criteria.

## Getting Started

To enable filtering:

1. Set the [`filter`]({% slug api_treelist_treelistprops %}#toc-filter) prop of the TreeList. The filtering conditions are declared as [`FilterDescriptors`]({% slug api_kendo-data-query_filterdescriptor %}).
1. Handle the [`onFilterChange`]({% slug api_treelist_treelistprops %}#toc-onfilterchange) or the [`onDataStateChange`]({% slug api_treelist_treelistprops %}#toc-ondatastatechange) event of the TreeList, and filter the data manually or by using the [`filterBy`]({% slug api_treelist_filterby %}) function.
1. Pass the component which will be responsible for the filtering of the column by using the [`filter`]({% slug api_treelist_treelistcolumnprops %}#toc-filter) prop.

Each consecutive filter is added to the previous ones and reduces the subset of data.

## Filter Rows

By default, when filtering is enabled, the TreeList renders a filter row in its header. Based on the type of the filter component which is set in the `filter` prop of the columns, the filter row displays components in each column header where the user can filter string, numeric, boolean, or date inputs.

{% meta height:580 %}
{% embed_file filtering-basic/func/app.tsx preview %}
{% embed_file filtering-basic/func/main.tsx %}
{% endmeta %}

## Custom Filter Cells

The [`filterCell`]({% slug api_treelist_treelistcolumnprops %}#toc-filtercell) property of the TreeListColumn enables the full customization of the filter cells.

The following example demonstrates how to implement a filter by using the KendoReact DropDownList component.

{% meta height:580 %}
{% embed_file filtering-custom/func/app.tsx preview %}
{% embed_file filtering-custom/func/main.tsx %}
{% embed_file filtering-custom/func/dropDownFilter.tsx %}
{% endmeta %}

## Suggested Links

-   [FilterDescriptors]({% slug api_kendo-data-query_filterdescriptor %})
-   [onDataStateChange]({% slug api_treelist_treelistprops %}#toc-ondatastatechange)
-   [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
