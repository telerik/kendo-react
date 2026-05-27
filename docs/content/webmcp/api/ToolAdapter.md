---
title: ToolAdapter
description: "Learn how to build custom functionality when working with the React Web MCP by Kendo UI with the help of the ToolAdapter."
api_reference: true
type: inner_api
slug: api_webmcp_tooladapter
---

# ToolAdapter
A tool adapter creates a set of Web MCP tool registrations for a
specific KendoReact component type.

The provider calls `createTools` once the child component is mounted
and its ref (imperative handle) is available.


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


#### componentSuffix


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Component-type suffix used to build the default tool name prefix (e.g. 'textbox', 'grid').


</td>
</tr>
</tbody>
</table>



## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### createTools


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Create MCP tool registrations for a component instance.





</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


handle


</td>
<td type>


<code>


"null" | THandle


</code>


</td>
<td>


The component's imperative handle (snapshot from registration time).


</td>
</tr>
<tr>
<td>


propsRef


</td>
<td type>


<code>


{ current: TProps; }


</code>


</td>
<td>


A ref to the component's current props. Read `.current` inside tool
                  execute callbacks for live values.


</td>
</tr>
<tr>
<td>


config


</td>
<td type>


<code>


[WebMcpConfig]({% slug api_webmcp_webmcpconfig %})


</code>


</td>
<td>


Resolved MCP configuration (dataName, groupName).


</td>
</tr>
<tr>
<td>


mc


</td>
<td type>


<code>


WebMcpModelContext


</code>


</td>
<td>


The browser's `navigator.modelContext` surface.


</td>
</tr>
</tbody>
</table>
</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


WebMcpToolRegistration[]


</code>


</td>
<td>


An array of tool registrations (each has `.unregister()`).


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>



