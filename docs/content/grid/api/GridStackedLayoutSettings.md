---
title: GridStackedLayoutSettings
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridStackedLayoutSettings."
api_reference: true
type: inner_api
slug: api_grid_gridstackedlayoutsettings
---

# GridStackedLayoutSettings
Configuration for the stacked layout mode in the Grid.

The stacked layout renders each data row as a card with field label/value pairs
arranged in a CSS Grid layout.


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


#### cols?


</td>
<td type class="table-cell-type">


<code>


number | string | number | [GridStackedColSize]({% slug api_grid_gridstackedcolsize %})[]


</code>


</td>
<td class="table-cell-default">


<code>


1


</code>


</td>
<td class="table-cell-comment">


Defines the number of columns in the stacked layout.

- When a `number`, creates that many equal-width columns.
- When an `array`, the length defines the column count and values define widths.




```tsx
// Two equal columns
<Grid stackedLayoutSettings={{ cols: 2 }} />

// Three columns with custom widths using fr units
<Grid stackedLayoutSettings={{ cols: ['1fr', '2fr', '1fr'] }} />

// Two columns with pixel and fraction widths
<Grid stackedLayoutSettings={{ cols: [{ width: 200 }, { width: '1fr' }] }} />
```



</td>
</tr>
</tbody>
</table>



