---
title: GridPageChangeEvent
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridPageChangeEvent."
api_reference: true
type: inner_api
slug: api_grid_gridpagechangeevent
---

# GridPageChangeEvent
Represents the object of the `onPageChange` Grid event.


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


#### nativeEvent


</td>
<td type class="table-cell-type">


<code>


any


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


#### page


</td>
<td type class="table-cell-type">


<code>


[Page]({% slug api_grid_page %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The page information containing the current page details.


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


A React Synthetic Event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### target


</td>
<td type class="table-cell-type">


<code>


[GridHandle]({% slug api_grid_gridhandle %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An event target.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### targetEvent?


</td>
<td type class="table-cell-type">


<code>


PagerTargetEvent


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The target event that triggered the page change.


</td>
</tr>
</tbody>
</table>



