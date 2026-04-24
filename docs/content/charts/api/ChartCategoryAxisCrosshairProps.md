---
title: ChartCategoryAxisCrosshairProps
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the ChartCategoryAxisCrosshairProps."
api_reference: true
type: inner_api
slug: api_charts_chartcategoryaxiscrosshairprops
---

# ChartCategoryAxisCrosshairProps
Represents the props of the KendoReact ChartCategoryAxisCrosshair component.


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


The color of the crosshair. Accepts a valid CSS color string, including hex and rgb.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dashType?


</td>
<td type class="table-cell-type">


<code>


[DashType]({% slug api_charts_dashtype %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The dash type of the crosshair.

The following dash types are supported:
- `"dash"`&mdash;A line consisting of dashes.
- `"dashDot"`&mdash;A line consisting of a repeating pattern of dash-dot.
- `"dot"`&mdash;A line consisting of dots.
- `"longDash"`&mdash;A line consisting of a repeating pattern of long-dash.
- `"longDashDot"`&mdash;A line consisting of a repeating pattern of long-dash-dot.
- `"longDashDotDot"`&mdash;A line consisting of a repeating pattern of long-dash-dot-dot.
- `"solid"`&mdash;A solid line.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### opacity?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The opacity of the crosshair. By default, the crosshair is opaque.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tooltip?


</td>
<td type class="table-cell-type">


<code>


CategoryAxisCrosshairTooltip


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The options of the crosshair tooltip. The crosshair tooltip is displayed when the [`categoryAxis.crosshair.tooltip.visible`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartcategoryaxiscrosshairtooltipprops#toc-visible) option is set to `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### visible?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the Chart displays the category axis crosshair. By default, the category axis crosshair is not visible.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### width?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The width of the crosshair in pixels.


</td>
</tr>
</tbody>
</table>



