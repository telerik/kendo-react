---
title: GanttEditorPredecessorsProps
description: "Learn how to build custom functionality when working with the React Gantt by Kendo UI with the help of the GanttEditorPredecessorsProps."
api_reference: true
type: inner_api
slug: api_gantt_gantteditorpredecessorsprops
---

# GanttEditorPredecessorsProps



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


#### addPredecessorsDependency


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback function that adds a new predecessor dependency.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### deleteDependency


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback function that removes the selected dependency.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dependencyTypes


</td>
<td type class="table-cell-type">


<code>


{ name: string; type: [DependencyType]({% slug api_gantt_dependencytype %}); }[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The available dependency types with their display names.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### flatTasks


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The flattened array of all tasks in the Gantt.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSelectRow


</td>
<td type class="table-cell-type">


<code>


(event: GridRowClickEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback function that handles row selection in the dependencies grid.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### predecessors


</td>
<td type class="table-cell-type">


<code>


[GanttDependency]({% slug api_gantt_ganttdependency %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The array of predecessor dependencies for the current task.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectedItem


</td>
<td type class="table-cell-type">


<code>


undefined | [GanttDependency]({% slug api_gantt_ganttdependency %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The currently selected dependency item in the editor.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### updateDependency


</td>
<td type class="table-cell-type">


<code>


(dependency: [GanttDependency]({% slug api_gantt_ganttdependency %}), field: string, newValue: number) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Callback function that updates a dependency with new values.


</td>
</tr>
</tbody>
</table>



