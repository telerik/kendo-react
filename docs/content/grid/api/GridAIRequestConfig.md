---
title: GridAIRequestConfig
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridAIRequestConfig."
api_reference: true
type: inner_api
slug: api_grid_gridairequestconfig
---

# GridAIRequestConfig
Configuration for an HTTP request made by the Grid AI Assistant.
Replaces direct usage of AxiosRequestConfig.


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


#### headers?


</td>
<td type class="table-cell-type">


<code>


Record&lt;string&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Request headers.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### method?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


HTTP method.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### responseType?


</td>
<td type class="table-cell-type">


<code>


"text" | "json"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Expected response type.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### signal?


</td>
<td type class="table-cell-type">


<code>


AbortSignal


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


AbortSignal for request cancellation.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### withCredentials?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Whether to include credentials (cookies) in cross-origin requests.


</td>
</tr>
</tbody>
</table>



