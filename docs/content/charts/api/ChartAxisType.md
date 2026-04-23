---
title: ChartAxisType
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the ChartAxisType."
api_reference: true
type: inner_api
slug: api_charts_chartaxistype
---

# ChartAxisType
An interface for the Chart axes API.



## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### range


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the axis range.





</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


[AxisRange]({% slug api_charts_axisrange %})


</code>


</td>
<td>


- The axis range.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### slot


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns a slot that is based on the specified `from` and `to` values ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/plot-bands#toc-custom-plot-bands)).





</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


from


</td>
<td type>


<code>


string | number | Date


</code>


</td>
<td>


The slot start value.


</td>
</tr>
<tr>
<td>


to?


</td>
<td type>


<code>


string | number | Date


</code>


</td>
<td>


The end slot value. If not specified, the `from` value is used.


</td>
</tr>
<tr>
<td>


limit?


</td>
<td type>


<code>


boolean


</code>


</td>
<td>


The parameters for the exported image.


</td>
</tr>
</tbody>
</table>
</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


Rect | Arc


</code>


</td>
<td>


- Indicates whether the slot is limited to the current range.
By default, the range is limited.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### value


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the value that corresponds to the passed surface point.





</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


point


</td>
<td type>


<code>


Point


</code>


</td>
<td>


The surface point of the Chart.


</td>
</tr>
</tbody>
</table>
</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


string | number | Date


</code>


</td>
<td>


- The value that corresponds to the point.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### valueRange


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the axis range which is determined by the minimum and maximum point values that are associated with the axis.





</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


[AxisRange]({% slug api_charts_axisrange %})


</code>


</td>
<td>


- The value range.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>



