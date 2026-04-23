---
title: Binding to Remote Data
description: 'Learn how to bind the KendoKendoReact Data Grid to remote data.'
components: ["datagrid"]
slug: bindingtoremotedata_grid
position: 30
---

# Binding the KendoKendoReact Data Grid to Remote Data

You can bind the Grid to remote data and display the data in tabular form.

The following example demonstrates how to bind the [`data`](slug:api_grid_gridprops#toc-data) property to data, received from a remote endpoint.

{% meta height:470 %}
{% embed_file binding-to-remote-data/func/app.tsx preview %}
{% embed_file binding-to-remote-data/func/main.tsx %}
{% endmeta %}

# Indicating Ongoing Data Operations

Loading indicators inform the user that data is being fetched.

You can show a loading indicator by:

-   Utilizing the built-in Grid [Loading indicator](slug:loading_grid)
-   Creating a custom Loader component
-   Using the [`KendoReact Loader`]({% slug overview_loader %}) component

The following example demonstrates how to integrate a custom Loader component with the Grid.

{% meta height:520 %}
{% embed_file binding-to-remote-data-loader/func/app.tsx preview %}
{% embed_file binding-to-remote-data-loader/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Data Query Overview]({% slug overview_dataquery %})
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Reference of the GridToolbar]({% slug api_grid_gridtoolbar %})
-   [API Index of the Grid]({% slug api_grid %})
