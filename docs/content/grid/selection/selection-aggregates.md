---
title: Selection Aggregates
description: 'Get started with the KendoReact Grid by KendoReact supporting selection of a single row or multiple rows and calculate different metrics inside aggregated rows.'
components: ['grid']
slug: aggregates_selection_grid
position: 50
tier: premium
subject: Selection Aggregates feature of the Grid
---

# Selection Aggregates

The Grid enables you to select single or multiple cells or rows and calculate different metrics based on the selected data.

<CtaPanelOverview></CtaPanelOverview>

This functionality allows you to get a quick snapshot of some of the more important aggregates of the selected data. You can use the built-in approach and display these metrics at the bottom of the Grid or create your own elements that would display the data.

The Grid supports the following built-in aggregation for all selected cells:

-   `max`&mdash;the greatest number. Valid for numeric fields.
-   `min`&mdash;the smallest number. Valid for numeric fields.
-   `sum`&mdash;the sum of all numbers. Valid for numeric fields.
-   `average`&mdash;the average of all numbers. Valid for numeric fields.
-   `count`&mdash;the total number of cells.
-   `earliest`&mdash;the earliest date. Valid for `Date` fields.
-   `latest`&mdash;the latest date. Valid for `Date` fields.
-   `isTrue`&mdash;the total number of boolean fields with `true` value.
-   `isFalse`&mdash;the total number of boolean fields with `false` value.

To enable the selection aggregates of the Grid enable its [`selectable`]({% slug api_grid_gridprops %}#toc-selectable) prop, add a [`StatusBar`]({% slug api_grid_statusbar %}) component and update its [`data`]({% slug api_grid_statusbarprops %}#toc-data) based on its current selection of the component kept inside its built-in `select` state.

The following example demonstrates selection aggregates in the Grid, where a status bar displays computed values (such as sum, average, and count) for the currently selected cells.

{% meta height:850 %}
{% embed_file selection/aggregates/func/app.tsx preview %}
{% embed_file selection/aggregates/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Selection Overview](slug:selection_grid)
-   [Cell Selection](slug:cell_selection_grid)
-   [Cell Range Selection](slug:cell_range_selection_grid)
-   [Row Selection](slug:row_selection_grid)
-   [Multi-row Selection](slug:multi_row_selection_grid)
-   [API Reference of the Grid]({% slug api_grid_grid %})
-   [API Index of the Grid]({% slug api_grid %})
