---
title: DiagramProps
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the DiagramProps."
api_reference: true
type: inner_api
slug: api_diagram_diagramprops
---

# DiagramProps
Represents the props of the [KendoReact Diagram component](https://www.telerik.com/kendo-react-ui/components/diagram).


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


#### ariaLabel?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `aria-label` attribute on the outermost wrapper element of the `Diagram`.


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


Sets additional CSS class names on the outermost wrapper element of the `Diagram`.

```tsx
<Diagram className="my-diagram" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### connectionDefaults?


</td>
<td type class="table-cell-type">


<code>


[ConnectionDefaults]({% slug api_diagram_connectiondefaults %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the default configuration options applicable to all connections.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### connectionModelFields?


</td>
<td type class="table-cell-type">


<code>


[ConnectionModelFields]({% slug api_diagram_connectionmodelfields %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the field mapping configuration for connections data binding.
Maps source object properties to `Diagram` connection properties.
Only used when `connections` is an array of custom objects instead of `ConnectionOptions`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### connections?


</td>
<td type class="table-cell-type">


<code>


[DiagramDataItem]({% slug api_diagram_diagramdataitem %})&lt;[ConnectionOptions]({% slug api_diagram_connectionoptions %})&gt;[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the connections that render between the shapes in the `Diagram`.
Accepts either an array of `ConnectionOptions` or an array of any objects
that will be mapped using the `connectionModelFields` configuration.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### editable?


</td>
<td type class="table-cell-type">


<code>


boolean | [DiagramEditable]({% slug api_diagram_diagrameditable %})


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


A set of settings to configure the `Diagram` behavior when the user attempts to drag, resize, or remove shapes.
Changing the property value dynamically triggers a reinitialization of the `Diagram`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### layout?


</td>
<td type class="table-cell-type">


<code>


[DiagramLayout]({% slug api_diagram_diagramlayout %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the layout configuration for arranging shapes and connections in the `Diagram`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### navigable?


</td>
<td type class="table-cell-type">


<code>


boolean | [DiagramNavigationOptions]({% slug api_diagram_diagramnavigationoptions %})


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Enables keyboard navigation in the `Diagram`.
When set to `true`, navigate between shapes using arrow keys.
Alternatively, pass a `DiagramNavigationOptions` object to customize navigation behavior.








</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [DiagramChangeEvent]({% slug api_diagram_diagramchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a shape or connection is created or removed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDiagramClick?


</td>
<td type class="table-cell-type">


<code>


(event: [DiagramDomEvent]({% slug api_diagram_diagramdomevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user clicks on a shape or a connection.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDrag?


</td>
<td type class="table-cell-type">


<code>


(event: [DiagramDragEvent]({% slug api_diagram_diagramdragevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user drags an item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDragEnd?


</td>
<td type class="table-cell-type">


<code>


(event: [DiagramDragEvent]({% slug api_diagram_diagramdragevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user stops dragging an item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDragStart?


</td>
<td type class="table-cell-type">


<code>


(event: [DiagramDragEvent]({% slug api_diagram_diagramdragevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user starts dragging an item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseEnter?


</td>
<td type class="table-cell-type">


<code>


(event: [DiagramDomEvent]({% slug api_diagram_diagramdomevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the mouse pointer enters a shape or connection.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseLeave?


</td>
<td type class="table-cell-type">


<code>


(event: [DiagramDomEvent]({% slug api_diagram_diagramdomevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the mouse pointer leaves a shape or connection.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPan?


</td>
<td type class="table-cell-type">


<code>


(event: [DiagramPanEvent]({% slug api_diagram_diagrampanevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user pans the `Diagram`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSelect?


</td>
<td type class="table-cell-type">


<code>


(event: [DiagramSelectEvent]({% slug api_diagram_diagramselectevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user selects one or more items.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onShapeBoundsChange?


</td>
<td type class="table-cell-type">


<code>


(event: [DiagramItemBoundsChangeEvent]({% slug api_diagram_diagramitemboundschangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the location or size of an item are changed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onTooltipHide?


</td>
<td type class="table-cell-type">


<code>


(item: [ShapeOptions]({% slug api_diagram_shapeoptions %}) | [ConnectionOptions]({% slug api_diagram_connectionoptions %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a tooltip should be hidden.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onTooltipShow?


</td>
<td type class="table-cell-type">


<code>


(item: [ShapeOptions]({% slug api_diagram_shapeoptions %}) | [ConnectionOptions]({% slug api_diagram_connectionoptions %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a tooltip should be shown for a shape or connection.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onZoomEnd?


</td>
<td type class="table-cell-type">


<code>


(event: [DiagramZoomEndEvent]({% slug api_diagram_diagramzoomendevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the `Diagram` has finished zooming out.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onZoomStart?


</td>
<td type class="table-cell-type">


<code>


(event: [DiagramZoomStartEvent]({% slug api_diagram_diagramzoomstartevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the `Diagram` starts zooming in or out.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pannable?


</td>
<td type class="table-cell-type">


<code>


boolean | [Pannable]({% slug api_diagram_pannable %})


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Defines the pannable options. Use this setting to disable `Diagram` pan or change the key that activates the pan behavior.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### role?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


'application'


</code>


</td>
<td class="table-cell-comment">


Sets the `role` attribute on the outermost wrapper element of the `Diagram`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectable?


</td>
<td type class="table-cell-type">


<code>


boolean | [Selectable]({% slug api_diagram_selectable %})


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Defines the `Diagram` selection options.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### shapeDefaults?


</td>
<td type class="table-cell-type">


<code>


[ShapeDefaults]({% slug api_diagram_shapedefaults %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the default configuration options applicable to all shapes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### shapeModelFields?


</td>
<td type class="table-cell-type">


<code>


[ShapeModelFields]({% slug api_diagram_shapemodelfields %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the field mapping configuration for shapes data binding.
Maps source object properties to `Diagram` shape properties.
Only used when `shapes` is an array of custom objects instead of `ShapeOptions`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### shapes?


</td>
<td type class="table-cell-type">


<code>


[DiagramDataItem]({% slug api_diagram_diagramdataitem %})&lt;[ShapeOptions]({% slug api_diagram_shapeoptions %})&gt;[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the shapes that render in the `Diagram`.
Accepts either an array of `ShapeOptions` or an array of any objects
that will be mapped using the `shapeModelFields` configuration.


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


Sets the inline styles for the outermost wrapper element of the `Diagram`.

```tsx
<Diagram style={{ height: 500 }} />
```



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


1


</code>


</td>
<td class="table-cell-comment">


Defines the zoom level of the `Diagram`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### zoomMax?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


2


</code>


</td>
<td class="table-cell-comment">


Defines the maximum zoom level of the `Diagram`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### zoomMin?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


0.1


</code>


</td>
<td class="table-cell-comment">


Defines the minimum zoom level of the `Diagram`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### zoomRate?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


0.1


</code>


</td>
<td class="table-cell-comment">


Defines the zoom rate of the `Diagram`.





</td>
</tr>
</tbody>
</table>



