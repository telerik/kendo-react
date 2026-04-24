---
title: ColumnBaseProps
description: "Learn how to build custom functionality when working with the React Data Tools by Kendo UI with the help of the ColumnBaseProps."
api_reference: true
type: inner_api
slug: api_data-tools_columnbaseprops
---

# ColumnBaseProps



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


#### cell?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;C&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the component rendered as a cell. If not set, a `Cell` renders.


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


Sets custom CSS classes on the column cells.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### disableReorder?


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


Disables the ability to reorder when another column is dragged over it or tried to be reordered with keyboard.





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


Sets the data field that the column binds to.


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


Applies a format to the value before display.
Takes the `{0:format}` form where `format` is a standard number format, a custom number format,
a standard date format, or a custom date format. For more information on supported formats see the
[kendo-intl](https://github.com/telerik/kendo-intl/blob/develop/docs/index.md) documentation.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### headerClassName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets custom CSS classes on the header cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### headerSelectionValue?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates that the header selection checkbox is checked when `true`.


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


Sets the column id for distinguishing columns (multi header, resize, or keyboard navigation scenarios).
Also used as the unique key for rendering cells. If not set, a unique id is generated.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### minResizableWidth?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


10


</code>


</td>
<td class="table-cell-comment">


Sets the minimum resize width (in pixels).





</td>
</tr>
<tr>
<td class="table-cell-name">


#### orderIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


0


</code>


</td>
<td class="table-cell-comment">


Determines the column position. Smaller `orderIndex` values render first.





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


Enables column reordering when `true`.





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


Enables column resizing when `true`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### sortable?


</td>
<td type class="table-cell-type">


<code>


boolean | [ColumnSortSettings]({% slug api_data-tools_columnsortsettings %})


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Enables header click to emit the `sortChange` event. Handle `sortChange` to sort the data.





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


Sets the column header text.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### width?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the width of the column (in pixels).


</td>
</tr>
</tbody>
</table>



