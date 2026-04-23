---
title: Compact Display Mode
description: 'Get started with the KendoReact Data Grid package by KendoReact and learn more about sizing.'
components: ["datagrid"]
slug: sizing_grid
position: 20
---

# Compact Display Mode

The KendoKendoReact Data Grid enables you to reduce its density to achieve better visibility on smaller devices. For a compact appearance, you can change the value of the [`size`]({% slug api_grid_gridprops %}#toc-size) option to small. The compact Grid will utilize the available space by setting smaller padding in its cells.

## Getting Started

To enable the compact view:

1. Set the [`size`]({% slug api_grid_gridprops %}#toc-size) option of the Grid.

The following example demonstrates how to implement the compact grid:

{% meta height:490 %}
{% embed_file sizing/func/app.tsx preview %}
{% embed_file sizing/func/main.tsx %}
{% embed_file sizing/func/size-configurator.tsx %}
{% embed_file sizing/func/companyData.json %}
{% embed_file sizing/func/secondCompanyData.json %}
{% embed_file sizing/func/style.css %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_grid %})
-   [API Index of the Grid]({% slug api_grid %})
