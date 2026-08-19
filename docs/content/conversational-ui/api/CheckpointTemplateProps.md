---
title: CheckpointTemplateProps
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the CheckpointTemplateProps."
api_reference: true
type: inner_api
slug: api_conversational-ui_checkpointtemplateprops
---

# CheckpointTemplateProps
The props passed to a custom `template` component for the `Checkpoint` component.

When a `template` is provided, it replaces the default per-state action
entirely — e.g. to render a timestamp, version label, author, or
restore-confirmation/failure content.


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


#### state?


</td>
<td type class="table-cell-type">


<code>


[CheckpointState]({% slug api_conversational-ui_checkpointstate %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current lifecycle state of the checkpoint.


</td>
</tr>
</tbody>
</table>



