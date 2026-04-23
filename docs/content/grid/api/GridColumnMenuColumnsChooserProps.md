---
title: GridColumnMenuColumnsChooserProps
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridColumnMenuColumnsChooserProps."
api_reference: true
type: inner_api
slug: api_grid_gridcolumnmenucolumnschooserprops
---

# GridColumnMenuColumnsChooserProps
The props of the GridColumnMenuColumnsChooser component.


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


#### alwaysExpand?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, column chooser expand button will not be rendered and column chooser menu will be expanded.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### column


</td>
<td type class="table-cell-type">


<code>


[GridColumnMenuColumnProps]({% slug api_grid_gridcolumnmenucolumnprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current column options.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnsState?


</td>
<td type class="table-cell-type">


<code>


[GridColumnState]({% slug api_grid_gridcolumnstate %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The columns state of the KendoReact GridColumnMenuColumnsChooser component.


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


Controls the expand state of the column chooser component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCloseMenu?


</td>
<td type class="table-cell-type">


<code>


Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The method that will be called to close the column menu.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onColumnsStateChange?


</td>
<td type class="table-cell-type">


<code>


Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The method that will be called when the new columns state is applied.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExpandChange?


</td>
<td type class="table-cell-type">


<code>


(nextExpandState: boolean) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered on each subsequent expand state of the column chooser component.


</td>
</tr>
</tbody>
</table>



