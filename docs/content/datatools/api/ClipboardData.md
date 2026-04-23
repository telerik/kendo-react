---
title: ClipboardData
description: "Learn how to build custom functionality when working with the React Data Tools by Kendo UI with the help of the ClipboardData."
api_reference: true
type: inner_api
slug: api_data-tools_clipboarddata
---

# ClipboardData
Represents the object that is returned form the `populateClipboardData` function.


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
</tbody>
</table>



