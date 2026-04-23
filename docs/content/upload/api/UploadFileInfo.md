---
title: UploadFileInfo
description: "Learn how to build custom functionality when working with the React Upload by Kendo UI with the help of the UploadFileInfo."
api_reference: true
type: inner_api
slug: api_upload_uploadfileinfo
---

# UploadFileInfo
Contains information which is related to the selected file.


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


#### extension?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The file extension including the leading dot&mdash;for example, `.jpg`, `.png`, or other.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### getRawFile?


</td>
<td type class="table-cell-type">


<code>


() => File


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Gets the raw file instance.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### name


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The file name.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### progress


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current upload progress.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The file size in bytes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### status


</td>
<td type class="table-cell-type">


<code>


[UploadFileStatus]({% slug api_upload_uploadfilestatus %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current state of the file&mdash;`Failed`, `Selected`, `Uploaded`, or `Uploading`.
`Initial` is a special value for `FileState` and is
automatically applied to initial files without you having to explicitly set their state.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### uid


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The unique identifier of the group (batch) with one or more files.
Has to be set for the initial list of files.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### validationErrors?


</td>
<td type class="table-cell-type">


<code>


string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A list which contains the validation errors (if any).


</td>
</tr>
</tbody>
</table>



