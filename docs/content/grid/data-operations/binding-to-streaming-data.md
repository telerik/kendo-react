---
title: Binding to Streaming Data
description: 'Get started with the live updates functionality of the KendoKendoReact Data Grid and learn how to show dynamic data.'
components: ["datagrid"]
slug: bindingtostreamingdata_grid
position: 20
tier: mixed
---

# Real-Time Data Updates (Live Streaming Updates)

The KendoReact Data Grid can render multiple live updates in a short time. This functionality allows you to do real-time updates in the Grid (also referred to as streaming updates).

The Data Grid will only re-renderer (not re-mount) the updated rows when it receives the new data real-time. That makes each streaming update very efficient.

> This example uses a local data service to simulate real-time updates. In the live application, bind your KendoReact Data Grid to a state variable and update it with steaming (live) data.

{% meta height:710 %}
{% embed_file live-data/func/app.tsx preview %}
{% embed_file live-data/func/main.tsx %}
{% embed_file live-data/func/custom-cells.tsx %}
{% embed_file live-data/func/financial-data.ts %}
{% embed_file live-data/func/KendoGrid.tsx %}
{% embed_file live-data/func/services.tsx %}
{% embed_file live-data/func/trends.ts %}
{% embed_file live-data/func/utils.ts %}
{% embed_file live-data/func/styles.css %}
{% endmeta %}

## Suggested Links

-   [Data Query Overview]({% slug overview_dataquery %})
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Reference of the GridToolbar]({% slug api_grid_gridtoolbar %})
-   [API Index of the Grid]({% slug api_grid %})
-   [Sample App with Real-time Data Updates]({% slug finance_sampleapp %})
