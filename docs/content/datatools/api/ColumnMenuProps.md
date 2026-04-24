---
title: ColumnMenuProps
description: "Learn how to build custom functionality when working with the React Data Tools by Kendo UI with the help of the ColumnMenuProps."
api_reference: true
type: inner_api
slug: api_data-tools_columnmenuprops
---

# ColumnMenuProps
Defines the props of the ColumnMenu component.


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


#### expandFilters?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


Sets the initial expand state of the filters.





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


Sets the column `field` the menu operates on.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filter?


</td>
<td type class="table-cell-type">


<code>


CompositeFilterDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `CompositeFilterDescriptor[]` applied to the data.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterContent?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Provides the filtering UI components in render order. Supply up to three components: first filter, logic, second filter.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### initialFilter?


</td>
<td type class="table-cell-type">


<code>


(field: string) => CompositeFilterDescriptor


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Returns the initial `CompositeFilterDescriptor` based on the current `field`. Use to customize starting filter values.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### itemsRender?


</td>
<td type class="table-cell-type">


<code>


(defaultRendering: "null" | ReactElement&lt;HTMLDivElement&gt;[], props: { closeMenu: () => void; field?: string; }) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires before the ColumnMenu items render. Use to add or remove items.
`defaultRendering` holds sorting and filtering elements.
`props` exposes the column `field` and `closeMenu()` helper.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFilterChange?


</td>
<td type class="table-cell-type">


<code>


(event: SyntheticEvent&lt;any&gt;, filter: CompositeFilterDescriptor[], field: string) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when filtering changes. Receives the browser event, the new `CompositeFilterDescriptor[]`, and the column `field`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSortChange?


</td>
<td type class="table-cell-type">


<code>


(event: SyntheticEvent&lt;any&gt;, sort: SortDescriptor[], field: string) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when sorting changes. Receives the browser event, the new `SortDescriptor[]`, and the column `field`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### render?


</td>
<td type class="table-cell-type">


<code>


(defaultRendering: ReactElement&lt;any&gt;[]) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires before the ColumnMenu renders. Use to override the entire rendering.
`defaultRendering` contains the menu button and popup elements (and license watermark when present).


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


Sets the `SortDescriptor[]` applied to the data.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### sortAsc?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


Shows the ascending sort button when `true`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### sortDesc?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


Shows the descending sort button when `true`.





</td>
</tr>
</tbody>
</table>



