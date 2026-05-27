---
title: GridAIHttpClient
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridAIHttpClient."
api_reference: true
type: inner_api
slug: api_grid_gridaihttpclient
---

# GridAIHttpClient
Optional custom HTTP client that customers can provide
to override the default fetch-based transport.



## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### request


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Execute an HTTP request.


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


url


</td>
<td type>


<code>


string


</code>


</td>
<td>





</td>
</tr>
<tr>
<td>


config


</td>
<td type>


<code>


[GridAIRequestConfig]({% slug api_grid_gridairequestconfig %})


</code>


</td>
<td>





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


Promise&lt;[GridAIResponse]({% slug api_grid_gridairesponse %})&lt;unknown&gt;&gt;


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>



