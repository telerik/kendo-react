---
title: UseGridAIRequestReturn
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the UseGridAIRequestReturn."
api_reference: true
type: inner_api
slug: api_grid_usegridairequestreturn
---

# UseGridAIRequestReturn
Return type for the useGridAIRequest hook.


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


#### cancelRequest


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Cancel the current request.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### loading


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Whether a request is currently loading.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sendRequest


</td>
<td type class="table-cell-type">


<code>


(promptMessage: string, isRetry?: boolean) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Send a prompt request to the AI.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### streaming


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Whether a request is currently streaming.


</td>
</tr>
</tbody>
</table>



