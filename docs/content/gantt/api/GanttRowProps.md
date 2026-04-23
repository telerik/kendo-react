---
title: GanttRowProps
description: "Learn how to build custom functionality when working with the React Gantt by Kendo UI with the help of the GanttRowProps."
api_reference: true
type: inner_api
slug: api_gantt_ganttrowprops
---

# GanttRowProps
The props that the Gantt passes to the GanttRow component when creating it.


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


#### ariaPosInSet?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The index of the item on current level, applied to the `aria-posinset` attribute.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaRowIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The index to be applied to the `aria-rowindex` attribute.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaSetSize?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The count of items on current level, applied to the `aria-setsize` attribute.


</td>
</tr>
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


The `data` object that represents the current row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### expanded


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The expanded state of the row. Useful for applying `aria-expanded` accessibility attribute.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isSelected


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the row is selected.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### level


</td>
<td type class="table-cell-type">


<code>


number[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An array of indexes of each parent and current item in the data tree.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClick?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the row is clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onContextMenu?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the row context menu is triggered.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDoubleClick?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the row is double clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDrag?


</td>
<td type class="table-cell-type">


<code>


(event: { dragged: number[]; draggedItem: any; draggedOver: "null" | number[]; nativeEvent: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a row is dragged.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDrop?


</td>
<td type class="table-cell-type">


<code>


(event: { dragged: number[]; draggedItem: any; draggedOver: "null" | number[]; nativeEvent: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a row is dragged and dropped.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### render?


</td>
<td type class="table-cell-type">


<code>


(row: ReactElement&lt;HTMLTableRowElement&gt;, props: [GanttRowProps]({% slug api_gantt_ganttrowprops %})) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function for overriding the default rendering of the row.


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




</td>
<td class="table-cell-comment">


Sets the height of the row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowIndex


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The index of the row. Useful for applying `aria-rowindex` accessibility attribute.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectedField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The name of the field which will provide a Boolean representation of the selected state of the item.


</td>
</tr>
</tbody>
</table>



