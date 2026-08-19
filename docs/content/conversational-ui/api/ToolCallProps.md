---
title: ToolCallProps
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the ToolCallProps."
api_reference: true
type: inner_api
slug: api_conversational-ui_toolcallprops
---

# ToolCallProps
Defines the props for the `ToolCall` component.

`ToolCall` displays a tool or function invocation, its current state, and
optional details. It renders its own default Approve/Reject buttons whenever
`state === 'awaitingApproval'`, firing `onAction` with the corresponding
`action`. `approvalTemplate` overrides this default rendering entirely.

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


#### approvalTemplate?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[ToolCallApprovalTemplateProps]({% slug api_conversational-ui_toolcallapprovaltemplateprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A custom component that replaces the default approval explanation and actions.
Receives `{ state }` via `ToolCallApprovalTemplateProps`.


</td>
</tr>
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


Approval explanation shown in the default approval card when `state = "awaitingApproval"`.
Override with `approvalTemplate` for custom rendering.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultExpanded?


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


Initial expanded state in uncontrolled mode. Ignored when `expanded` is provided.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### errorTemplate?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[ToolCallErrorTemplateProps]({% slug api_conversational-ui_toolcallerrortemplateprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A custom component that replaces the default error block content.
Receives `{ errorText }` via `ToolCallErrorTemplateProps`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### errorText?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Error message. Rendered whenever provided.
Override with `errorTemplate` for custom rendering.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### expandable?


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


Whether the head exposes disclosure behavior.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### expanded?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls whether tool details are visible, in controlled mode.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### label?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Tool or function name.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onAction?


</td>
<td type class="table-cell-type">


<code>


(event: [ToolCallActionEvent]({% slug api_conversational-ui_toolcallactionevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback fired when the user clicks the Approve or Reject button.

```tsx
<ToolCall state="awaitingApproval" onAction={(e) => console.log(e.action)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExpandedChange?


</td>
<td type class="table-cell-type">


<code>


(event: [ToolCallExpandedChangeEvent]({% slug api_conversational-ui_toolcallexpandedchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback fired when the user toggles tool details.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### parameters?


</td>
<td type class="table-cell-type">


<code>


unknown


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Raw tool input data — rendered as formatted JSON by default.
Override with `paramsTemplate` for custom rendering.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### paramsTemplate?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[ToolCallParamsTemplateProps]({% slug api_conversational-ui_toolcallparamstemplateprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A custom component that replaces the default parameters block content.
Receives `{ parameters }` via `ToolCallParamsTemplateProps`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### result?


</td>
<td type class="table-cell-type">


<code>


unknown


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Raw tool result data — rendered as formatted JSON by default.
Override with `resultTemplate` for custom rendering.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### resultTemplate?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[ToolCallResultTemplateProps]({% slug api_conversational-ui_toolcallresulttemplateprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A custom component that replaces the default result block content.
Receives `{ result }` via `ToolCallResultTemplateProps`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### secondaryLabel?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


File, command, or target context.
Include duration text here when needed.


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


<code>


"active"


</code>


</td>
<td class="table-cell-comment">


Semantic lifecycle state.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### svgIcon?


</td>
<td type class="table-cell-type">


<code>


SVGIcon


</code>


</td>
<td class="table-cell-default">


<code>


wrenchIcon


</code>


</td>
<td class="table-cell-comment">


Tool icon.
Pass an icon object from `@progress/kendo-svg-icons`.





</td>
</tr>
</tbody>
</table>



