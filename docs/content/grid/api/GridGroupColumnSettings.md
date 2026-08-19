---
title: GridGroupColumnSettings
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridGroupColumnSettings."
api_reference: true
type: inner_api
slug: api_grid_gridgroupcolumnsettings
---

# GridGroupColumnSettings
The settings for a synthesized group column produced by every `displayMode`. Most
properties (`title`, `width`, `columnMenu`, etc.) only take effect for `'singleColumn'`
and `'multipleColumns'` — the two modes that render the group column as a real, visible
column — see each property's own doc for its exact scope. `cells` is the exception:
it applies universally, including `'default'` and `'compact'` (see its doc below).
Pass as the `groupColumn` property of `GridGroupableSettings` either as a static
object (same settings for every group column) or via a `GridGroupColumnFn` callback (per-level
customization).


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


#### cells?


</td>
<td type class="table-cell-type">


<code>


{ groupFooter?: ComponentType&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; groupHeader?: ComponentType&lt;[GridCustomCellProps]({% slug api_grid_gridcustomcellprops %})&gt;; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom cell components for the group column. Unlike the other `groupColumn`
settings (`title`, `width`, `columnMenu`, etc. — which only apply to `'singleColumn'`
and `'multipleColumns'`, since only those modes render a real, visible group column),
`cells` applies in **every** `displayMode`, including `'default'` and `'compact'` —
the synthesized group column always exists internally and is always rendered through
these templates, even when it has zero width or is split into per-level indent cells.

- `groupHeader` — Replaces the default `"fieldLabel: value"` content area of the group header cell.
  The expand/collapse toggle button is rendered before this component and is not affected.
- `groupFooter` — Replaces the footer cell content of the group column.

Both templates may be invoked for "filler" cell positions that carry no content of
their own — ancestor-level spacer columns in `'multipleColumns'` mode, per-level
indent cells in `'default'` mode, and the entire group-footer row in `'default'` mode
(which renders its aggregates through the data columns instead, see
`GridCellsSettings.groupFooter`). These positions are flagged via `isSpacerCell` on
`GridCustomCellProps` so the template can render them distinctly (e.g. blank or
differently styled) from the real toggle/value content cell.

```tsx
import { GridCustomCellProps } from '@progress/kendo-react-grid';

const MyGroupHeader = (props: GridCustomCellProps) =>
    props.isSpacerCell ? <td {...props.tdProps} /> : <span>{props.dataItem}</span>;

<Grid groupable={{ displayMode: 'singleColumn', groupColumn: { cells: { groupHeader: MyGroupHeader } } }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnMenu?


</td>
<td type class="table-cell-type">


<code>


ComponentType&lt;[GridColumnMenuGroupBaseProps]({% slug api_grid_gridcolumnmenugroupbaseprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A custom column menu component rendered in the group column header.
The component receives `GridColumnMenuGroupBaseProps`.
Has no effect when `displayMode` is `'default'` or `'compact'`.

```tsx
import { GridColumnMenuGroupBaseProps } from '@progress/kendo-react-grid';

const MyGroupColumnMenu = (props: GridColumnMenuGroupBaseProps) => <div>...</div>;

<Grid groupable={{ displayMode: 'multipleColumns', groupColumn: { columnMenu: MyGroupColumnMenu } }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### locked?


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


Locks (freezes) the group column so it remains visible while the Grid is scrolled horizontally.
Equivalent to the existing per-column `locked` behavior.
When set, overrides `props.lockGroups` for this specific group level.




```tsx
<Grid groupable={{ displayMode: 'multipleColumns', groupColumn: { locked: true } }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### maxWidth?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The maximum width of the group column in pixels that the user can resize it to.

```tsx
<Grid groupable={{ displayMode: 'multipleColumns', groupColumn: { maxWidth: 400 } }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### minWidth?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The minimum width of the group column in pixels that the user can resize it to.

```tsx
<Grid groupable={{ displayMode: 'multipleColumns', groupColumn: { minWidth: 80 } }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### reorderable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Allows the group column to be reordered by the user via drag and drop.




```tsx
<Grid groupable={{ displayMode: 'multipleColumns', groupColumn: { reorderable: false } }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### resizable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Allows the group column to be resized by the user.




```tsx
<Grid groupable={{ displayMode: 'singleColumn', groupColumn: { resizable: false } }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The column header text.

```tsx
<Grid groupable={{ displayMode: 'singleColumn', groupColumn: { title: 'Group' } }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### width?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The initial width of the group column in pixels.

```tsx
<Grid groupable={{ displayMode: 'multipleColumns', groupColumn: { width: 200 } }} />
```



</td>
</tr>
</tbody>
</table>



