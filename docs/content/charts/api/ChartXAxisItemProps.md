---
title: ChartXAxisItemProps
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the ChartXAxisItemProps."
api_reference: true
type: inner_api
slug: api_charts_chartxaxisitemprops
---

# ChartXAxisItemProps
Represents the props of the KendoReact ChartXAxisItem component ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/axes#toc-scatter-chart-axes)).


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


#### axisCrossingValue?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


* (Only for objects) The value at which the Y axis crosses this axis.
* (Only for arrays) The value indices at which the y axes cross the value axis.
* (Only for dates) The date at which the Y axis crosses this axis.

To denote the far end of the axis, set a value that is greater than or equal to the axis maximum value.


</td>
</tr>
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


#### baseUnit?


</td>
<td type class="table-cell-type">


<code>


[BaseUnit]({% slug api_charts_baseunit %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The base time interval for the axis labels. The default `baseUnit` is automatically determined from the value range.

The available options are:
- milliseconds
- seconds
- minutes
- hours
- days
- weeks
- months
- years


</td>
</tr>
<tr>
<td class="table-cell-name">


#### categories?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The category names. Applicable for charts with X and Y category axes.


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


The color of the axis. Accepts a valid CSS color string, including hex and rgb.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### crosshair?


</td>
<td type class="table-cell-type">


<code>


XAxisCrosshair


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration options of the crosshair. The crosshair is displayed when the [`xAxis.crosshair.visible`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartxaxiscrosshairprops#toc-visible) option is set to `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### labels?


</td>
<td type class="table-cell-type">


<code>


XAxisLabels


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The axis labels configuration.


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


The configuration of the Scatter Chart X-axis major ticks.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### majorUnit?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The interval between major divisions. If this is a date axis, the value represents the number of [`xAxis.baseUnits`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartxaxisitemprops#toc-baseunit) between major divisions. If [`xAxis.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartxaxisitemprops#toc-type) is set to `"log"`, the `majorUnit` value is used for the base of the logarithm.


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


The maximum value of the axis.


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


The minimum value of the axis.


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


The configuration of the X-axis minor ticks.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### minorUnit?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The interval between minor divisions. It defaults to 1/5 of the [`xAxis.majorUnit`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartxaxisitemprops#toc-majorunit). If [`xAxis.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartxaxisitemprops#toc-type) is set to `"log"`, the `minorUnit` value represents the number of divisions between two major units and defaults to the major unit minus one.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### name?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The unique axis name. Used to associate a series with a X axis by using the [`series.xAxis`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-xaxis) option.


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


If set to `true`, the Chart prevents the automatic axis range from snapping to zero. Setting it to `false` forces the automatic axis range to snap to zero.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### notes?


</td>
<td type class="table-cell-type">


<code>


XAxisNotes


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The X-axis notes configuration.


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


The name of the pane in which the axis has to be rendered. If not set, the axis is rendered in the first (default) pane.


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


The plot bands of the X axis.


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


If set to `true`, the value axis direction is reversed. By default, values increase from left to right and from bottom to top.


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


The angle (in degrees) where the zero value is placed. Angles increase counterclockwise and zero is to the right. Negative values are acceptable.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


XAxisTitle


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The title configuration of the Scatter Chart X axis. To display the title, set the [`xAxis.title.text`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartxaxistitleprops#toc-text) option.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### type?


</td>
<td type class="table-cell-type">


<code>


"date" | "log" | "numeric"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The axis type.

The supported values are:
- `"numeric"`&mdash;Numeric axis.
- `"date"`&mdash;Specialized axis for displaying chronological data.
- `"log"`&mdash;Logarithmic axis.

If the series X value is of the `date` type, the Chart automatically switches to a date axis. To avoid this behavior, set the `type`.


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


If set to `true`, the Chart displays the X axis. By default, the X axis is visible.


</td>
</tr>
</tbody>
</table>



