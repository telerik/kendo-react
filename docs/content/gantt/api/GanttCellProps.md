---
title: GanttCellProps
description: "Learn how to build custom functionality when working with the React Gantt by Kendo UI with the help of the GanttCellProps."
api_reference: true
type: inner_api
slug: api_gantt_ganttcellprops
---

# GanttCellProps
Represents the props of the GanttCell component.


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


#### ariaColumnIndex


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The index applied to the `aria-colindex` attribute.


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


Custom CSS classes for the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### colIndex


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The index of the column. Useful for applying `aria-colindex` accessibility attribute.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### colSpan?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The column span of the cell.


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


The data item for the current row.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### expandable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the cell will render indentation based on its level prop and
the icons that are used for expanding and collapsing child rows.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### expanded?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the cell is expanded.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### field?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The data field that the cell binds to.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### format?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The format applied to the value before display.
Takes the `{0:format}` form where `format` is a standard number format, a custom number format,
a standard date format, or a custom date format.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### hasChildren?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates that the data item of the cell has subitems.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isAlt?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the cell is alt.


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


Indicates if the cell is selected.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isSorted?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the cell is sorted.


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


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: { dataItem: any; field?: string; level: number[]; syntheticEvent: SyntheticEvent&lt;any&gt;; value?: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the cell value is changed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExpandChange


</td>
<td type class="table-cell-type">


<code>


(event: MouseEvent&lt;HTMLSpanElement&gt;, dataItem: any, level: number[]) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The event that is fired when the expand or collapse icon of the cell is clicked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### render?


</td>
<td type class="table-cell-type">


<code>


(defaultRendering: "null" | ReactElement&lt;HTMLTableCellElement&gt;, props: [GanttCellProps]({% slug api_gantt_ganttcellprops %})) => "null" | ReactElement&lt;HTMLTableCellElement&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function for overriding the default rendering of the cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectionChange?


</td>
<td type class="table-cell-type">


<code>


(event: { syntheticEvent: SyntheticEvent&lt;any&gt;; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the cell is selected.


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


Inline styles for the cell.


</td>
</tr>
</tbody>
</table>



