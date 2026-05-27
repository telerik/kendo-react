---
title: WebMcpProvider
description: "Learn how to build custom functionality when working with the React Web MCP by Kendo UI with the help of the WebMcpProvider."
api_reference: true
type: inner_api
slug: api_webmcp_webmcpprovider
---

# WebMcpProvider
Context-based provider that receives component registrations from any
depth in the tree and creates Web MCP tools using adapters.

The flow:
1. Provider publishes a `register` callback via `WebMcpContext`.
2. Components call `useWebMcpRegister('textbox', handle, props)` (1 line).
3. The `register` callback looks up the adapter by component type string.
4. The adapter creates tools using the component's handle and props.
5. Tools are unregistered when the component unmounts or the provider unmounts.

A [Functional Component](https://react.dev/reference/react/Component).


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


#### props


</td>
<td type class="table-cell-type">


<code>


[WebMcpProviderProps]({% slug api_webmcp_webmcpproviderprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the WebMcpProvider component.


</td>
</tr>
</tbody>
</table>



