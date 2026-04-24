---
title: Sorting
description: 'Get started with the sorting functionality of the KendoReact TreeList and learn how to sort single and multiple data-bound columns.'
components: ["treelist"]
slug: sorting_treelist
position: 40
---

# Sorting

The KendoReact TreeList enables you to sort single and multiple data-bound columns.

## Getting Started

To enable sorting:

1. Set the [`sortable`]({% slug api_treelist_treelistprops %}#toc-sortable) option of the TreeList.
1. Set the [`field`]({% slug api_treelist_treelistcellprops %}#toc-field) option of the TreeList column.
1. Utilize the [`sort`]({% slug api_treelist_treelistprops %}#toc-sort) option to apply the sorting styles and buttons to the affected columns.
1. When [`sortable`]({% slug api_treelist_treelistprops %}#toc-sortable) is configured and the user tries to sort a column, the [`onSortChange`]({% slug api_treelist_treelistprops %}#toc-onsortchange) event is emitted. Handle the `onSortChange` event where you have the option to sort the data programmatically, to make a request to the server for server sorting, or to use the [`orderBy`]({% slug api_treelist_orderby %}) function which automatically processes the data.

The following example demonstrates the minimum required configuration for sorting the TreeList records.

{% meta height:580 %}
{% embed_file sorting-basic/func/app.tsx preview %}
{% embed_file sorting-basic/func/main.tsx %}
{% endmeta %}

## Customizing the Sorting

The sorting feature of the TreeList enables you to unsort the columns and sort the records by multiple columns.

-   To enable the unsorting of columns, utilize the `sortable.allowUnsort` option which determines if the columns can be unsorted.
-   To enable the sorting of multiple columns, set the `sortable.mode` option which accepts a `single` or `multiple` value.

{% meta height:700 %}
{% embed_file sorting-customization/func/app.tsx preview %}
{% embed_file sorting-customization/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Data Query Overview]({% slug overview_dataquery %})
-   [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
-   [API Index of the TreeList]({% slug api_treelist %})
