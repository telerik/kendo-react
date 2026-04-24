---
title: GridFilterCellProps
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridFilterCellProps."
api_reference: true
type: inner_api
slug: api_grid_gridfiltercellprops
---

# GridFilterCellProps
The props of the GridFilterCell component
([more information](https://www.telerik.com/kendo-react-ui/components/grid/cells#toc-filter-cells)
and [example](https://www.telerik.com/kendo-react-ui/components/grid/filtering#toc-custom-filter-cells)).


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


#### ariaLabel?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Accessible label of the filter.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### booleanValues


</td>
<td type class="table-cell-type">


<code>


[GridFilterOperator]({% slug api_grid_gridfilteroperator %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The list of values for the Boolean filter.


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


The column field in which the cell is located.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterType


</td>
<td type class="table-cell-type">


<code>


"boolean" | "text" | "date" | "numeric"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The type of the filter. Determines which editor will be rendered for filtering.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange


</td>
<td type class="table-cell-type">


<code>


(event: { operator: string | Function; syntheticEvent: SyntheticEvent&lt;any&gt;; value: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The method that will be called if the cell needs to inform its parent Grid about a change.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### operator?


</td>
<td type class="table-cell-type">


<code>


string | Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The operator that will be used for the cell filtering.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### operators


</td>
<td type class="table-cell-type">


<code>


[GridFilterOperator]({% slug api_grid_gridfilteroperator %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The list of the default operators for the current filter type.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large"


</code>


</td>
<td class="table-cell-default">


<code>


`medium`


</code>


</td>
<td class="table-cell-comment">


Configures the `size` of the cell.

The available options are:
- small
- medium
- large
- null&mdash;Does not set a size `className`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The title which will be set to the input element in the filter cell.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The value of the cell.


</td>
</tr>
</tbody>
</table>



