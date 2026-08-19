---
title: ThoughtTemplateProps
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the ThoughtTemplateProps."
api_reference: true
type: inner_api
slug: api_conversational-ui_thoughttemplateprops
---

# ThoughtTemplateProps
The props passed to a custom `thoughtTemplate` component for the `ChainOfThought` component.

When a `thoughtTemplate` is provided, it replaces the default rendering of each `Thought` row.


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


#### index


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The zero-based index of the thought within the `thoughts` array.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### thought


</td>
<td type class="table-cell-type">


<code>


[Thought]({% slug api_conversational-ui_thought %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `Thought` data item being rendered.


</td>
</tr>
</tbody>
</table>



