---
title: Editing with Custom Editors
description: 'Get started with the editing functionality of the KendoKendoReact Data Grid allowing you to set a custom cell as an editor.'
components: ["datagrid"]
slug: customediting_grid
position: 60
tier: premium
subject: Editing with Custom Editors feature of the Grid
---

# Editing with Custom Editors

The [KendoReact Data Grid]({% slug overview_grid %}) allows you to set a custom cell as an editor.

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates how to use the **DropDownList** as a custom editor using the `cells.data` property of the GridColumn component, which allows you to render a custom Grid cell.

{% meta height:615 %}
{% embed_file editing-custom/inline/func/app.tsx preview %}
{% embed_file editing-custom/inline/func/main.tsx %}
{% embed_file editing-custom/inline/func/myDropDownCell.tsx %}
{% endmeta %}

## Grid with External Form Editing

The following example demonstrates how to implement external **Form** editing using the `cells.data` property of the GridColumn component.

{% meta height:470 %}
{% embed_file editing-custom/inline-form/func/app.tsx preview %}
{% embed_file editing-custom/inline-form/func/main.tsx %}
{% embed_file editing-custom/inline-form/func/editForm.tsx %}
{% endmeta %}

## In-Cell Editing with Custom Editors

The main difference in introducing custom editors with in-cell editing is the way that the cell content is returned. The in-cell editing relies on the [`cells.data`]({% slug api_grid_gridcellssettings %}#toc-data) and [rowRender]({% slug api_grid_gridprops %}#toc-rowRender) properties of the Grid and if the custom cell is not returned by calling the default render of the cell, this will not trigger the Grid cellRender for those cells.

The following example demonstrates how to use the custom editors with in-cell editing.

{% meta height:500 %}
{% embed_file editing-custom/in-cell/func/app.tsx preview %}
{% embed_file editing-custom/in-cell/func/main.tsx %}
{% embed_file editing-custom/in-cell/func/customCells.tsx %}
{% embed_file editing-custom/in-cell/func/cellRender.tsx %}
{% endmeta %}

## Suggested Links

-   [Data Query Overview]({% slug overview_dataquery %})
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Reference of the GridToolbar]({% slug api_grid_gridtoolbar %})
-   [API Index of the Grid]({% slug api_grid %})
