---
title: GridGroupableSettings
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridGroupableSettings."
api_reference: true
type: inner_api
slug: api_grid_gridgroupablesettings
---

# GridGroupableSettings
The settings for grouping the data of the Grid ([see example](https://www.telerik.com/kendo-react-ui/components/grid/grouping/grouping)).


<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### displayMode?


</td>
<td type class="table-cell-type">


<code>


[GridGroupingMode]({% slug api_grid_gridgroupingmode %})


</code>


</td>
<td class="table-cell-default">


<code>


'default'


</code>


</td>
<td class="table-cell-comment">


Sets the visualization mode for grouped data.

The available options are:
- `'default'` — Renders the legacy indent-cell grouping layout (default behavior).
- `'compact'` — Removes the empty indent cells; group headers span the full row width.
- `'singleColumn'` — Renders a single dedicated group column for all group levels.
- `'multipleColumns'` — Renders one dedicated group column per group level.




```tsx
<Grid groupable={{ displayMode: 'singleColumn' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### enabled?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if grouping by dragging and dropping the column headers is allowed and if the group header is visible.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### expandable?


</td>
<td type class="table-cell-type">


<code>


boolean | [GridGroupExpandableSettings]({% slug api_grid_gridgroupexpandablesettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The group expandable settings.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### footer?


</td>
<td type class="table-cell-type">


<code>


"none" | "visible" | "always"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if the group footer row is visible when the group is collapsed. Defaults to `none`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupColumn?


</td>
<td type class="table-cell-type">


<code>


[GridGroupColumnFn]({% slug api_grid_gridgroupcolumnfn %}) | [GridGroupColumnSettings]({% slug api_grid_gridgroupcolumnsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Customizes the synthesized group column(s). Accepts either a settings object
(applied uniformly to every group column) or a callback invoked once per active
group level with that level's `GroupDescriptor` (for per-level customization).

Most settings (`title`, `width`, `columnMenu`, etc.) only take effect for
`'singleColumn'` and `'multipleColumns'` — the two modes that render the group
column as a real, visible column. `cells` (custom `groupHeader`/`groupFooter`
templates) is the exception and applies in every `displayMode`, including
`'default'` and `'compact'` — see `GridGroupColumnSettings.cells`.

```tsx
// Object form — same settings applied to every group column
<Grid groupable={{ displayMode: 'multipleColumns', groupColumn: { width: 200 } }} />

// Callback form — per-level customization
<Grid groupable={{ displayMode: 'multipleColumns', groupColumn: (groupDescriptor) => ({ title: groupDescriptor.field }) }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### hideGroupedColumns?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


Hides the data column for each field the Grid is grouped by.
Only applies when `displayMode` is `'singleColumn'` or `'multipleColumns'` — the
synthesized group column already displays the grouped field's value, so the
original data column can be hidden to avoid duplication. Has no effect in `'default'` or
`'compact'` modes.




```tsx
// Opt in to hide the original data column alongside the group column.
<Grid groupable={{ displayMode: 'multipleColumns', hideGroupedColumns: true }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### stickyFooters?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


When enabled, the group footer row sticks to the bottom of the scrollable area
so that it remains visible while scrolling through group data rows.
Requires the `footer` property to be set to `'always'` or `'visible'`.

```jsx
<Grid groupable={{ stickyFooters: true, footer: 'always' }} />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### stickyHeaders?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


When enabled, the group header row sticks to the top of the scrollable area
so that it remains visible while scrolling through group data rows.

```jsx
<Grid groupable={{ stickyHeaders: true }} />
```






</td>
</tr>
</tbody>
</table>



