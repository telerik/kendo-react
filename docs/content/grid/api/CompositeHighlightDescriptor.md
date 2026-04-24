---
title: CompositeHighlightDescriptor
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the CompositeHighlightDescriptor."
api_reference: true
type: inner_api
slug: api_grid_compositehighlightdescriptor
---

# CompositeHighlightDescriptor
Represents a composite highlight descriptor for a grid.
It contains a map of cell identifiers to their highlight status,
an array of filter descriptors, and the logical operator used to combine the filters.


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


#### cells


</td>
<td type class="table-cell-type">


<code>


{[key: string]: boolean}


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A map of cell identifiers to a boolean indicating whether the cell should be highlighted.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filters


</td>
<td type class="table-cell-type">


<code>


FilterDescriptor | CompositeFilterDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An array of filter descriptors representing the filters applied to the grid.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### logic


</td>
<td type class="table-cell-type">


<code>


"and" | "or"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The logical operator ('and' | 'or') used to combine the filters.


</td>
</tr>
</tbody>
</table>



