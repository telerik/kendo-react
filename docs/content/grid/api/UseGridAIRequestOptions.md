---
title: UseGridAIRequestOptions
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the UseGridAIRequestOptions."
api_reference: true
type: inner_api
slug: api_grid_usegridairequestoptions
---

# UseGridAIRequestOptions
Options for the useGridAIRequest hook.


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


#### columns?


</td>
<td type class="table-cell-type">


<code>


{ field: string; id?: string; values?: any[]; }[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The columns to include in the request.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### gridRef?


</td>
<td type class="table-cell-type">


<code>


"null" | Pick&lt;[GridHandle]({% slug api_grid_gridhandle %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Reference to grid methods.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### gridState?


</td>
<td type class="table-cell-type">


<code>


[GridAIState]({% slug api_grid_gridaistate %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current grid state.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExportPdf?


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback fired when PDF export is requested.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMessages?


</td>
<td type class="table-cell-type">


<code>


(messages: string[], promptMessage?: string, isRetry?: boolean) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback fired when messages are received from AI.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPromptRequest?


</td>
<td type class="table-cell-type">


<code>


(request: [GridAIRequestData]({% slug api_grid_gridairequestdata %}), isRetry?: boolean) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback fired before the request is sent.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onResponseError?


</td>
<td type class="table-cell-type">


<code>


(error: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback fired when the response returns an error.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onResponseSuccess?


</td>
<td type class="table-cell-type">


<code>


(response: AxiosResponse&lt;any&gt;, promptMessage?: string, isRetry?: boolean) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback fired when the response is received successfully.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onStateChange?


</td>
<td type class="table-cell-type">


<code>


(newState: [GridAIState]({% slug api_grid_gridaistate %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback fired when the grid state should be updated.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### requestOptions?


</td>
<td type class="table-cell-type">


<code>


AxiosRequestConfig&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Additional axios request options.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### requestUrl?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The URL to send the AI request to.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### role?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The role for the AI request. Defaults to 'user'.


</td>
</tr>
</tbody>
</table>



