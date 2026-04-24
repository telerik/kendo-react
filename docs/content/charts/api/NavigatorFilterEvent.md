---
title: NavigatorFilterEvent
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the NavigatorFilterEvent."
api_reference: true
type: inner_api
slug: api_charts_navigatorfilterevent
---

# NavigatorFilterEvent
The arguments for the `navigatorFilter` event.


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


#### from


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The start of the navigator range.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### target


</td>
<td type class="table-cell-type">


<code>


[Charts]({% slug api_charts_charts %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `Chart` component that triggered the event.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### to


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The end of the navigator range.


</td>
</tr>
</tbody>
</table>



## Constructors

### NavigatorFilterEvent
<code>


(e: any, target: [Charts]({% slug api_charts_charts %}))


</code>
Constructs the event arguments from a raw object.

#### Parameters
##### e
<code>


any


</code>


##### target
<code>


[Charts]({% slug api_charts_charts %})


</code>




