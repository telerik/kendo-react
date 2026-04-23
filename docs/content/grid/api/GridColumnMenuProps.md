---
title: GridColumnMenuProps
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridColumnMenuProps."
api_reference: true
type: inner_api
slug: api_grid_gridcolumnmenuprops
---

# GridColumnMenuProps
The props which the ColumnMenu passes to its children.


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


#### filter?


</td>
<td type class="table-cell-type">


<code>


CompositeFilterDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The current filter state of the Grid.It takes value of type [CompositeFilterDescriptor](https://www.telerik.com/kendo-react-ui/components/datatools/api/compositefilterdescriptor)


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The filterable option of the column.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterOperators


</td>
<td type class="table-cell-type">


<code>


[GridFilterOperators]({% slug api_grid_gridfilteroperators %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The filter operators for the Grid filters.


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


#### navigatable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if the column menu supports keyboard navigation.


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


#### onFilterChange?


</td>
<td type class="table-cell-type">


<code>


(filter: "null" | CompositeFilterDescriptor, syntheticEvent: SyntheticEvent&lt;any&gt;) => any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The method that will be called to notify the parent Grid about a filter change.


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


#### show?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if the column menu is visible.


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



