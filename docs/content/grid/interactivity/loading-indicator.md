---
title: Loading Indicator
description: 'Discover how to display a loading indicator overlay while the Kendo KendoReact Data Grid processes data.'
components: ["datagrid"]
slug: loading_grid
position: 10
tag: updated
---

# KendoReact Data Grid Loading Indicator

The Data Grid has a built in [KendoReact Loader](slug:overview_loader) component that displays a loading indicator over the grid's content while data is being fetched. This feature helps users understand that data is still being processed rather than assuming the grid is empty or unresponsive.

<div data-component="StartKendoReactFreeSection"></div>

## Built-in Loading Indicator

To enable the built-in loading overlay, set the [`showLoader`](slug:api_grid_gridprops#showloader) of the Grid to `true`.

The following example demonstrates how the built-in loader functions when data is being loaded:

{% meta height:470 %}
{% embed_file loading-indicator/basic/func/app.tsx preview %}
{% embed_file loading-indicator/basic/func/main.tsx %}
{% endmeta %}

## Custom Loading Indicator

For more flexibility, the KendoReact Data Grid also allows you to replace the default loader with a fully customizable loading indicator. This is particularly useful if you want to match the loading state with your application's design language or provide additional context while data is being retrieved.

To use a custom loading indicator, pass your custom component to the [`loader`](slug:api_grid_gridprops#loader) prop.

You can see a sample implementation of a custom loading indicator for the Grid in the Demo below.

{% meta height:470 %}
{% embed_file loading-indicator/custom/func/app.tsx preview %}
{% embed_file loading-indicator/custom/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Data Query Overview]({% slug overview_dataquery %})
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
