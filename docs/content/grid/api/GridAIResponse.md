---
title: GridAIResponse
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridAIResponse."
api_reference: true
type: inner_api
slug: api_grid_gridairesponse
---

# GridAIResponse
Normalized HTTP response returned by the Grid AI Assistant.
Replaces direct usage of AxiosResponse.


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


#### config?


</td>
<td type class="table-cell-type">


<code>


unknown


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Request configuration. Included for backward compatibility with AxiosResponse.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### data


</td>
<td type class="table-cell-type">


<code>


T


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Parsed response body.


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


Response headers.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### request?


</td>
<td type class="table-cell-type">


<code>


unknown


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The underlying request object. Included for backward compatibility with AxiosResponse.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### status


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


HTTP status code.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### statusText


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


HTTP status text.


</td>
</tr>
</tbody>
</table>



