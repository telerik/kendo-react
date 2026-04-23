---
title: GridColumnMenuGroupBaseProps
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridColumnMenuGroupBaseProps."
api_reference: true
type: inner_api
slug: api_grid_gridcolumnmenugroupbaseprops
---

# GridColumnMenuGroupBaseProps
The props passed to the ColumnMenu group component.


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


#### group?


</td>
<td type class="table-cell-type">


<code>


GroupDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current group state of the Grid. It takes value of type [GroupDescriptor](https://www.telerik.com/kendo-react-ui/components/datatools/api/groupdescriptor)[]


</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The groupable option of the column.


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


#### onGroupChange?


</td>
<td type class="table-cell-type">


<code>


(groups: GroupDescriptor[], event: MouseEvent&lt;HTMLAnchorElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The method that will be called to notify the parent Grid about a group change.


</td>
</tr>
</tbody>
</table>



