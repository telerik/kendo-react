---
title: OTPInputFocusEvent
description: "Learn how to build custom functionality when working with the React Inputs by Kendo UI with the help of the OTPInputFocusEvent."
api_reference: true
type: inner_api
slug: api_inputs_otpinputfocusevent
---

# OTPInputFocusEvent
Event object fired by `OTPInput.onFocus`.


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


#### cellIndex


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The zero-based index of the cell that received focus.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### nativeEvent


</td>
<td type class="table-cell-type">


<code>


FocusEvent


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The underlying native focus event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### syntheticEvent


</td>
<td type class="table-cell-type">


<code>


FocusEvent&lt;HTMLInputElement&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The underlying React synthetic event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### target


</td>
<td type class="table-cell-type">


<code>


[OTPInputHandle]({% slug api_inputs_otpinputhandle %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An event target.


</td>
</tr>
</tbody>
</table>



