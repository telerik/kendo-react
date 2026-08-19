---
title: State Management
description: 'Learn how to manage the state of the KendoReact Grid.'
components: ['grid']
slug: state-management_grid
position: 30
tier: free
---

# KendoReact Grid State Management

The KendoReact Grid provides multiple options for managing its state. You can control the Grid state by passing the respective state properties like `filter`, `sort`, `select`, etc., or leverage its built-in state management mechanism.

## Controlling the Grid State

To control any of the Grid's state properties, pass the respective property and it will always take precedence over the internal state management.

The following example demonstrates controlled state management, where all Grid state (filter, sort, group, page, selection, and edit) is managed externally through individual state variables and event handlers.

{% meta height:900 %}
{% embed_file state/controlled/app.tsx preview %}
{% embed_file state/controlled/main.tsx %}
{% embed_file state/controlled/detail.tsx %}
{% endmeta %}

## Built-in State Management

By default, the Grid manages its state internally. It is enough to enable the respective feature like `filterable`, `sortable`, or `selectable`, and the Grid will utilize its built-in state management, which works out of the box with the [`autoProcessData`](slug:api_grid_gridprops#toc-autoprocessdata) property enabled.

You can still provide a default value by passing a `default%STATE_PROP%` property to the Grid, or keep track of the changes through the respective `on%STATE_PROP%Change` event.

> The built-in state management does **not** work when using the Grid in [RSC Mode](slug:overview_rsc_grid).

The following example demonstrates how to use the Grid's built-in state management with `autoProcessData` enabled for sorting, filtering, paging, and selection without manually tracking state.

{% meta height:490 %}
{% embed_file state/built-in/app.tsx preview %}
{% embed_file state/built-in/main.tsx %}
{% embed_file state/built-in/detail.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference](slug:api_grid_gridprops)
-   [Local Data Operations](slug:localoperations_grid)
-   [RSC Mode](slug:overview_rsc_grid)
