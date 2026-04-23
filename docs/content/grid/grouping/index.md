---
title: Basics
description: 'Get started with the grouping functionality of the KendoKendoReact Data Grid and learn how to display grouped table data.'
components: ["datagrid"]
slug: groupingbasics_grid
subject: Grouping feature of the Grid
position: 10
---

# Grouping Basics

The KendoReact Data Grid lets you display grouped table data.

<CtaPanelOverview></CtaPanelOverview>

## Enabling Grouping

The KendoKendoReact Data Grid supports grouping in two modes:

-   [Built-in State Management](#using-the-built-in-state-management-for-grouping): The Grid manages its own grouping state internally.

-   [Controlled Mode](#using-the-grouping-in-controlled-mode): You manage the grouping state externally by handling events and updating the state.

### Using the Built-in State Management for Grouping

To use grouping with the built-in state management, follow these steps:

1. Enable the [`autoProcessData`](slug:api_grid_gridprops#autoprocessdata) prop to let the Grid handle grouping automatically.

1. Set the [`groupable`]({% slug api_grid_gridprops %}#toc-groupable) prop of the Grid to enable grouping features.

1. Set the `dataItemKey` prop to a unique value field from the data in the Grid.

1. (Optional) Set the [`defaultGroup`](slug:api_grid_gridprops#defaultGroup) prop to add initial grouping for the Grid.

The following example shows how to use grouping with the built-in state management of the KendoKendoReact Data Grid.

{% meta height:580 %}
{% embed_file grouping/built-in/func/app.tsx preview %}
{% embed_file grouping/built-in/func/main.tsx %}
{% endmeta %}

### Using the Grouping in Controlled Mode

To use grouping in the KendoKendoReact Data Grid with controlled mode, follow these steps:

1. Set the [`groupable`]({% slug api_grid_gridprops %}#toc-groupable) and [`group`]({% slug api_grid_gridprops %}#toc-group) options of the Grid.
1. Handle the [`onGroupChange`]({% slug api_grid_gridprops %}#toc-ongroupchange) or the [`onDataStateChange`]({% slug api_grid_gridprops %}#toc-ondatastatechange) event. The `onDataStateChange` event works best when the Grid has other data operations because it provides the complete [`dataState`]({% slug api_kendo-data-query_state %}) in a single event.
1. Group the data on the client by using the [`groupBy`]({% slug api_kendo-data-query_groupby %}) or [`process`]({% slug api_kendo-data-query_process %}) methods. You can also group data on the server by making a request using the event parameters. The Grid needs the grouped data as a collection of [`GroupResults`]({% slug api_kendo-data-query_groupresult %}).

> Use the [`groupBy`]({% slug api_kendo-data-query_groupby %}) method with the `onGroupChange` event, and the [`process`]({% slug api_kendo-data-query_process %}) method with the `onDataStateChange` event.

For more information, see the article on the [process helpers for bulk data operations]({% slug overview_dataquery %}#toc-grouping).

{% meta height:580 %}
{% embed_file grouping/controlled/func/app.tsx preview %}
{% embed_file grouping/controlled/func/main.tsx %}
{% endmeta %}

## Grouping Columns Dynamically

By default, you can group all columns of the Grid multiple times. To enable grouping of specific Grid columns and add dynamic grouping to a column, use a function or a variable for the [`groupable`]({% slug api_grid_gridcolumnprops %}#toc-groupable) property.

```jsx-no-run
<Column field="ProductID" filterable={false} title="ID" width="50px" groupable={isGroupable("ProductID")} />
```

```jsx-no-run
const [group, setGroup] = React.useState<GroupDescriptor[]>(initialGroup);

const isGroupable = (field) => {
    return !((group || []).find((g) => g.field === field));
}
```

## Persist Groups Collapsed State

The `data-tools` package gives you utility methods to create unique group item IDs. You can use these IDs to save the group collapsed state.

{% meta height:580 %}
{% embed_file grouping-persist/func/app.tsx preview %}
{% embed_file grouping-persist/func/main.tsx %}
{% endmeta %}

## Expand and Collapse All Groups

The example below shows how to add a button that expands or collapses all groups in the Grid.

{% meta height:580 %}
{% embed_file grouping-expand-collapse/func/app.tsx preview %}
{% embed_file grouping-expand-collapse/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [GroupDescriptor]({% slug api_kendo-data-query_groupdescriptor %})
-   [dataStateChange]({% slug api_grid_gridprops %}#toc-ondatastatechange)
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
