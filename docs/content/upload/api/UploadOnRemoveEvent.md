---
title: UploadOnRemoveEvent
description: "Learn how to build custom functionality when working with the React Upload by Kendo UI with the help of the UploadOnRemoveEvent."
api_reference: true
type: inner_api
slug: api_upload_uploadonremoveevent
---

# UploadOnRemoveEvent
The `onRemove` event.


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


#### affectedFiles


</td>
<td type class="table-cell-type">


<code>


[UploadFileInfo]({% slug api_upload_uploadfileinfo %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The list of the affected files.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### newState


</td>
<td type class="table-cell-type">


<code>


[UploadFileInfo]({% slug api_upload_uploadfileinfo %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The new updated state candidate.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### response?


</td>
<td type class="table-cell-type">


<code>


[UploadResponse]({% slug api_upload_uploadresponse %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The server response (if available).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### target


</td>
<td type class="table-cell-type">


<code>


[Upload]({% slug api_upload_upload %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An event target.


</td>
</tr>
</tbody>
</table>



