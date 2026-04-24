---
title: PromptBoxSelectAttachmentsEvent
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the PromptBoxSelectAttachmentsEvent."
api_reference: true
type: inner_api
slug: api_conversational-ui_promptboxselectattachmentsevent
---

# PromptBoxSelectAttachmentsEvent
Event argument for the PromptBox `onSelectAttachments` event.
Fires when files are selected via the upload button.

Provides both the newly selected files and the complete state for different use cases:
- Use `selectedFiles` for validation, logging, or processing only the newly selected files
- Use `allFiles` for state synchronization, displaying total file count, or updating UI with all files


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


#### allFiles


</td>
<td type class="table-cell-type">


<code>


UploadFileInfo[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


All files currently in the PromptBox, including both previously selected and newly selected files.
Use this when you need the complete file state for UI updates, total count, or state management.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectedFiles


</td>
<td type class="table-cell-type">


<code>


UploadFileInfo[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The newly selected files from this selection event.
Use this when you need to process, validate, or log only the files that were just selected.
Contains Upload component's UploadFileInfo objects with metadata like size, validation errors, and status.
To access the native File object, use fileInfo.getRawFile().


</td>
</tr>
</tbody>
</table>



