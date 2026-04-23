---
title: GridColumnMenuFilterProps
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridColumnMenuFilterProps."
api_reference: true
type: inner_api
slug: api_grid_gridcolumnmenufilterprops
---

# GridColumnMenuFilterProps
The props of the GridColumnMenuFilter component.


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


If set to `true`, filter expand button will not be rendered and filter menu will be expanded.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### children?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The child elements to be rendered inside the filter component.


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


Controls the expand state of the filter component.


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


#### filterUI?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[GridColumnMenuFilterUIProps]({% slug api_grid_gridcolumnmenufilteruiprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies a React element that will be cloned and rendered inside the UI of the column-menu filter component
([see example](https://www.telerik.com/kendo-react-ui/components/grid/columns/column-menu#toc-customizing-the-filter-component)).


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


If set to `false`, the second filter operator and the input will be hidden.


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


Triggered on each subsequent expand state of the filter component.


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
</tbody>
</table>



