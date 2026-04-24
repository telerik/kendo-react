---
title: GridAIAssistantCommand
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridAIAssistantCommand."
api_reference: true
type: inner_api
slug: api_grid_gridaiassistantcommand
---

# GridAIAssistantCommand
Represents a command structure returned by AI services for grid operations.
Each command contains the operation type and relevant configuration data.

```tsx
// Sort command example
const sortCommand: GridAIAssistantCommand = {
  type: 'GridSort',
  sort: { field: 'productName', dir: 'asc' },
  message: 'Sorted by Product Name ascending'
};

// Filter command example
const filterCommand: GridAIAssistantCommand = {
  type: 'GridFilter',
  filter: {
    logic: 'and',
    filters: [{ field: 'price', operator: 'gte', value: 100 }]
  },
  message: 'Filtered products with price >= 100'
};
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


#### fileName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The filename for export operations, including the file extension.
Used when the AI assistant performs export commands such as PDF generation.
Expected data type: string ending with file extension (e.g., '.pdf', '.xlsx').


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


The filter descriptor for filtering operations.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### group?


</td>
<td type class="table-cell-type">


<code>


GroupDescriptor | GroupDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The group descriptor for grouping operations.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### highlight?


</td>
<td type class="table-cell-type">


<code>


[CompositeHighlightDescriptor]({% slug api_grid_compositehighlightdescriptor %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The highlight descriptor for highlight operations.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### id?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The unique identifier of the column to resize.
Used when type is 'GridColumnResize' to specify which column should be resized.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### message?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The message describing the operation.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### messages?


</td>
<td type class="table-cell-type">


<code>


string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The messages describing the operation (alternative to message).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### page?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The target page number for pagination operations.
Used when type is 'GridPage' to navigate to a specific page.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pageSize?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The number of items to display per page for pagination operations.
Used when type is 'GridPageSize' to change the grid's page size.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### position?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The target position for column reordering operations.
Used when type is 'GridColumnReorder' to specify the new column index.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### select?


</td>
<td type class="table-cell-type">


<code>


[CompositeHighlightDescriptor]({% slug api_grid_compositehighlightdescriptor %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The select descriptor for selection operations.
Used when type is 'GridSelect' to define cell or row selection criteria.

```tsx
select: {
  cells: { 'Age': true },
  filters: [{ field: 'Age', operator: 'gt', value: 60 }],
  logic: 'and'
}
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The new size value for column resize operations.
Specifies the width dimension when resizing grid columns.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sort?


</td>
<td type class="table-cell-type">


<code>


SortDescriptor | SortDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The sort descriptor for sorting operations.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### type


</td>
<td type class="table-cell-type">


<code>


[GridAICommands]({% slug api_grid_gridaicommands %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The type of grid operation to perform.
Possible values: 'GridSort', 'GridFilter', 'GridGroup', 'GridHighlight', 'GridClearSort', 'GridClearFilter', 'GridClearGroup', 'GridClearHighlight'


</td>
</tr>
</tbody>
</table>



