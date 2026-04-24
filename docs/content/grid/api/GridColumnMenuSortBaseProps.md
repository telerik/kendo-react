---
title: GridColumnMenuSortBaseProps
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridColumnMenuSortBaseProps."
api_reference: true
type: inner_api
slug: api_grid_gridcolumnmenusortbaseprops
---

# GridColumnMenuSortBaseProps
The props passed to the ColumnMenu sort component.


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


#### onSortChange?


</td>
<td type class="table-cell-type">


<code>


(descriptors: SortDescriptor[], e: SyntheticEvent&lt;any&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The method that will be called to notify the parent Grid about a sort change.


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


The current sort state of the Grid. It takes a value of type [SortDescriptor](https://www.telerik.com/kendo-react-ui/components/datatools/api/sortdescriptor)[]


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


The sortable option of the column.


</td>
</tr>
</tbody>
</table>



