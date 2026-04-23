---
title: PopulateClipboardArgs
description: "Learn how to build custom functionality when working with the React Data Tools by Kendo UI with the help of the PopulateClipboardArgs."
api_reference: true
type: inner_api
slug: api_data-tools_populateclipboardargs
---

# PopulateClipboardArgs
Represents the `PopulateClipboardArgs` event argument.


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


#### data


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Passes the data currently displayed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItemKey?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Passes dataItemKey name of the field that could be used to make difference between dataItems.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### event


</td>
<td type class="table-cell-type">


<code>


[ClipboardDataEvent]({% slug api_data-tools_clipboarddataevent %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the base object of the `ClipboardDataEvent` event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### previousCopiedItems?


</td>
<td type class="table-cell-type">


<code>


[ClipboardItem]({% slug api_data-tools_clipboarditem %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Previous copied items.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectedState


</td>
<td type class="table-cell-type">


<code>


[SelectDescriptor]({% slug api_data-tools_selectdescriptor %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the current selected state of the data.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### subItemsField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Passes subItemsField that will be used in grouping cases.


</td>
</tr>
</tbody>
</table>



