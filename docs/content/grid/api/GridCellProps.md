---
title: GridCellProps
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridCellProps."
api_reference: true
type: inner_api
slug: api_grid_gridcellprops
---

# GridCellProps
Represents the props of the GridCell component
([more information](https://www.telerik.com/kendo-react-ui/components/grid/cells#toc-grid-cells)).


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


#### ariaColumnIndex


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The index applied to the `aria-colindex` attribute.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### cells?


</td>
<td type class="table-cell-type">


<code>


[GridCellsSettings]({% slug api_grid_gridcellssettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines a set of custom cell components that the Grid will render instead of the default cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### className?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Custom CSS classes for the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### colSpan?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The column span of the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The index of the column in the rendered columns collection. Optional.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnsCount?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The total number of rendered columns in the Grid. Optional.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataIndex


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The zero-based index of the data item in the data collection.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItem


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data item for the current row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### editor?


</td>
<td type class="table-cell-type">


<code>


"boolean" | "text" | "date" | "numeric"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the type of editor to be used when the cell is in edit mode.
Supported values are `text`, `numeric`, `boolean`, and `date`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### expanded?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the cell is expanded.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### field?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data field that the cell binds to.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### format?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The format applied to the value before display.
Takes the `{0:format}` form where `format` is a standard number format, a custom number format,
a standard date format, or a custom date format.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isAlt?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the cell is alt.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isSelected


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the cell is selected.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isSorted?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the cell is sorted.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: { dataIndex: number; dataItem: any; field?: string; syntheticEvent: SyntheticEvent&lt;any&gt;; value?: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the cell value is changed. Provides details about the change event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onContextMenu?


</td>
<td type class="table-cell-type">


<code>


(event: MouseEvent&lt;HTMLElement&gt;, dataItem: any, field?: string) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the ContextMenu is activated on the cell.
Provides the event object, data item, and field name.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowType?


</td>
<td type class="table-cell-type">


<code>


[GridRowType]({% slug api_grid_gridrowtype %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the type of the row (e.g., data row, group header, etc.). Optional.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectionChange?


</td>
<td type class="table-cell-type">


<code>


(event: { syntheticEvent: SyntheticEvent&lt;any&gt;; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the cell is selected. Provides the event object.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### style?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Inline styles for the cell.


</td>
</tr>
</tbody>
</table>



