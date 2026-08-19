---
title: UploadHandle
description: "Learn how to build custom functionality when working with the React Upload by Kendo UI with the help of the UploadHandle."
api_reference: true
type: inner_api
slug: api_upload_uploadhandle
---

# UploadHandle
Represent the `ref` of the Upload component.


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


#### actionElement


</td>
<td type class="table-cell-type">


<code>


undefined | "null" | HTMLInputElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The action element (hidden file input) of the Upload.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### element


</td>
<td type class="table-cell-type">


<code>


undefined | "null" | HTMLInputElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current root DOM element or `null`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### focus


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Focuses the Upload component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### props


</td>
<td type class="table-cell-type">


<code>


Readonly&lt;[UploadProps]({% slug api_upload_uploadprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the Upload component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### triggerUpload


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Upload the selected files. Usable when the upload action is triggered by external code.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### uploadFiles


</td>
<td type class="table-cell-type">


<code>


(files: {[uid: string]: [UploadFileInfo]({% slug api_upload_uploadfileinfo %})[]}) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Uploads the provided grouped files.


</td>
</tr>
</tbody>
</table>



