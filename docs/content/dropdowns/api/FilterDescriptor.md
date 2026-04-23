---
title: FilterDescriptor
description: "Learn how to build custom functionality when working with the React Dropdowns by Kendo UI with the help of the FilterDescriptor."
api_reference: true
type: inner_api
slug: api_dropdowns_filterdescriptor
---

# FilterDescriptor
A basic filter expression. Usually a part of [`CompositeFilterDescriptor`](https://www.telerik.com/kendo-react-ui/components/datatools/api/compositefilterdescriptor).

For more information, refer to the [`filterBy`](https://www.telerik.com/kendo-react-ui/components/datatools/api/filterby) method.


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


#### field?


</td>
<td type class="table-cell-type">


<code>


string | Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The field of the data item to which the filter operator is applied.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### ignoreCase?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if the string comparison is case-insensitive.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### operator


</td>
<td type class="table-cell-type">


<code>


string | Function


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The filter operator (comparison).

The supported operators are:
* `"eq"` (equal to)
* `"neq"` (not equal to)
* `"isnull"` (is equal to null)
* `"isnotnull"` (is not equal to null)
* `"lt"` (less than)
* `"lte"` (less than or equal to)
* `"gt"` (greater than)
* `"gte"` (greater than or equal to)

The following operators are supported for string fields only:
* `"startswith"`
* `"endswith"`
* `"contains"`
* `"doesnotcontain"`
* `"isempty"`
* `"isnotempty"`


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The value to which the field is compared. Has to be of the same type as the field.


</td>
</tr>
</tbody>
</table>



