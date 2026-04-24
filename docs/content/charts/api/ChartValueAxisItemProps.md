---
title: ChartValueAxisItemProps
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the ChartValueAxisItemProps."
api_reference: true
type: inner_api
slug: api_charts_chartvalueaxisitemprops
---

# ChartValueAxisItemProps
Represents the props of the KendoReact ChartValueAxisItem component ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/axes#toc-categorical-chart-axes)).


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


* (Only for objects) The value at which the category axis crosses this axis.
* (Only for arrays) The value indices at which the category axes cross the value axis.
* (Only for dates) The date at which the category axis crosses this axis.


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


The color of the value axis. Accepts a valid CSS color string, including hex and rgb.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### crosshair?


</td>
<td type class="table-cell-type">


<code>


ValueAxisCrosshair


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The crosshair configuration options.

The crosshair is displayed when the [`valueAxis.crosshair.visible`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartvalueaxiscrosshairprops#toc-visible) option is set to `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### labels?


</td>
<td type class="table-cell-type">


<code>


ValueAxisLabels


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


The configuration of the value axis major ticks.


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


The interval between major divisions. If [`valueAxis.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartvalueaxisitemprops#toc-type) is set to `"log"`, the `majorUnit` value is used for the base of the logarithm.


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


The configuration of the value axis minor ticks.


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


The interval between minor divisions. It defaults to one-fifth (1/5) of the [`valueAxis.majorUnit`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartvalueaxisitemprops#toc-majorunit). If [`valueAxis.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartvalueaxisitemprops#toc-type) is set to `"log"`, the `minorUnit` value represents the number of divisions between two major units and defaults to the major unit minus one.


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


The unique axis name. Used to associate a series with a value axis by using the [`series.axis`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-axis) option.


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


ValueAxisNotes


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The value axis notes configuration.


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


The name of the pane that the value axis has to be rendered in. If not set, the axis is rendered in the first (default) pane.


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


The plot bands of the value axis.


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


If set to `true`, the value axis direction is reversed. By default, the categories are listed from left to right and from bottom to top.

> Radar and Polar Charts do not support reverse value axes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


ValueAxisTitle


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The title configuration of the value axis.

To display the title, set the [`valueAxis.title.text`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartvalueaxistitleprops#toc-text) option.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### type?


</td>
<td type class="table-cell-type">


<code>


"log" | "numeric"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The axis type.

The supported values are:
- `"numeric"`&mdash;Numeric axis.
- `"log"`&mdash;Logarithmic axis.


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


If set to `true`, the Chart displays the value axis. By default, the value axis is visible.


</td>
</tr>
</tbody>
</table>



