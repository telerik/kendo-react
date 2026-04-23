---
title: LegendLabels
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the LegendLabels."
api_reference: true
type: inner_api
slug: api_charts_legendlabels
---

# LegendLabels
The appearance configuration for the legend labels.


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


#### color?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The color of the legend label text. Accepts a valid [CSS `color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color) configuration string, including hex and rgb.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### content?


</td>
<td type class="table-cell-type">


<code>


(e: [LegendLabelsContentArgs]({% slug api_charts_legendlabelscontentargs %})) => string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function used to generate the content of each label.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### font?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The font of the legend label text. Accepts a valid [CSS `font`](https://developer.mozilla.org/en-US/docs/Web/CSS/font) configuration string.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### margin?


</td>
<td type class="table-cell-type">


<code>


number | [Margin]({% slug api_charts_margin %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The margin of the labels. A numeric value sets all margins.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### padding?


</td>
<td type class="table-cell-type">


<code>


number | [Padding]({% slug api_charts_padding %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The padding of the labels. A numeric value sets all paddings.


</td>
</tr>
</tbody>
</table>



