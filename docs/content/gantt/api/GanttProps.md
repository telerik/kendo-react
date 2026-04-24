---
title: GanttProps
description: "Learn how to build custom functionality when working with the React Gantt by Kendo UI with the help of the GanttProps."
api_reference: true
type: inner_api
slug: api_gantt_ganttprops
---

# GanttProps
Represents the props of the [KendoReact Gantt component](https://www.telerik.com/kendo-react-ui/components/gantt).


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


#### children?


</td>
<td type class="table-cell-type">


<code>


[GanttView]({% slug api_gantt_ganttview %}) | [GanttView]({% slug api_gantt_ganttview %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Provides view components as children. The Gantt renders the currently selected view.

```jsx
<Gantt>
  <GanttWeekView title="Day" />
  <GanttDayView title="Week" />
</Gantt>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### className?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Adds custom CSS classes to the Gantt component.

```jsx
<Gantt className="custom-class" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnMenu?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The component to render as the column menu.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnMenuFilter?


</td>
<td type class="table-cell-type">


<code>


CompositeFilterDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The descriptors by which the data is filtered in the column menu.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columns?


</td>
<td type class="table-cell-type">


<code>


[GanttColumnProps]({% slug api_gantt_ganttcolumnprops %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A collection of `GanttColumnProps` for creating columns.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultView?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


"week"


</code>


</td>
<td class="table-cell-comment">


Sets the view that shows first when the Gantt loads. You can choose from:
* `day`
* `week` (Default)
* `month`
* `year`




```jsx
<Gantt defaultView="month" />
```



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


Provides dependency data for the Gantt chart. Dependencies appear as visual connections between tasks.

```jsx
const dependencies = [{ id: 1, from: 1, to: 2 }];
<Gantt dependencyData={dependencies} />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### dependencyModelFields?


</td>
<td type class="table-cell-type">


<code>


[GanttDependencyModelFields]({% slug api_gantt_ganttdependencymodelfields %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Maps field names for reading dependency data from your data source.

```jsx
const dependencyModelFields = { id: 'id', from: 'from', to: 'to' };
<Gantt dependencyModelFields={dependencyModelFields} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### filter?


</td>
<td type class="table-cell-type">


<code>


FilterDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The descriptors by which the data is filtered ([more information and examples](https://www.telerik.com/kendo-react-ui/components/gantt/filtering)).
This affects the values and buttons in the `FilterRow` of the Gantt.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### navigatable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


If set to `true`, the user can use dedicated shortcuts to interact with the Gantt.
By default, navigation is disabled and the Gantt content is accessible in the normal tab sequence.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### noRecords?


</td>
<td type class="table-cell-type">


<code>


React.ReactElement&lt;[GanttNoRecordsProps]({% slug api_gantt_ganttnorecordsprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the component that will be rendered when the `data` property of the Gantt is empty or undefined.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onAddClick?


</td>
<td type class="table-cell-type">


<code>


(event: [GanttAddClickEvent]({% slug api_gantt_ganttaddclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks the add task button.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onColumnMenuFilterChange?


</td>
<td type class="table-cell-type">


<code>


(event: [GanttColumnMenuFilterChangeEvent]({% slug api_gantt_ganttcolumnmenufilterchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user changes the column menu filter.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onColumnReorder?


</td>
<td type class="table-cell-type">


<code>


(event: [GanttColumnReorderEvent]({% slug api_gantt_ganttcolumnreorderevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user reorders columns.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onColumnResize?


</td>
<td type class="table-cell-type">


<code>


(event: [GanttColumnResizeEvent]({% slug api_gantt_ganttcolumnresizeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user resizes a column.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDataStateChange?


</td>
<td type class="table-cell-type">


<code>


(event: [GanttDataStateChangeEvent]({% slug api_gantt_ganttdatastatechangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the data state changes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDependencyCreate?


</td>
<td type class="table-cell-type">


<code>


(event: [GanttDependencyCreateEvent]({% slug api_gantt_ganttdependencycreateevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user creates a dependency by connecting two tasks.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExpandChange?


</td>
<td type class="table-cell-type">


<code>


(event: [GanttExpandChangeEvent]({% slug api_gantt_ganttexpandchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks the expand or collapse icon on a row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFilterChange?


</td>
<td type class="table-cell-type">


<code>


(event: [GanttFilterChangeEvent]({% slug api_gantt_ganttfilterchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Gantt filter is modified through the UI
([more information and examples](https://www.telerik.com/kendo-react-ui/components/gantt/filtering)).
You need to handle the event yourself and filter the data.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onHeaderSelectionChange?


</td>
<td type class="table-cell-type">


<code>


(event: [GanttHeaderSelectionChangeEvent]({% slug api_gantt_ganttheaderselectionchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks the checkbox in a column header.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeyDown?


</td>
<td type class="table-cell-type">


<code>


(event: [GanttKeyDownEvent]({% slug api_gantt_ganttkeydownevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user presses any keyboard key.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRowClick?


</td>
<td type class="table-cell-type">


<code>


(event: [GanttRowClickEvent]({% slug api_gantt_ganttrowclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks a row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRowContextMenu?


</td>
<td type class="table-cell-type">


<code>


(event: [GanttRowContextMenuEvent]({% slug api_gantt_ganttrowcontextmenuevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user right-clicks on a row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRowDoubleClick?


</td>
<td type class="table-cell-type">


<code>


(event: [GanttRowDoubleClickEvent]({% slug api_gantt_ganttrowdoubleclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user double-clicks a row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSelectionChange?


</td>
<td type class="table-cell-type">


<code>


(event: [GanttSelectionChangeEvent]({% slug api_gantt_ganttselectionchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user selects or deselects rows or cells.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSortChange?


</td>
<td type class="table-cell-type">


<code>


(event: [GanttSortChangeEvent]({% slug api_gantt_ganttsortchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the sorting of the Gantt is changed ([see example](https://www.telerik.com/kendo-react-ui/components/gantt/sorting)).
You need to handle the event yourself and sort the data.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onTaskClick?


</td>
<td type class="table-cell-type">


<code>


(event: [GanttTaskClickEvent]({% slug api_gantt_gantttaskclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks a task.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onTaskContextMenu?


</td>
<td type class="table-cell-type">


<code>


(event: [GanttTaskContextMenuEvent]({% slug api_gantt_gantttaskcontextmenuevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user right-clicks on a task.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onTaskDoubleClick?


</td>
<td type class="table-cell-type">


<code>


(event: [GanttTaskDoubleClickEvent]({% slug api_gantt_gantttaskdoubleclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user double-clicks a task.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onTaskRemoveClick?


</td>
<td type class="table-cell-type">


<code>


(event: [GanttTaskRemoveClickEvent]({% slug api_gantt_gantttaskremoveclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks the remove button on a task.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onViewChange?


</td>
<td type class="table-cell-type">


<code>


(args: [GanttViewChangeEvent]({% slug api_gantt_ganttviewchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user selects a different view. Use this to control which view is shown.

```jsx
const handleViewChange = (args) => console.log(args.view);
<Gantt onViewChange={handleViewChange} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### reorderable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


If set to `true`, the user can reorder columns by dragging their header cells.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### resizable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


If set to `true`, the user can resize columns by dragging the edges (resize handles) of their header cells.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### row?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[GanttRowProps]({% slug api_gantt_ganttrowprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Gantt row component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowHeight?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


50


</code>


</td>
<td class="table-cell-comment">


Sets the height of all rows in pixels. All rows have the same height.




```jsx
<Gantt rowHeight={40} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectable?


</td>
<td type class="table-cell-type">


<code>


[GanttSelectableSettings]({% slug api_gantt_ganttselectablesettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Gantt selectable settings.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sort?


</td>
<td type class="table-cell-type">


<code>


SortDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The descriptors by which the data is sorted. Applies the sorting styles and buttons to the affected columns.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sortable?


</td>
<td type class="table-cell-type">


<code>


SortSettings


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables sorting ([see example](https://www.telerik.com/kendo-react-ui/components/gantt/sorting)).


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


Sets custom styles for the Gantt component.

```jsx
<Gantt style={{ height: '500px' }} />
```



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


Provides task data for the Gantt chart. Tasks appear as visual bars in the timeline.

```jsx
const tasks = [{ id: 1, title: 'Task 1', start: new Date(), end: new Date() }];
<Gantt taskData={tasks} />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### taskModelFields?


</td>
<td type class="table-cell-type">


<code>


[GanttTaskModelFields]({% slug api_gantt_gantttaskmodelfields %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Maps field names for reading task data from your data source.

```jsx
const taskModelFields = { id: 'id', title: 'title', start: 'start', end: 'end' };
<Gantt taskModelFields={taskModelFields} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### timezone?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the timezone for displaying dates and times in the Gantt chart.
For example, `Europe/Sofia`.

```jsx
<Gantt timezone="Europe/Sofia" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### toolbar?


</td>
<td type class="table-cell-type">


<code>


{ addTaskButton: boolean; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the toolbar options. You can enable the add task button.

```jsx
<Gantt toolbar={{ addTaskButton: true }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### view?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls which view is currently shown. The value must match the `title` property of a view.

```jsx
<Gantt view="day" />
```



</td>
</tr>
</tbody>
</table>



