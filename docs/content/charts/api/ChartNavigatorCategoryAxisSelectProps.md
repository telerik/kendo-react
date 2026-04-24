---
title: ChartNavigatorCategoryAxisSelectProps
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the ChartNavigatorCategoryAxisSelectProps."
api_reference: true
type: inner_api
slug: api_charts_chartnavigatorcategoryaxisselectprops
---

# ChartNavigatorCategoryAxisSelectProps
Represents the props of the KendoReact ChartNavigatorCategoryAxisSelect component.


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


#### from?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The lower boundary of the selected range.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### max?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The maximum value which the user can select.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### min?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The minimum value which the user can select.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### mousewheel?


</td>
<td type class="table-cell-type">


<code>


boolean | [MousewheelSelect]({% slug api_charts_mousewheelselect %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The mousewheel configuration of the selection. If set to `false`, the mousewheel does not update the selection.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### to?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The upper boundary of the selected range. The category with the specified index (date) is not included in the selected range unless the axis is justified. To select all categories, set a value that is larger than the last category index (date).


</td>
</tr>
</tbody>
</table>



