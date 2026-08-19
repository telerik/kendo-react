---
title: OTPInputHandle
description: "Learn how to build custom functionality when working with the React Inputs by Kendo UI with the help of the OTPInputHandle."
api_reference: true
type: inner_api
slug: api_inputs_otpinputhandle
---

# OTPInputHandle
Represents the `ref` of the KendoReact OTPInput component.


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


#### blur


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Programmatically blurs the OTPInput.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### element


</td>
<td type class="table-cell-type">


<code>


"null" | HTMLDivElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The root wrapper DOM element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### focus


</td>
<td type class="table-cell-type">


<code>


(index?: number) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Focuses the input cell at `index`.
When `index` is omitted, focuses the first unfilled cell or
the last cell if all are filled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current string value of the OTPInput.
Unfilled cells are represented with a space (`' '`).


</td>
</tr>
</tbody>
</table>



