---
title: In-Cell
description: 'Get started with the KendoReact TreeList supporting in-cell editing mode that allows you to manipulate data cell by cell for additional flexibility.'
components: ["treelist"]
slug: incellediting_treelist
position: 3
---

# In-Cell

The in-cell editing mode allows users to edit data directly inside individual cells by clicking on them. When a cell enters edit mode, it renders the appropriate editor component (text, numeric, date, or boolean) based on the column configuration. Changes are applied cell by cell, and the toolbar provides **Save Changes** and **Cancel Changes** actions to commit or discard all pending edits at once.

The following example demonstrates how to implement the in-cell editing mode in the KendoReact TreeList.

{% meta height:690 %}
{% embed_file editing-in-cell/func/app.tsx preview %}
{% embed_file editing-in-cell/func/main.tsx %}
{% embed_file editing-in-cell/func/renderers.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the TreeList]({% slug api_treelist_treelistprops %})
-   [API Reference of the TreeListToolbar]({% slug api_treelist_treelisttoolbar %})
-   [API Index of the TreeList]({% slug api_treelist %})
