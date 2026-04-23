---
title: GridAIState
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridAIState."
api_reference: true
type: inner_api
slug: api_grid_gridaistate
---

# GridAIState
Represents the grid state that can be controlled externally.
This interface contains all the stateful properties that can be modified through AI commands.

```tsx
const [gridState, setGridState] = useState<GridAIState>({
  sort: [],
  filter: undefined,
  group: [],
  columnsState: initialColumns,
  skip: 0,
  take: 20
});
```



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


#### columnsState?


</td>
<td type class="table-cell-type">


<code>


[GridColumnState]({% slug api_grid_gridcolumnstate %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current column state including visibility, width, order, and lock status.
Array of column state objects.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filter?


</td>
<td type class="table-cell-type">


<code>


CompositeFilterDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current filter descriptor applied to the grid.
Composite filter defining logic and filter array.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### group?


</td>
<td type class="table-cell-type">


<code>


GroupDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current group descriptors applied to the grid.
Array of group objects defining field and aggregates.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### highlight?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The highlight descriptor for highlighting cells/rows in the grid.
Object with dataItemKey as keys, values can be boolean (whole row) or number array (specific cells).

```tsx
highlight: {
  '1': true,           // Highlight entire row with dataItemKey = 1
  '2': [0, 1, 2]       // Highlight cells at column indices 0, 1, 2 in row with dataItemKey = 2
}
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### select?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The select descriptor for selecting cells/rows in the grid.
Object with dataItemKey as keys, values can be boolean (whole row) or number array (specific cells).

```tsx
select: {
  '1': true,           // Select entire row with dataItemKey = 1
  '2': [0, 1]          // Select cells at column indices 0 and 1 in row with dataItemKey = 2
}
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### skip?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The number of items to skip for pagination.
Zero-based index for the first item to display.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sort?


</td>
<td type class="table-cell-type">


<code>


SortDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current sort descriptors applied to the grid.
Array of sort objects defining field and direction.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### take?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The number of items to take (page size) for pagination.
Number of items to display per page.


</td>
</tr>
</tbody>
</table>



