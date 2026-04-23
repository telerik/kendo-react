---
title: GridCustomRowProps
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridCustomRowProps."
api_reference: true
type: inner_api
slug: api_grid_gridcustomrowprops
---

# GridCustomRowProps
The properties of the default Grid Row.


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


#### ariaRowIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The index to be applied to the `aria-rowindex` attribute.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### children?


</td>
<td type class="table-cell-type">


<code>


ReactNode | ReactNode[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default children of the table row.


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


Sets additional classes to the component.


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


The index of the leaf dataItem in data. Used by selection.


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


The `data` object that represents the current row.


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


Sets the `id` property of the top div element of the component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isAltRow


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates whether the row is an alternating row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isHidden


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the row is hidden. The hidden row is rendered above the visible area of the Grid. Occurs when the Grid uses virtualization and the row is on the current page. When `rowHeight` is set, `isHidden` is always `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isInEdit


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates whether the row has at least one edit cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isPinned?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the row exists in one of the pinned row arrays.


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


Indicates if the row is selected.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClick


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the row is clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDoubleClick


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the row is double clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowHeight?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the height of the row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rows?


</td>
<td type class="table-cell-type">


<code>


[GridRowsSettings]({% slug api_grid_gridrowssettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets a set of rows components that the Grid will render instead of the built-in row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowType


</td>
<td type class="table-cell-type">


<code>


[GridRowType]({% slug api_grid_gridrowtype %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The type of the row.


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


Sets additional CSS styles to the component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### trProps?


</td>
<td type class="table-cell-type">


<code>


"null" | HTMLAttributes&lt;HTMLTableRowElement&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props and attributes that are applied to the tr element by default.


</td>
</tr>
</tbody>
</table>



