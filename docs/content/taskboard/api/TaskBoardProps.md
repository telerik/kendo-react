---
title: TaskBoardProps
description: "Learn how to build custom functionality when working with the React TaskBoard by Kendo UI with the help of the TaskBoardProps."
api_reference: true
type: inner_api
slug: api_taskboard_taskboardprops
---

# TaskBoardProps
Represents the props of the TaskBoard component


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


#### card?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[TaskBoardCardProps]({% slug api_taskboard_taskboardcardprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the TaskBoardCard component.
Example:
```jsx
<TaskBoard card={(props) => <div>{props.title}</div>} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### children?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The React elements that will be rendered inside the toolbar of the TaskBoard.
Example:
```jsx
<TaskBoard>
  <Button>Add Task</Button>
</TaskBoard>
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### className?


</td>
<td type class="table-cell-type">


<code>


string | string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies a list of CSS classes that will be added to the TaskBoard element.
Example:
```jsx
<TaskBoard className="custom-taskboard" />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### column?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[TaskBoardColumnProps]({% slug api_taskboard_taskboardcolumnprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the TaskBoardColumn component.
Example:
```jsx
<TaskBoard column={(props) => <div>{props.title}</div>} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnData


</td>
<td type class="table-cell-type">


<code>


[TaskBoardColumnModel]({% slug api_taskboard_taskboardcolumnmodel %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the column data from type TaskBoardColumnModel.
Example:
```jsx
<TaskBoard columnData={[
  { id: 1, title: 'To Do', status: 'todo' },
  { id: 2, title: 'In Progress', status: 'inProgress' }
]} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### id?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the id that will be added to the TaskBoard element.
Example:
```jsx
<TaskBoard id="taskboard-1" />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange


</td>
<td type class="table-cell-type">


<code>


(event: [TaskBoardChangeEvent]({% slug api_taskboard_taskboardchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `onChange` event. Triggered after tasks or columns are changed.
Example:
```jsx
<TaskBoard onChange={(event) => console.log(event.data)} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### priorities


</td>
<td type class="table-cell-type">


<code>


[TaskBoardPriority]({% slug api_taskboard_taskboardpriority %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the priorities of the task board.
Example:
```jsx
<TaskBoard priorities={[
  { priority: 'High', color: 'red' },
  { priority: 'Low', color: 'green' }
]} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### style?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the styles that are applied to the TaskBoard.
Example:
```jsx
<TaskBoard style={{ backgroundColor: 'lightgray' }} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `tabIndex` that will be added to the TaskBoard Column and Card elements.
Example:
```jsx
<TaskBoard tabIndex={0} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### taskData


</td>
<td type class="table-cell-type">


<code>


[TaskBoardTaskModel]({% slug api_taskboard_taskboardtaskmodel %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the task data from type TaskBoardTaskModel.
Example:
```jsx
<TaskBoard taskData={[
  { id: 1, title: 'Task 1', status: 'todo', description: 'Description 1', priority: { priority: 'High', color: 'red' } },
  { id: 2, title: 'Task 2', status: 'inProgress', description: 'Description 2', priority: { priority: 'Low', color: 'green' } }
]} />
```


</td>
</tr>
</tbody>
</table>



