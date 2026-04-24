---
title: Measure
description: "Learn how to build custom functionality when working with the React PivotGrid by Kendo UI with the help of the Measure."
api_reference: true
type: inner_api
slug: api_pivotgrid_measure
---

# Measure
Represents the PivotGrid measure object. Applicable for local data binding.

```ts
const sumMeasure = {
    name: 'Total Price',
    value: item => item.Price,
    aggregate: sumAggregate
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


#### aggregate


</td>
<td type class="table-cell-type">


<code>


[Aggregate]({% slug api_pivotgrid_aggregate %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The measure aggregate.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### name


</td>
<td type class="table-cell-type">


<code>


string | string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The name of the measure. Must be unique in the measures collection.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


(item: any) => any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function which returns the measuring value from the passed data item.





</td>
</tr>
</tbody>
</table>



