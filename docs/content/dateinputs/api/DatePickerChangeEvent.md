---
title: DatePickerChangeEvent
description: "Learn how to build custom functionality when working with the React Date Inputs by Kendo UI with the help of the DatePickerChangeEvent."
api_reference: true
type: inner_api
slug: api_dateinputs_datepickerchangeevent
---

# DatePickerChangeEvent
The arguments for the `onChange` event of the DatePicker.


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


#### nativeEvent?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The native DOM event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### show


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current popup state.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### syntheticEvent


</td>
<td type class="table-cell-type">


<code>


SyntheticEvent&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The React synthetic event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### target


</td>
<td type class="table-cell-type">


<code>


[DatePickerHandle]({% slug api_dateinputs_datepickerhandle %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The component instance that fired the event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


"null" | Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The new `value`.


</td>
</tr>
</tbody>
</table>



