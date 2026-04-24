---
title: DateInputChangeEvent
description: "Learn how to build custom functionality when working with the React Date Inputs by Kendo UI with the help of the DateInputChangeEvent."
api_reference: true
type: inner_api
slug: api_dateinputs_dateinputchangeevent
---

# DateInputChangeEvent
The arguments for the `change` event of the DateInput. The generic argument sets the target type of the event. Defaults to `DateInput`.


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


T


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



