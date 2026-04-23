---
title: Advanced Filtering
description: 'Learn how to apply advanced filtering techniques in the KendoReact Data Grid, including column menu filtering, external filters, custom filter operations, and multi-column filtering.'
components: ["datagrid"]
slug: advanced_filtering_grid
position: 20
tier: premium
subject: Advanced Filtering feature of the Grid
---

# KendoReact Data Grid Advanced Filtering

The KendoReact Data Grid provides powerful filtering options, including column menu filtering, external filters, custom filter operations, and multi-column filtering.

<CtaPanelOverview></CtaPanelOverview>

## Filtering Data Grid Through Column Menu Filter

The [`columnMenu`]({% slug api_grid_gridcolumnprops %}#toc-columnmenu) allows using the [GridColumnMenuFilter]({% slug api_grid_gridcolumnmenufilterprops %}) or the [GridColumnMenuCheckboxFilter]({% slug api_grid_gridcolumnmenucheckboxfilterprops %}) to filter the Grid through a popup menu.

{% meta height:600 %}
{% embed_file filtering/column-menu/func/app.tsx preview %}
{% embed_file filtering/column-menu/func/main.tsx %}
{% embed_file filtering/column-menu/func/columnMenu.tsx %}
{% endmeta %}

## Filtering Data Grid Through External Filter

You can use the [KendoReact Filter component]({% slug overview_filter %}) to build complex filter expressions and filter the data inside the Grid.

{% meta height:600 %}
{% embed_file filtering/external/func/app.tsx preview %}
{% embed_file filtering/external/func/main.tsx %}
{% endmeta %}

## Filtering Data Grid Through Custom Filter Cells

The [`filterCell`]({% slug api_grid_gridcellssettings %}#toc-filterCell) property of the GridColumn enables full customization of the filter cells. The following example demonstrates filtering by category and price range using a DropDownList.

{% meta height:470 %}
{% embed_file filtering/custom/func/app.tsx preview %}
{% embed_file filtering/custom/func/main.tsx %}
{% embed_file filtering/custom/func/dropdownFilterCell.tsx %}
{% embed_file filtering/custom/func/rangeFilterCell.tsx %}
{% endmeta %}

## Filtering Data Grid Through External TextBox

You can use an external [TextBox]({% slug overview_textbox %}) to apply quick filter to the Grid.

{% meta height:470 %}
{% embed_file filtering/external-input/func/app.tsx preview %}
{% embed_file filtering/external-input/func/main.tsx %}
{% endmeta %}

## Filtering Data Grid Rows by Using the `filterBy` Method

To use the [filterBy]({% slug api_kendo-data-query_filterby %}) method set the [`filter`]({% slug api_grid_gridprops %}#toc-filter) property of the Grid with the current filter expression and handle the `onFilterChange`.

{% meta height:450 %}
{% embed_file filtering/filterby/func/app.tsx preview %}
{% embed_file filtering/filterby/func/main.tsx %}
{% endmeta %}

## Filtering Data Grid Rows by Using the `process` Method

When multiple data operations (filtering, sorting, paging, etc.) are enabled, using the `process` method and the data state from the `onDataStateChange` event is the recommended approach.

{% meta height:420 %}
{% embed_file filtering/process-method/func/app.tsx preview %}
{% embed_file filtering/process-method/func/main.tsx %}
{% endmeta %}

## Define Custom Filter Operators

Customize the filter operators for `numeric`, `text`, and `date` filter types using the [`filterOperators`]({% slug api_grid_gridfilteroperators %}) property. Boolean filter types always use the `equal` operator.

{% meta height:480 %}
{% embed_file filtering/operators/func/app.tsx preview %}
{% embed_file filtering/operators/func/main.tsx %}
{% endmeta %}

## KendoReact Data Grid Advanced Filtering APIs

-   [FilterDescriptors]({% slug api_kendo-data-query_filterdescriptor %})
-   [onDataStateChange]({% slug api_grid_gridprops %}#toc-ondatastatechange)
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
