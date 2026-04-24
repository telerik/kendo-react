---
title: LabelRotation
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the LabelRotation."
api_reference: true
type: inner_api
slug: api_charts_labelrotation
---

# LabelRotation
The rotation configuration for the axis labels.


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


#### align?


</td>
<td type class="table-cell-type">


<code>


"center" | "end"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The alignment of the rotated labels relative to the slot center.

The supported values are:
* `"end"`
* `"center"`

By default, the Charts align the closest end of the label to the center. If set to `"center"`, the center of the rotated label will be aligned instead.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### angle?


</td>
<td type class="table-cell-type">


<code>


number | "auto"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The rotation angle of the labels. By default, the labels are not rotated. Can be set to `"auto"`. In this case, the labels will be rotated only if the slot size is not sufficient for the entire labels.


</td>
</tr>
</tbody>
</table>



