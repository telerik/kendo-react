---
title: Hiding Columns
description: 'Get started with the KendoKendoReact Data Grid and learn how to implement hidden columns.'
components: ["datagrid"]
slug: hidden_columns
position: 55
subject: Grid Hidden columns feature
tier: premium
---

# Hiding Columns

Hiding or showing columns can be achieved by rendering them dynamically and keeping the data in the state so that the
changes in the Grid can be visualized.

<CtaPanelOverview></CtaPanelOverview>

In the example below, the Data Grid has its [`columnsState`]({% slug api_grid_gridprops %}#toc-columnsstate) property set. The hidden property of each column is controlled by the checkboxes above the Grid. The [`onChange`]({% slug api_inputs_checkboxprops %}#toc-onchange) event handlers cause state changes that re-render the Grid with the corresponding columns removed or added.

{% meta height:640 %}
{% embed_file hidden-columns/app.tsx preview %}
{% embed_file hidden-columns/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
