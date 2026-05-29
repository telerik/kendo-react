---
title: McpToolOption
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the McpToolOption."
api_reference: true
type: inner_api
slug: api_grid_mcptooloption
---

# McpToolOption
Describes a single tool to register via WebMcpProvider.


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


#### commandType


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Internal command identifier used by the component's execution router.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### description


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Human-readable description shown to AI agents.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### enabled


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Whether this tool should be registered (typically derived from component props).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### execute?


</td>
<td type class="table-cell-type">


<code>


(args: Record&lt;string&gt;) => Promise&lt;{ content: { text: string; type: string; }[]; isError?: boolean; }&gt; | { content: { text: string; type: string; }[]; isError?: boolean; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Optional custom execute function. When provided, bypasses the adapter's built-in command router.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### inputSchema?


</td>
<td type class="table-cell-type">


<code>


Record&lt;string&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Optional JSON Schema for the tool's input parameters.


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


Short identifier used as suffix in the tool name.


</td>
</tr>
</tbody>
</table>



