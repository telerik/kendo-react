---
title: ToolCallApprovalTemplateProps
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the ToolCallApprovalTemplateProps."
api_reference: true
type: inner_api
slug: api_conversational-ui_toolcallapprovaltemplateprops
---

# ToolCallApprovalTemplateProps
The props passed to a custom `approvalTemplate` component for the `ToolCall` component.

When an `approvalTemplate` is provided, it replaces the default approval
explanation and Approve/Reject actions rendered when `state` is `'awaitingApproval'`.


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


#### approvalText?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The approval explanation text supplied via `approvalText`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### state?


</td>
<td type class="table-cell-type">


<code>


[ToolCallState]({% slug api_conversational-ui_toolcallstate %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current lifecycle state of the tool call.


</td>
</tr>
</tbody>
</table>



