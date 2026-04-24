---
title: BasePageChangeEvent
description: "Learn how to build custom functionality when working with the React Data Tools by Kendo UI with the help of the BasePageChangeEvent."
api_reference: true
type: inner_api
slug: api_data-tools_basepagechangeevent
---

# BasePageChangeEvent
Represents the base object of the `onPageChange` event. It is usually used
in custom pager scenarios in cases when we don't need any of the events or the target.


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


A native DOM event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### skip


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The number of records that will be skipped.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### syntheticEvent?


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


#### take


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The number of records that will be taken.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### targetEvent?


</td>
<td type class="table-cell-type">


<code>


[PagerTargetEvent]({% slug api_data-tools_pagertargetevent %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A target change event.


</td>
</tr>
</tbody>
</table>



