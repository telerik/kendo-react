---
title: MapProps
description: "Learn how to build custom functionality when working with the React Map by Kendo UI with the help of the MapProps."
api_reference: true
type: inner_api
slug: api_map_mapprops
---

# MapProps
Represents the props of the KendoReact Map component.


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


#### center?


</td>
<td type class="table-cell-type">


<code>


number[] | [Location]({% slug api_map_location %}) | [number, number]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The map center. Coordinates are listed as `[Latitude, Longitude]`.


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

```jsx
<Map className="custom-map-class" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### controls?


</td>
<td type class="table-cell-type">


<code>


[MapControls]({% slug api_map_mapcontrols %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The configuration of built-in map controls.


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

```jsx
<Map dir="rtl" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### maxZoom?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


19


</code>


</td>
<td class="table-cell-comment">


The maximum zoom level. Typical web maps use zoom levels from 0 (whole world) to 19 (sub-meter features).





</td>
</tr>
<tr>
<td class="table-cell-name">


#### minSize?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


256


</code>


</td>
<td class="table-cell-comment">


The size of the map in pixels at zoom level 0.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### minZoom?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


1


</code>


</td>
<td class="table-cell-comment">


The minimum zoom level. Typical web maps use zoom levels from 0 (whole world) to 19 (sub-meter features).





</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBeforeReset?


</td>
<td type class="table-cell-type">


<code>


(event: [BeforeResetEvent]({% slug api_map_beforeresetevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires immediately before the map is reset. This event is typically used for cleanup by layer implementers.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMapClick?


</td>
<td type class="table-cell-type">


<code>


(event: [MapClickEvent]({% slug api_map_mapclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks on the map.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMarkerActivate?


</td>
<td type class="table-cell-type">


<code>


(event: [MarkerActivateEvent]({% slug api_map_markeractivateevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a marker has been displayed and has a DOM element assigned.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMarkerClick?


</td>
<td type class="table-cell-type">


<code>


(event: [MarkerClickEvent]({% slug api_map_markerclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a marker has been clicked or tapped.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMarkerCreated?


</td>
<td type class="table-cell-type">


<code>


(event: [MarkerCreatedEvent]({% slug api_map_markercreatedevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a marker has been created and is about to be displayed.

Cancelling the event prevents the marker from being shown.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPan?


</td>
<td type class="table-cell-type">


<code>


(event: [PanEvent]({% slug api_map_panevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires while the map viewport is being moved.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPanEnd?


</td>
<td type class="table-cell-type">


<code>


(event: [PanEndEvent]({% slug api_map_panendevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires after the map viewport has been moved.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRefresh?


</td>
<td type class="table-cell-type">


<code>


(mapOptions: any, mapInstance: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Map is about to refresh. You can use the event to prevent the refresh of the Map in specific cases.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onReset?


</td>
<td type class="table-cell-type">


<code>


(event: [ResetEvent]({% slug api_map_resetevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the map is reset.

This typically occurs on initial load and after a zoom/center change.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onShapeClick?


</td>
<td type class="table-cell-type">


<code>


(event: [ShapeClickEvent]({% slug api_map_shapeclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a shape is clicked or tapped.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onShapeCreated?


</td>
<td type class="table-cell-type">


<code>


(event: [ShapeCreatedEvent]({% slug api_map_shapecreatedevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a shape is created, but is not rendered yet.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onShapeFeatureCreated?


</td>
<td type class="table-cell-type">


<code>


(event: [ShapeFeatureCreatedEvent]({% slug api_map_shapefeaturecreatedevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a [GeoJSON Feature](https://geojson.org/geojson-spec.html#feature-objects) is created on a shape layer.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onShapeMouseEnter?


</td>
<td type class="table-cell-type">


<code>


(event: [ShapeMouseEnterEvent]({% slug api_map_shapemouseenterevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the mouse enters a shape.

> This event fires reliably only for shapes that have set fill color.
> The opacity can still be set to 0 so the shapes appear to have no fill.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onShapeMouseLeave?


</td>
<td type class="table-cell-type">


<code>


(event: [ShapeMouseLeaveEvent]({% slug api_map_shapemouseleaveevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the mouse leaves a shape.

> This event fires reliably only for shapes that have set fill color.
> The opacity can still be set to 0 so the shapes appear to have no fill.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onZoomEnd?


</td>
<td type class="table-cell-type">


<code>


(event: [ZoomEndEvent]({% slug api_map_zoomendevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the map zoom level has changed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onZoomStart?


</td>
<td type class="table-cell-type">


<code>


(event: [ZoomStartEvent]({% slug api_map_zoomstartevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the map zoom level is about to change.

Cancelling the event prevents the user action.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pannable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Controls whether the user can pan the map.





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

```jsx
<Map style={{ height: '500px' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### wraparound?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Specifies whether the map should wrap around the east-west edges.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### zoom?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


3


</code>


</td>
<td class="table-cell-comment">


The initial zoom level.

Typical web maps use zoom levels from 0 (whole world) to 19 (sub-meter features).
The map size is derived from the zoom level and minScale options: size = (2 ^ zoom) * minSize

> Map zoom rounds floating point numbers. This is done so as the majority of web maps use the whole [zoom levels](https://wiki.openstreetmap.org/wiki/Zoom_levels) 0 through to 19.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### zoomable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Controls whether the map zoom level can be changed by the user.





</td>
</tr>
</tbody>
</table>



