---
title: UploadListItemProps
description: "Learn how to build custom functionality when working with the React Upload by Kendo UI with the help of the UploadListItemProps."
api_reference: true
type: inner_api
slug: api_upload_uploadlistitemprops
---

# UploadListItemProps
Represents the properties of the KendoReact UploadList Item component.


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


#### async


</td>
<td type class="table-cell-type">


<code>


[UploadAsyncProps]({% slug api_upload_uploadasyncprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The asynchronous properties of the Upload.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### disabled


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `disabled` property of the Upload.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### files


</td>
<td type class="table-cell-type">


<code>


[UploadFileInfo]({% slug api_upload_uploadfileinfo %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


One or more files for the current item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCancel


</td>
<td type class="table-cell-type">


<code>


(uid: string) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks the **Cancel** button.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRemove


</td>
<td type class="table-cell-type">


<code>


(uid: string) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks the **Remove** button.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRetry


</td>
<td type class="table-cell-type">


<code>


(uid: string) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks the **Retry** button.


</td>
</tr>
</tbody>
</table>



