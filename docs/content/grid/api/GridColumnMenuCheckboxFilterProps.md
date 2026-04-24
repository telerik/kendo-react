---
title: GridColumnMenuCheckboxFilterProps
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridColumnMenuCheckboxFilterProps."
api_reference: true
type: inner_api
slug: api_grid_gridcolumnmenucheckboxfilterprops
---

# GridColumnMenuCheckboxFilterProps
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


If set to `true`, checkbox filter expand button will not be rendered and chechbox filter menu will be expanded.


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


#### data


</td>
<td type class="table-cell-type">


<code>


string | object[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the items collection that will be rendered by the GridColumnMenuCheckboxFilter component.


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
<tr>
<td class="table-cell-name">


#### searchBox?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the component that will be rendered as a search box.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### searchBoxFilterOperator?


</td>
<td type class="table-cell-type">


<code>


string | Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the filter operator that will be used to filter the values via the search box.
"startswith"
"endswith"
"contains"
"doesnotcontain"
"isempty"
"isnotempty"
"eq" (equal to)
"eq" (equal to)
"neq" (not equal to)
"isnull" (is equal to null)
"isnotnull" (is not equal to null)


</td>
</tr>
<tr>
<td class="table-cell-name">


#### uniqueData?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if the data in the component will be unique. By default the property is set to true.


</td>
</tr>
</tbody>
</table>



