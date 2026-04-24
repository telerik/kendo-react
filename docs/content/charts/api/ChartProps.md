---
title: ChartProps
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the ChartProps."
api_reference: true
type: inner_api
slug: api_charts_chartprops
---

# ChartProps
Represents the props of the KendoReact Chart component.


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


#### axisDefaults?


</td>
<td type class="table-cell-type">


<code>


AxisDefaults


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


This option allows to override the default axis options.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### className?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets additional CSS classes to the component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dir?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `dir` HTML attribute.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### donutCenterRender?


</td>
<td type class="table-cell-type">


<code>


() => ReactElement&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


When set, the prop is used to render the Donut Center template.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### drilldownState?


</td>
<td type class="table-cell-type">


<code>


[ChartDrilldownState]({% slug api_charts_chartdrilldownstate %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Gets or sets the current drill-down state for [Drilldown Charts](https://www.telerik.com/kendo-react-ui/components/charts/drill-down).

To return to a previous level, remove the items from the `steps` array following the desired level.
To return to the root chart, set the `steps` array to `[]`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onAxisLabelClick?


</td>
<td type class="table-cell-type">


<code>


(event: [AxisLabelClickEvent]({% slug api_charts_axislabelclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks an axis label.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDrag?


</td>
<td type class="table-cell-type">


<code>


(event: [DragEvent]({% slug api_charts_dragevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires as long as the user is dragging the Chart with the mouse or through swipe gestures.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDragEnd?


</td>
<td type class="table-cell-type">


<code>


(event: [DragEndEvent]({% slug api_charts_dragendevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user stops dragging the Chart.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDragStart?


</td>
<td type class="table-cell-type">


<code>


(event: [DragStartEvent]({% slug api_charts_dragstartevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user starts dragging the Chart.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDrilldown?


</td>
<td type class="table-cell-type">


<code>


(event: [DrilldownEvent]({% slug api_charts_drilldownevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user when the user wants to drill down on a specific point.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onLegendItemClick?


</td>
<td type class="table-cell-type">


<code>


(event: [LegendItemClickEvent]({% slug api_charts_legenditemclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks a legend item ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/legend#toc-clicking-legend-items)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onLegendItemHover?


</td>
<td type class="table-cell-type">


<code>


(event: [LegendItemHoverEvent]({% slug api_charts_legenditemhoverevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user hovers over a legend item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onNoteClick?


</td>
<td type class="table-cell-type">


<code>


(event: [NoteClickEvent]({% slug api_charts_noteclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks a note.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onNoteHover?


</td>
<td type class="table-cell-type">


<code>


(event: [NoteHoverEvent]({% slug api_charts_notehoverevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user hovers over a note.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPlotAreaClick?


</td>
<td type class="table-cell-type">


<code>


(event: [PlotAreaClickEvent]({% slug api_charts_plotareaclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks the plot area. The `click` event is triggered by the `tap` and `contextmenu` events. To distinguish between the original events, inspect the `e.originalEvent.type` field.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPlotAreaHover?


</td>
<td type class="table-cell-type">


<code>


(event: [PlotAreaHoverEvent]({% slug api_charts_plotareahoverevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user hovers the plot area ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/crosshairs#toc-current-cursor-values)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRefresh?


</td>
<td type class="table-cell-type">


<code>


(chartOptions: any, themeOptions: any, chartInstance: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Chart is about to refresh. The event can be used to prevent the refresh of the Chart in specific cases ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/chart-refresh).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRender?


</td>
<td type class="table-cell-type">


<code>


(event: [RenderEvent]({% slug api_charts_renderevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Chart is ready to render on screen ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/plot-bands#toc-custom-plot-bands)). For example, you can use it to remove loading indicators. Any changes made to the options are ignored.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSelect?


</td>
<td type class="table-cell-type">


<code>


(event: [SelectEvent]({% slug api_charts_selectevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user modifies the selection.

The range units are:
- Generic axis&mdash;Category index (0-based).
- Date axis&mdash;Date instance.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSelectEnd?


</td>
<td type class="table-cell-type">


<code>


(event: [SelectEndEvent]({% slug api_charts_selectendevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user completes the modification of the selection ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/elements/selection#toc-using-selection-as-navigator)).

The range units are:
- Generic axis&mdash;Category index (0-based).
- Date axis&mdash;Date instance.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSelectStart?


</td>
<td type class="table-cell-type">


<code>


(event: [SelectStartEvent]({% slug api_charts_selectstartevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user starts modifying the axis selection.

The range units are:
- Generic axis&mdash;Category index (0-based).
- Date axis&mdash;Date instance.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSeriesClick?


</td>
<td type class="table-cell-type">


<code>


(event: [SeriesClickEvent]({% slug api_charts_seriesclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks the Chart series.

The `click` event will be triggered by the `tap` and `contextmenu` events. To distinguish between the original events, inspect the `e.originalEvent.type` field.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSeriesHover?


</td>
<td type class="table-cell-type">


<code>


(event: [SeriesHoverEvent]({% slug api_charts_serieshoverevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user hovers over the Chart series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onZoom?


</td>
<td type class="table-cell-type">


<code>


(event: [ZoomEvent]({% slug api_charts_zoomevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires as long as the user is zooming the Chart by using the mousewheel operation.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onZoomEnd?


</td>
<td type class="table-cell-type">


<code>


(event: [ZoomEndEvent]({% slug api_charts_zoomendevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user stops zooming the Chart.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onZoomStart?


</td>
<td type class="table-cell-type">


<code>


(event: [ZoomStartEvent]({% slug api_charts_zoomstartevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user uses the mousewheel to zoom the Chart.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### paneDefaults?


</td>
<td type class="table-cell-type">


<code>


[PaneDefaults]({% slug api_charts_panedefaults %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


This option allows to override the default pane options.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### panes?


</td>
<td type class="table-cell-type">


<code>


Pane[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The chart panes configuration.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pannable?


</td>
<td type class="table-cell-type">


<code>


boolean | [DragAction]({% slug api_charts_dragaction %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the Chart can be panned ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/pan-zoom)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### renderAs?


</td>
<td type class="table-cell-type">


<code>


"canvas" | "svg"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the preferred rendering engine ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/rendering)). If not supported by the browser, the Chart switches to the first available mode.

The supported values are:
- `"svg"`&mdash;If available, renders the component as an inline `.svg` file.
- `"canvas"`&mdash;If available, renders the component as a `canvas` element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### seriesColors?


</td>
<td type class="table-cell-type">


<code>


string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default colors for the Chart series. When all colors are used, new colors are pulled from the start again.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### seriesDefaults?


</td>
<td type class="table-cell-type">


<code>


SeriesDefaults


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


This option allows to override the default series options.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### style?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The styles that are applied to the component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### transitions?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the Chart plays animations when it displays the series. By default, animations are enabled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### zoomable?


</td>
<td type class="table-cell-type">


<code>


boolean | Zoomable


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the Chart can be zoomed ([see example](https://www.telerik.com/kendo-react-ui/components/charts/chart/pan-zoom)). Currently is only applicable to linear types, where the range on the X axis can be changed based on the zoom level.


</td>
</tr>
</tbody>
</table>



