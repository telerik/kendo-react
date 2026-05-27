---
title: WebMcpProps
description: "Learn how to build custom functionality when working with the React Common by Kendo UI with the help of the WebMcpProps."
api_reference: true
type: inner_api
slug: api_common_webmcpprops
---

# WebMcpProps
Configuration object for the `webMcp` prop on individual components.


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


#### dataName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Human-readable data name exposed to AI agents. Overrides the provider's `dataName`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tools?


</td>
<td type class="table-cell-type">


<code>


(tools: [McpToolOption]({% slug api_common_mcptooloption %})[]) => [McpToolOption]({% slug api_common_mcptooloption %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Optional callback to filter or customise the tools before registration.


</td>
</tr>
</tbody>
</table>



