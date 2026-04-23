---
title: GanttEditorProps
description: "Learn how to build custom functionality when working with the React Gantt by Kendo UI with the help of the GanttEditorProps."
api_reference: true
type: inner_api
slug: api_gantt_gantteditorprops
---

# GanttEditorProps



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


#### dataItem


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Contains the task that is being edited.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dependencyData?


</td>
<td type class="table-cell-type">


<code>


[GanttDependency]({% slug api_gantt_ganttdependency %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Provides all dependency data for the editor to use.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDependencyCreate?


</td>
<td type class="table-cell-type">


<code>


(event: [GanttEditorDependenciesHandler]({% slug api_gantt_gantteditordependencieshandler %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when dependencies are created, updated, or deleted.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### taskData?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Provides all task data for the editor to use.


</td>
</tr>
</tbody>
</table>



