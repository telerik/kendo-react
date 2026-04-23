---
title: GanttHandle
description: "Learn how to build custom functionality when working with the React Gantt by Kendo UI with the help of the GanttHandle."
api_reference: true
type: inner_api
slug: api_gantt_gantthandle
---

# GanttHandle
Represents the Object which is passed to the [`ref`](https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom) callback of the Gantt component.


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


The current element or `null` if there is no one.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### props


</td>
<td type class="table-cell-type">


<code>


[GanttProps]({% slug api_gantt_ganttprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the Gantt.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### scrollIntoView


</td>
<td type class="table-cell-type">


<code>


(options: { rowIndex?: number; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Method to allow the scroll to be set to a specific row index.


</td>
</tr>
</tbody>
</table>



