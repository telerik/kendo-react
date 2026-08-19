---
title: CheckpointProps
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the CheckpointProps."
api_reference: true
type: inner_api
slug: api_conversational-ui_checkpointprops
---

# CheckpointProps
Defines the props for the `Checkpoint` component.

`Checkpoint` marks a point in the transcript the user can restore to, or redo
past, after a restore. It renders a built-in default action driven by `state`,
which can be entirely replaced by supplying `template`.

Extends `React.HTMLAttributes<HTMLDivElement>` to allow passing standard HTML
attributes (e.g. `className`, `style`, `id`) directly to the root element.


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


#### onAction?


</td>
<td type class="table-cell-type">


<code>


(event: [CheckpointActionEvent]({% slug api_conversational-ui_checkpointactionevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback fired when the user activates the current checkpoint action
(e.g. clicks "Restore Checkpoint" or "Redo"). The payload always
mirrors the `state` prop's value at the time of activation.


</td>
</tr>
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


The current lifecycle state of the checkpoint, driving the default
built-in action rendered in the checkpoint content area.
When omitted, no default action is rendered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### template?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[CheckpointTemplateProps]({% slug api_conversational-ui_checkpointtemplateprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A custom component that replaces the default per-state action entirely
when supplied — e.g. a timestamp, version label, author, or
restore-confirmation/failure content.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### visible?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


When `true`, the checkpoint strip is always visible.
When `false` or omitted, the strip is only revealed on hover.





</td>
</tr>
</tbody>
</table>



