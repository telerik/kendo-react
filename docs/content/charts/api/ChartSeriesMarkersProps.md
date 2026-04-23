---
title: ChartSeriesMarkersProps
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the ChartSeriesMarkersProps."
api_reference: true
type: inner_api
slug: api_charts_chartseriesmarkersprops
---

# ChartSeriesMarkersProps
Represents the props of the KendoReact ChartSeriesMarkers component.


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


The background color of the series markers.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### border?


</td>
<td type class="table-cell-type">


<code>


[Border]({% slug api_charts_border %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The border of the markers.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### borderRadius?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The border radius in pixels when `type` is set to `"roundedRect"`. Defaults to 1/5 of the marker size.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### from?


</td>
<td type class="table-cell-type">


<code>


SeriesMarkers


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Chart series marker configuration for the `from` point. Supported for the RangeArea and VerticalRangeArea series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rotation?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The rotation angle of the markers.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The marker size in pixels.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### to?


</td>
<td type class="table-cell-type">


<code>


SeriesMarkers


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Chart series marker configuration for the `to` point. Supported for the RangeArea and VerticalRangeArea series.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### type?


</td>
<td type class="table-cell-type">


<code>


[MarkerType]({% slug api_charts_markertype %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The shape of the series markers.

The supported values are:
* `"circle"`&mdash;The marker shape is a circle.
* `"square"`&mdash;The marker shape is a square.
* `"triangle"`&mdash;The marker shape is a triangle.
* `"cross"`&mdash;The marker shape is a cross.
* `"rect"`&mdash;An alias for "square".
* `"roundedRect"`&mdash;The marker shape is a rounded rectangle.


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


If set to `true`, the Chart displays the series markers. By default, the Chart series markers are displayed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### visual?


</td>
<td type class="table-cell-type">


<code>


(e: [MarkersVisualArgs]({% slug api_charts_markersvisualargs %})) => Element


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function for creating a custom visual for the markers.

The available argument fields are:
- `rect`&mdash;The [geometry Rect](https://www.telerik.com/kendo-react-ui/components/drawing/api/geometry/rect) that defines where the visual has to be rendered.
- `options`&mdash;The marker options.
- `createVisual`&mdash;A function that can be used to get the default visual.
- `category`&mdash;The category of the marker point.
- `dataItem`&mdash;The `dataItem` of the marker point.
- `value`&mdash;The value of the marker point.
- `sender`&mdash;The Chart instance.
- `series`&mdash;The series of the marker point.


</td>
</tr>
</tbody>
</table>



