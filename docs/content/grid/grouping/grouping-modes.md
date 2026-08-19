---
title: Display Modes
description: 'Learn about the available grouping layout modes of the KendoReact Data Grid and how to configure them.'
components: ['datagrid']
slug: groupingmodes_grid
position: 15
tier: premium
subject: Grouping feature of the Grid
tag: new
release_tag: Q3 2026
---

# Grid Grouping Display Modes

The Grid supports four display modes for grouped data: [**Default**](#default-mode), [**Compact**](#compact-mode), [**Single Column**](#single-column-mode), and [**Multiple Columns**](#multiple-columns-mode).

Set the [`displayMode`](slug:api_grid_gridgroupablesettings#displaymode) property of the [`groupable`](slug:api_grid_gridprops#toc-groupable) setting to configure the grouping display mode.

Each mode changes how grouped rows and group columns are generated. Choose the mode that matches the number of group levels, available horizontal space, and data presentation.

The following table summarizes the recommended use cases for each display mode.

| Display Mode | Recommended for | Description |
| :--- | :--- | :--- |
| **`default`** | Traditional hierarchical lists (1–2 group levels) | Adds an indent column for each group level. |
| **`compact`** | Mobile web apps & constrained viewport layouts | Removes indent columns and uses full-width group header rows. |
| **`singleColumn`** | High-density dashboards & deep nesting (3+ levels) | Displays all group levels in a single grouping column. |
| **`multipleColumns`** | Multi-variable analytics & side-by-side comparison | Displays one grouping column for each active group level. |

## Default Mode

The default mode adds an indent column for each nested group level before the data columns. As groups become deeper, data rows receive progressively more indentation. This mode is active when [`displayMode`](slug:api_grid_gridgroupablesettings#displaymode) is not specified.

**Best for**

- Traditional hierarchical lists with 1–2 group levels
- Classic tree-style data structures
- Scenarios where indent-based nesting is visually clear

The following demo shows the Grid with the default display mode applied.

<demo metaUrl="grid/grouping/display-modes/default/" height="600"></demo>

## Compact Mode

The compact mode removes indent columns and renders group header rows across the Grid width. Group header content identifies the hierarchy without reducing the width available to data columns. This mode is active when [`displayMode`](slug:api_grid_gridgroupablesettings#displaymode) is set to `'compact'`.

**Best for**

- Mobile web apps
- Constrained viewport layouts
- Maximizing the available space for data columns

The following demo shows the Grid with the compact display mode applied.

<demo metaUrl="grid/grouping/display-modes/compact/" height="600"></demo>

## Single Column Mode

The single column mode displays all group levels in one grouping column before the data columns. The Grid indicates nesting depth with increasing left padding. Long group titles are truncated with an ellipsis when necessary. This mode is active when [`displayMode`](slug:api_grid_gridgroupablesettings#displaymode) is set to `'singleColumn'`.

To configure the width, title or other settings of the generated group column, refer to the [Configuring Group Columns](#configuring-group-columns) section.

**Best for**

- High-density dashboards
- Deep nesting with 3+ group levels
- Reducing the number of grouping columns

The following demo shows the Grid with the single column display mode applied.

<demo metaUrl="grid/grouping/display-modes/single-column/" height="600"></demo>

## Multiple Columns Mode

The multiple columns mode displays one grouping column for each active group level. Each column represents one level in the hierarchy, which makes grouped values easier to compare. Long group titles are truncated with an ellipsis when necessary. This mode is active when [`displayMode`](slug:api_grid_gridgroupablesettings#displaymode) is set to `'multipleColumns'`.

To configure the width, title or other settings of the generated group columns, refer to the [Configuring Group Columns](#configuring-group-columns) section.

**Best for**

- Multi-variable analytics
- Side-by-side comparison of grouped values
- Wide layouts with sufficient horizontal space

The following demo shows the Grid with the multiple columns display mode applied.

<demo metaUrl="grid/grouping/display-modes/multiple-columns/" height="600"></demo>

## Hiding Grouped Columns

By default, the Grid displays grouped values in both the generated group columns and the original data columns. If you don't want this duplicated information, set the [`hideGroupedColumns`](slug:api_grid_gridgroupablesettings#hidegroupedcolumns) property of the [`groupable`](slug:api_grid_gridprops#toc-groupable) setting to `true`.

The following demo shows the Grid with the `hideGroupedColumns` option enabled. The grouped values are displayed only in the generated group columns, while the original data columns are hidden.

<demo metaUrl="grid/grouping/hide-grouped-columns/" height="580"></demo>

## Configuring Group Columns

When the Grid uses the `singleColumn` or `multipleColumns` display modes, it generates one or more group columns that display the grouped values. You can customize these generated columns through the [`groupColumn`](slug:api_grid_gridgroupablesettings#groupcolumn) property of the [`groupable`](slug:api_grid_gridprops#toc-groupable) setting.

The [`groupColumn`](slug:api_grid_gridgroupablesettings#groupcolumn) property supports two configuration approaches. You can either apply the same settings to all generated group columns or configure each one individually.

### Apply Settings to All Group Columns

To apply the same settings to all generated group columns, assign a [`GridGroupColumnSettings`](slug:api_grid_gridgroupcolumnsettings) object to the [`groupColumn`](slug:api_grid_gridgroupablesettings#groupcolumn) property.

```js
<Grid
    groupable={{
        displayMode: 'multipleColumns',
        groupColumn: { width: 200, title: 'Group', reorderable: false }
    }}
    ...
/>
```

The following demo shows the Grid with the same width, title, and reorderable settings applied to all generated group columns.

<demo metaUrl="grid/grouping/group-column-settings/" height="580"></demo>

### Configure Each Group Column Individually

To configure each generated group column individually, assign a [`GridGroupColumnFn`](slug:api_grid_gridgroupcolumnfn) callback to the [`groupColumn`](slug:api_grid_gridgroupablesettings#groupcolumn) property. The callback receives the `GroupDescriptor` for the generated group column and returns a [`GridGroupColumnSettings`](slug:api_grid_gridgroupcolumnsettings) object.

```js
const groupColumnCb = (group) => ({
    width: group.field === 'department' ? 260 : 160,
    title: group.field === 'department' ? 'Department' : group.field === 'officeLocation' ? 'Location' : 'Device Type',
    reorderable: false
});

<Grid groupable={{ displayMode: 'multipleColumns', groupColumn: groupColumnCb }} ... />
```

The following demo shows the Grid with individually configured group column titles and widths.

<demo metaUrl="grid/grouping/group-column-per-level/" height="580"></demo>

## Suggested Links

- [Aggregates for Grouped Data](slug:groupingaggregates_grid)
- [Locked Group Header Rows](slug:groupinglockedcolumns_grid)
- [Sticky Group Columns](slug:groupingstickyheaders_grid)
