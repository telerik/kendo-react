---
title: OrgChartOperationDescriptors
description: "Learn how to build custom functionality when working with the React OrgChart by Kendo UI with the help of the OrgChartOperationDescriptors."
api_reference: true
type: inner_api
slug: api_orgchart_orgchartoperationdescriptors
---

# OrgChartOperationDescriptors
The descriptors of the data operations which are applied to the OrgChart component.


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


#### check?


</td>
<td type class="table-cell-type">


<code>


string[] | [OrgChartCheckDescriptor]({% slug api_orgchart_orgchartcheckdescriptor %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the hierarchical indices of the items to which the check operation applies, or the descriptor of the operation.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### checkField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The check field of the item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### childrenField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The children field of the item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### cloneField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


When the operations are applied, the corresponding items and their parents are cloned.
For performance reasons, OrgChart items are cloned only once.
The name of the field which provides a Boolean representation of whether an item is already cloned.
Defaults to `cloned`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### expand?


</td>
<td type class="table-cell-type">


<code>


[OrgChartOperationDescriptor]({% slug api_orgchart_orgchartoperationdescriptor %}) | string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The hierarchical indices of the items to which the expand operation will be applied, or the descriptor of the operation.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### expandField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The expand field of the item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### select?


</td>
<td type class="table-cell-type">


<code>


[OrgChartOperationDescriptor]({% slug api_orgchart_orgchartoperationdescriptor %}) | string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The hierarchical indices of the items to which the select operation will be applied, or the descriptor of the operation.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The select field of the item.


</td>
</tr>
</tbody>
</table>



