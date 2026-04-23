---
title: Validation
description: 'Get started with the KendoKendoReact Data Grid enabling you to validate the edited data'
components: ["datagrid"]
slug: editing_validation_grid
position: 90
tier: premium
subject: Data Validation Editing feature of the Grid
---

# Data Validation Editing in KendoReact Data Grid

The Data Grid component allows you to validate the data being edited. In order to achieve this, render custom editor components using the Grid [`cells.edit`]({% slug api_grid_gridcellssettings %}#toc-edit) property and this allows you to show an error message when the chosen data does not match your defined validation conditions.

<CtaPanelOverview></CtaPanelOverview>

The below demo demonstrates a possible approach that can be used to validate Grid's data. The [`onItemChange`]({% slug api_grid_gridprops %}#toc-onitemchange) event handler which fires on every onChange of the `еdit` cell gets the data being edited and validates it. In addition, the `enterInsert` function checks the validity of the data added by the user.

{% meta height:570 %}
{% embed_file editing-with-validation/func/app.tsx preview %}
{% embed_file editing-with-validation/func/main.tsx %}
{% embed_file editing-with-validation/func/validators.ts %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
