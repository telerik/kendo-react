---
title: ChartAxisDefaultsProps
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the ChartAxisDefaultsProps."
api_reference: true
type: inner_api
slug: api_charts_chartaxisdefaultsprops
---

# ChartAxisDefaultsProps
Represents the props of the KendoReact ChartAxisDefaults component ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/axes#toc-default-axis-configuration)).


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


#### background?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The background color of the axis.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### children?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The child components of the ChartAxisDefaults. Supported child components are: ChartAxisDefaultsCrosshair, ChartAxisDefaultsLabels, ChartAxisDefaultsTitle.


</td>
</tr>
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


The color to apply to all axis elements. Accepts a valid CSS color string, including hex and rgb.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### crosshair?


</td>
<td type class="table-cell-type">


<code>


AxisDefaultsCrosshair


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The crosshair configuration options. The crosshair is displayed when the [`axisDefaults.crosshair.visible`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartaxisdefaultscrosshairprops#toc-visible) option is set to `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### labels?


</td>
<td type class="table-cell-type">


<code>


AxisDefaultsLabels


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration of the axis labels.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### line?


</td>
<td type class="table-cell-type">


<code>


[AxisLine]({% slug api_charts_axisline %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration of the axis lines. Also affects the major and minor ticks, but not the grid lines.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### majorGridLines?


</td>
<td type class="table-cell-type">


<code>


[GridLines]({% slug api_charts_gridlines %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration of the major grid lines. These are the lines that are an extension of the major ticks through the body of the Chart.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### majorTicks?


</td>
<td type class="table-cell-type">


<code>


[AxisTicks]({% slug api_charts_axisticks %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration of the axis major ticks.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### minorGridLines?


</td>
<td type class="table-cell-type">


<code>


[GridLines]({% slug api_charts_gridlines %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration of the minor grid lines. These are the lines that are an extension of the minor ticks through the body of the Chart.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### minorTicks?


</td>
<td type class="table-cell-type">


<code>


[AxisTicks]({% slug api_charts_axisticks %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration of the axis minor ticks.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### narrowRange?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the Chart prevents the axis range from snapping to zero. Setting it to `false`, forces the axis range to snap to zero.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pane?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The name of the pane in which the axis has to be rendered. If not set, the axis will be rendered in the first (default) pane.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### plotBands?


</td>
<td type class="table-cell-type">


<code>


[PlotBand]({% slug api_charts_plotband %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The plot bands of the axis.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### reverse?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the axis direction is reversed. By default, categories are listed from left to right and from bottom to top.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startAngle?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The angle (degrees) of the first category on the axis. Angles increase clockwise with zero to the left. Negative values are acceptable.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


AxisDefaultsTitle


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The title configuration of the axis. To display the title, set the [`axisDefaults.title.text`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartaxisdefaultstitleprops#toc-text) option.


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


If set to `true`, the Chart displays the axis. By default, the axis is visible.


</td>
</tr>
</tbody>
</table>



