---
title: Aggregate
description: "Learn how to build custom functionality when working with the React PivotGrid by Kendo UI with the help of the Aggregate."
api_reference: true
type: inner_api
slug: api_pivotgrid_aggregate
---

# Aggregate
Represents the PivotGrid aggregate object. Applicable for local data binding.

```ts
const sumAggregate: Aggregate = {
    init: (data) => { data.sum = ('sum' in data) ? data.sum : 0; },
    accumulate: (data, value) => { data.sum += value; },
    merge: (src, dest) => { dest.sum += src.sum; },
    result: data => data.sum,
    format: (value: number) => value.toFixed(2)
};
```



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


#### accumulate


</td>
<td type class="table-cell-type">


<code>


(data: any, value: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `accumulate` function will be called for every value that needs to be aggregated.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### format


</td>
<td type class="table-cell-type">


<code>


(value: any) => string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `format` function will be called when the value returned from the `result` function needs to be formatted.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### init


</td>
<td type class="table-cell-type">


<code>


(data: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `init` function initializes the variable where the aggregated data will be stored and returns it in the passed `data` object.
The `init` function will be called every time before calling `accumulate` and `merge` functions.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### merge


</td>
<td type class="table-cell-type">


<code>


(src: any, dest: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `merge` function will be called when two aggregated `data` objects needs to be merged into one.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### result


</td>
<td type class="table-cell-type">


<code>


(data: any) => any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The `result` function will be called when the aggregated value needs to be extracted from the `data` object.





</td>
</tr>
</tbody>
</table>



