---
title: GridColumnMenuFilterUIProps
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridColumnMenuFilterUIProps."
api_reference: true
type: inner_api
slug: api_grid_gridcolumnmenufilteruiprops
---

# GridColumnMenuFilterUIProps
The props that will be passed to the UI of the ColumnMenu filter component.


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


#### firstFilterProps


</td>
<td type class="table-cell-type">


<code>


[GridFilterCellProps]({% slug api_grid_gridfiltercellprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The options of the first filter.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### hideSecondFilter?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates if the second filter will be hidden.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### logicData


</td>
<td type class="table-cell-type">


<code>


[GridFilterOperator]({% slug api_grid_gridfilteroperator %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The list of the filter logic options.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### logicValue?


</td>
<td type class="table-cell-type">


<code>


[GridFilterOperator]({% slug api_grid_gridfilteroperator %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current value of the filter logic.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onLogicChange


</td>
<td type class="table-cell-type">


<code>


(e: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The method that will be called to notify the parent about a change in the filter logic.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### secondFilterProps


</td>
<td type class="table-cell-type">


<code>


[GridFilterCellProps]({% slug api_grid_gridfiltercellprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The options of the second filter.


</td>
</tr>
</tbody>
</table>



