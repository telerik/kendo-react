---
title: GridSmartBoxSearchEvent
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridSmartBoxSearchEvent."
api_reference: true
type: inner_api
slug: api_grid_gridsmartboxsearchevent
---

# GridSmartBoxSearchEvent
Represents the event data passed when a search is performed.


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


The nested filter expressions&mdash;either [FilterDescriptor]({% slug api_kendo-data-query_filterdescriptor %}), or [CompositeFilterDescriptor]({% slug api_kendo-data-query_compositefilterdescriptor %}). Supports the same options as `filter`. You can nest filters indefinitely.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### isDefaultPrevented


</td>
<td type class="table-cell-type">


<code>


() => boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Returns whether the default action has been prevented.





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


The logical operation to use when the `filter.filters` option is set.

The supported values are:
* `"and"`
* `"or"`


</td>
</tr>
<tr>
<td class="table-cell-name">


#### preventDefault


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Prevents the default search action from being executed.
Use this to handle the search manually.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### searchValue


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The search value entered by the user.


</td>
</tr>
</tbody>
</table>



