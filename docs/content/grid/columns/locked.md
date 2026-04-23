---
title: Locking Columns
description: 'Get started with the KendoReact Data Grid supporting locked columns that are visible at all times while the user scrolls the Grid horizontally.'
components: ["datagrid"]
slug: locked_columns_grid
position: 50
subject: Grid Locked columns feature
tier: premium
---

# Locking Columns

Locked (frozen, sticky, or pinned) columns remain visible at all times while the user scrolls the Grid horizontally.

By default, the columns of the Grid are not locked. The locked columns require all columns to have a fixed width.

<CtaPanelOverview></CtaPanelOverview>

{% meta height:530 %}
{% embed_file locked/func/app.tsx preview %}
{% embed_file locked/func/main.tsx %}
{% endmeta %}

## Locked Columns With Column Menu

The [columnMenu]({% slug column_menu_grid %}) can be used to render buttons that will lock and unlock a specific column on click.

In the following example we:

1. Render a custom component inside the column menu that will lock and unlock the column.
1. Update the columns collection when a column is locked/unlocked.
1. Sort them by the `locked` field to show all locked columns on the left.

{% meta height:535 %}
{% embed_file locked-column-menu/func/app.tsx preview %}
{% embed_file locked-column-menu/func/main.tsx %}
{% embed_file locked-column-menu/func/customColumnMenu.tsx %}
{% endmeta %}

## Locked Column With Custom Cell

When using pinned columns with [a custom data cell]({% slug api_grid_gridcolumnprops %}#toc-cells), the specific styles and classes must be added to the `td` elements. The classes and styles will be part of the cell props.

{% meta height:510 %}
{% embed_file locked-custom-cell/func/app.tsx preview %}
{% embed_file locked-custom-cell/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [API Index of the Grid]({% slug api_grid %})
