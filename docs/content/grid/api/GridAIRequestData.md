---
title: GridAIRequestData
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridAIRequestData."
api_reference: true
type: inner_api
slug: api_grid_gridairequestdata
---

# GridAIRequestData
Represents the request data structure for the Grid AI request.


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


#### columns


</td>
<td type class="table-cell-type">


<code>


{ field: string; id?: string; values?: any[]; }[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The array of column definitions with their field names.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### headers


</td>
<td type class="table-cell-type">


<code>


Record&lt;string&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The headers object containing key-value pairs for the request.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### promptMessage


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The prompt message sent to the AI assistant.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### requestOptions


</td>
<td type class="table-cell-type">


<code>


{[key: string]: any}


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The request configuration options for the HTTP request.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### role


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The role or context for the AI request.


</td>
</tr>
</tbody>
</table>



