---
title: GridClipboardEvent
description: "Learn how to build custom functionality when working with the React Data Tools by Kendo UI with the help of the GridClipboardEvent."
api_reference: true
type: inner_api
slug: api_data-tools_gridclipboardevent
---

# GridClipboardEvent
Represents the object of the `GridClipboardEvent` event.


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


#### cellDelimiter?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the cell delimiter used when manipulating the clipboard data Defaults to `\t`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### clipboardData


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


When the action is `copy` or `cut` - the Grid data, copied to the clipboard, in Excel-compatible format.
When the action is `paste` - the current clipboard data, available in the original DOM event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columns


</td>
<td type class="table-cell-type">


<code>


[ColumnBaseProps]({% slug api_data-tools_columnbaseprops %})&lt;[CellProps]({% slug api_data-tools_cellprops %})&gt;[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


All the Grid columns. It takes value of type of [ColumnBaseProps](https://www.telerik.com/kendo-react-ui/components/datatools/api/columnbaseprops)&lt;[CellProps](https://www.telerik.com/kendo-react-ui/components/datatools/api/cellprops)&gt;[]


</td>
</tr>
<tr>
<td class="table-cell-name">


#### copiedItems


</td>
<td type class="table-cell-type">


<code>


[ClipboardItem]({% slug api_data-tools_clipboarditem %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A collection of the ClipboardItem that are selected.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### copyHeaders?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Passes the clipboard prop copyHeaders value in the clipboard action.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItem?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


This is the item that is clicked if the action is raised from the contextMenu.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItemKey


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Passes the dataItemKey prop in the clipboard action.


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


This is the column field that is clicked if the action is raised from the contextMenu.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### nativeEvent?


</td>
<td type class="table-cell-type">


<code>


ClipboardEvent


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the native [ClipboardEvent](https://www.telerik.com/kendo-react-ui/components/grid/api/gridcellssettings)


</td>
</tr>
<tr>
<td class="table-cell-name">


#### newLineDelimiter?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the row delimiter used when manipulating the clipboard data Defaults to `\r\n`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pastedItems


</td>
<td type class="table-cell-type">


<code>


[ClipboardItem]({% slug api_data-tools_clipboarditem %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A collection of the ClipboardItem that are pasted.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### type


</td>
<td type class="table-cell-type">


<code>


[ClipboardActionType]({% slug api_data-tools_clipboardactiontype %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the type of the clipboard action.


</td>
</tr>
</tbody>
</table>



