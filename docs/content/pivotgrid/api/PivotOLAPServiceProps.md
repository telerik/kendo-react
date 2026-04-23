---
title: PivotOLAPServiceProps
description: "Learn how to build custom functionality when working with the React PivotGrid by Kendo UI with the help of the PivotOLAPServiceProps."
api_reference: true
type: inner_api
slug: api_pivotgrid_pivotolapserviceprops
---

# PivotOLAPServiceProps
Represents the properties of the [PivotOLAPService](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotolapservice) component.


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


#### catalog


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The name of the catalog containing the cube.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### children


</td>
<td type class="table-cell-type">


<code>


(args: [PivotOLAPServiceState]({% slug api_pivotgrid_pivotolapservicestate %})) => any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A render prop function that receives the service state and returns JSX elements.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### cube


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The name of the cube to connect to.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultColumnAxes?


</td>
<td type class="table-cell-type">


<code>


[PivotGridAxis]({% slug api_pivotgrid_pivotgridaxis %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default configuration of the column axes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultFilter?


</td>
<td type class="table-cell-type">


<code>


FilterDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default filter descriptors.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultMeasureAxes?


</td>
<td type class="table-cell-type">


<code>


[PivotGridAxis]({% slug api_pivotgrid_pivotgridaxis %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default configuration of the measure axes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultRowAxes?


</td>
<td type class="table-cell-type">


<code>


[PivotGridAxis]({% slug api_pivotgrid_pivotgridaxis %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default configuration of the row axes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultSort?


</td>
<td type class="table-cell-type">


<code>


SortDescriptor[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default sort descriptors.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### url


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The URL of the OLAP service endpoint.


</td>
</tr>
</tbody>
</table>



