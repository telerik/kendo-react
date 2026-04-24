---
title: ChartCategoryAxisItemProps
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the ChartCategoryAxisItemProps."
api_reference: true
type: inner_api
slug: api_charts_chartcategoryaxisitemprops
---

# ChartCategoryAxisItemProps
Represents the props of the KendoReact ChartCategoryAxisItem component ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/axes#toc-categorical-chart-axes)).


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


#### autoBaseUnitSteps?


</td>
<td type class="table-cell-type">


<code>


[AutoBaseUnitSteps]({% slug api_charts_autobaseunitsteps %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The time-interval steps when `baseUnit` is set either to `"fit"` or `"auto"`. The axis will try to divide the active period into the smallest possible units that yield `maxDateGroups` or less discrete intervals.


</td>
</tr>
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


The category index or the date (for date category axis) at which the first value axis crosses this axis. The category indices or the date (for date category axis) at which the value axes cross the category axis (when set as an array). To denote the far end of the axis, set an index greater than or equal to the number of categories.


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


[CategoryBaseUnit]({% slug api_charts_categorybaseunit %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The base time interval for the date axis ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/axes#toc-selecting-time-intervals)). The default base unit is automatically determined by the minimum difference between subsequent categories.

The supported values are:
- `"fit"`
- `"milliseconds"`
- `"seconds"`
- `"minutes"`
- `"hours"`
- `"days"`
- `"weeks"`
- `"months"`
- `"years"`

Setting `baseUnit` to `"fit"` sets such a base unit and [`categoryAxis.baseUnitStep`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartcategoryaxisitemprops#toc-baseunitstep) that the total number of categories does not exceed [`categoryAxis.maxDateGroups`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartcategoryaxisitemprops#toc-maxdategroups).

Series data is aggregated for the specified base unit by using the [`series.aggregate`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-aggregate) function.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### baseUnitStep?


</td>
<td type class="table-cell-type">


<code>


number | "auto"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The step (interval) between the categories in base units ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/axes#toc-selecting-time-intervals)). Setting it to `"auto"` sets the step to such a value that the total number of categories does not exceed [`categoryAxis.maxDateGroups`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartcategoryaxisitemprops#toc-maxdategroups). The option is ignored if [`categoryAxis.baseUnit`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartcategoryaxisitemprops#toc-baseunit) is set to `"fit"`.


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


The category names. The Chart creates a category for every item of the array.


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


The color to apply to all axis elements. Accepts a valid CSS color string, including hex and rgb. Can be overridden by [`categoryAxis.labels.color`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartcategoryaxislabelsprops#toc-color) and [`categoryAxis.line.color`](https://www.telerik.com/kendo-react-ui/components/charts/api/axisline#toc-color).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### crosshair?


</td>
<td type class="table-cell-type">


<code>


CategoryAxisCrosshair


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration options of the crosshair. The crosshair is displayed when the [`categoryAxis.crosshair.visible`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartcategoryaxiscrosshairprops#toc-visible) option is set to `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### justified?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the Chart positions categories and series points on major ticks. This removes the empty space before and after the series. The default value is `false` except for `"area"`, `"verticalArea"`, `"rangeArea"`, and `"verticalRangeArea"`. The option is ignored if the [`series.type`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-type) option is set to `"bar"`, `"column"`, `"boxPlot"`, `"ohlc"`, `"candlestick"`, or `"waterfall"`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### labels?


</td>
<td type class="table-cell-type">


<code>


CategoryAxisLabels


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


The configuration of the category axis major ticks.


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


The last date displayed on a date category axis or the index of the last category displayed on a category axis ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/styling#toc-limiting-the-displayed-range)). By default, the max value is the same as the last category. This is often used in combination with the [`categoryAxis.min`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartcategoryaxisitemprops#toc-min) and [`categoryAxis.roundToBaseUnit`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartcategoryaxisitemprops#toc-roundtobaseunit) options to set up a fixed date range.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### maxDateGroups?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The maximum number of groups (categories) to display when [`categoryAxis.baseUnit`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartcategoryaxisitemprops#toc-baseunit) is set to `"fit"` or [`categoryAxis.baseUnitStep`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartcategoryaxisitemprops#toc-baseunitstep) is set to `"auto"`([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/axes#toc-selecting-time-intervals)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### maxDivisions?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The maximum number of ticks and labels to display. Applicabable for date category axis ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/axes#toc-limiting-the-number-of-labels)).


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


The first date which is displayed on a date category axis or the index of the first category which is displayed on a category axis ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/styling#toc-limiting-the-displayed-range)). By default, the min value is the same as the first category. This is often used in combination with the [`categoryAxis.max`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartcategoryaxisitemprops#toc-max) and [`categoryAxis.roundToBaseUnit`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartcategoryaxisitemprops#toc-roundtobaseunit) options to set up a fixed date range.


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


The configuration of the category axis minor ticks.


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


The unique axis name. Used to associate a series with a category axis, which utilizes the [`series.categoryAxis`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartseriesitemprops#toc-categoryaxis) option.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### notes?


</td>
<td type class="table-cell-type">


<code>


CategoryAxisNotes


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration of the category axis notes.


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


The name of the pane in which the category axis has to be rendered. If not set, the axis will be rendered in the first (default) pane.


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


The plot bands of the category axis.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rangeLabels?


</td>
<td type class="table-cell-type">


<code>


[CategoryAxisRangeLabels]({% slug api_charts_categoryaxisrangelabels %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration of the date axis date range labels.


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


If set to `true`, the category axis direction is reversed. By default, categories are listed from left to right and from bottom to top.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### roundToBaseUnit?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the Chart rounds the first and last date to the nearest base unit.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### select?


</td>
<td type class="table-cell-type">


<code>


CategoryAxisSelect


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The selected axis range ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/selection)). If set, the axis selection is enabled. The range is index-based, starting from zero. Categories with indexes in the range (`select.from`, `select.to`) will be selected. That is, the last category in the range will not be included in the selection. If the categories are dates, the range has to be also specified with date values. Selection is only supported if the axis is horizontal.v


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


CategoryAxisTitle


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The title configuration of the category axis. To display the title, set the [`categoryAxis.title.text`](https://www.telerik.com/kendo-react-ui/components/charts/api/chartcategoryaxistitleprops#toc-text) option.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### type?


</td>
<td type class="table-cell-type">


<code>


"date" | "category"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The category axis type.

The supported values are:
- `"category"`&mdash;Discrete category axis.
- `"date"`&mdash;Specialized axis for displaying chronological data.


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


If set to `true`, the Chart displays the category axis. By default, the category axis is visible.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### weekStartDay?


</td>
<td type class="table-cell-type">


<code>


[WeekStartDay]({% slug api_charts_weekstartday %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The week start day when the `baseUnit` is set to `"weeks"`.


</td>
</tr>
</tbody>
</table>



