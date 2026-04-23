---
title: GridAIResponseResult
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridAIResponseResult."
api_reference: true
type: inner_api
slug: api_grid_gridairesponseresult
---

# GridAIResponseResult
Represents the result of processing an AI response.
Contains the updated grid state and any messages to display.


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


#### messages


</td>
<td type class="table-cell-type">


<code>


string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Array of user-friendly messages describing what changes were made.
Can be displayed to users as feedback.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### shouldExportPdf


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates whether the AI triggered a PDF export.
Handle this separately as it's an action, not state.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### state


</td>
<td type class="table-cell-type">


<code>


[GridAIState]({% slug api_grid_gridaistate %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The updated grid state after processing AI commands.
Spread this into your Grid component props.


</td>
</tr>
</tbody>
</table>



