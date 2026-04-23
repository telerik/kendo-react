---
title: MultiSelectTreeChangeEvent
description: "Learn how to build custom functionality when working with the React Dropdowns by Kendo UI with the help of the MultiSelectTreeChangeEvent."
api_reference: true
type: inner_api
slug: api_dropdowns_multiselecttreechangeevent
---

# MultiSelectTreeChangeEvent
Represents the object of the `onChange` MultiSelectTree event.


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


#### items


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The items related to current operation.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### nativeEvent


</td>
<td type class="table-cell-type">


<code>


Event


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A native DOM event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### operation


</td>
<td type class="table-cell-type">


<code>


[MultiSelectTreeChangeEventOperation]({% slug api_dropdowns_multiselecttreechangeeventoperation %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Describes the current operation:
* `clear` - clear button is clicked and value is cleared. Null value is retured.
* `delete` - tag is deleted using keyboard or mouse. The items contained in current tag are returned.
* `toggle` - item in TreeView is toggled. Single item is returned.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### syntheticEvent


</td>
<td type class="table-cell-type">


<code>


SyntheticEvent&lt;HTMLElement&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A React [`SyntheticEvent`](https://react.dev/learn/responding-to-events).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### target


</td>
<td type class="table-cell-type">


<code>


[MultiSelectTreeHandle]({% slug api_dropdowns_multiselecttreehandle %})


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



