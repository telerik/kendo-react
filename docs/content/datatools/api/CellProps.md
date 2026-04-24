---
title: CellProps
description: "Learn how to build custom functionality when working with the React Data Tools by Kendo UI with the help of the CellProps."
api_reference: true
type: inner_api
slug: api_data-tools_cellprops
---

# CellProps



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


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: { dataItem: any; field?: string; syntheticEvent: SyntheticEvent&lt;any&gt;; value?: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the cell value changes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### render?


</td>
<td type class="table-cell-type">


<code>


(defaultRendering: "null" | ReactElement&lt;HTMLTableCellElement&gt;, props: [CellProps]({% slug api_data-tools_cellprops %})) => "null" | ReactElement&lt;HTMLTableCellElement&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default cell rendering.


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



