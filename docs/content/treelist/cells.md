---
title: Cells
description: 'Get started with the KendoReact TreeList and learn how to describe and customize its cell types in React projects.'
components: ["treelist"]
slug: cells_treelist
position: 70
---

# Cells

The KendoReact TreeList provides options for customizing its cell content by allowing you to define different types of cells.

## Supported Cell Types

-   [TreeList cells](#toc-treelist-cells)
-   [Filter cells](#toc-filter-cells)
-   [Edit cells](#toc-edit-cells)
-   [Header cells](#toc-header-cells)

### TreeList Cells

The [`TreeListCell`]({% slug api_treelist_treelistcell %}) component represents a React component that accepts [`TreeListCellProps`]({% slug api_treelist_treelistcellprops %}) and returns a `<td />` element. The TreeList initializes its cells by using the values from the corresponding data item for each of its rows and columns. You can replace a cell with a custom cell by using the [`cell`]({% slug api_treelist_treelistcolumnprops %}#toc-cell) property of the column.

### Filter Cells

The [`TreeListTextFilter`]({% slug api_treelist_treelisttextfilter %}), [`TreeListNumericFilter`]({% slug api_treelist_treelistnumericfilter %}), [`TreeListDateFilter`]({% slug api_treelist_treelistdatefilter %}), and [`TreeListBooleanFilter`]({% slug api_treelist_treelistbooleanfilter %}) represent React components. The TreeList renders a single filter cell for each column inside the filter row. The filter cells take their values from the value of the [`filter`]({% slug api_treelist_treelistprops %}#toc-filter) property. You can replace a filter cell with a custom cell by using the [`filterCell`]({% slug api_treelist_treelistcolumnprops %}#toc-filtercell) property of the column.

### Edit Cells

The [`TreeListTextEditor`]({% slug api_treelist_treelisttexteditor %}), [`TreeListNumericEditor`]({% slug api_treelist_treelistnumericeditor %}), [`TreeListDateEditor`]({% slug api_treelist_treelistdateeditor %}), and [`TreeListBooleanEditor`]({% slug api_treelist_treelistbooleaneditor %}) components represent React components that accept [`TreeListCellProps`]({% slug api_treelist_treelistcellprops %}). The TreeList renders a single edit cell for each column where a data item is in edit mode. Each edit cell triggers the [`TreeListItemChangeEvent`]({% slug api_treelist_treelistitemchangeevent %}) event and takes its value from the corresponding data item. You can replace an edit cell with a custom cell by using the [`editCell`]({% slug api_treelist_treelistcolumnprops %}#toc-editcell) property of the column.

### Header Cells

The [`TreeListHeaderCell`]({% slug api_treelist_treelistheadercell %}) component represents a React component that accepts [`TreeListHeaderCellProps`]({% slug api_treelist_treelistheadercellprops %}). The TreeList renders a single header cell for the header of each column. Each header cell displays the data [`field`]({% slug api_treelist_treelistcolumnprops %}#toc-field) or the [`title`]({% slug api_treelist_treelistcolumnprops %}#toc-title) property together with the sorting indicators. You can replace a header cell with a custom cell by using the [`headerCell`]({% slug api_treelist_treelistcolumnprops %}#toc-headercell) property of the column.

## Customizing the Cells

The following example demonstrates how to set a custom cell in the TreeList.

{% meta height:580 %}
{% embed_file cells-custom/func/app.tsx preview %}
{% embed_file cells-custom/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
-   [API Reference of the TreeListColumnProps]({% slug api_treelist_treelistcolumnprops %})
