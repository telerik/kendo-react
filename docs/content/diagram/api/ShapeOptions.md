---
title: ShapeOptions
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the ShapeOptions."
api_reference: true
type: inner_api
slug: api_diagram_shapeoptions
---

# ShapeOptions
Defines the configuration options for diagram shapes.
Extends the base shape options and adds tooltip support.


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


#### accessibility?


</td>
<td type class="table-cell-type">


<code>


AccessibilityOptions


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines accessibility options for the shape.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### center?


</td>
<td type class="table-cell-type">


<code>


[Coordinate]({% slug api_diagram_coordinate %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the center position of the shape.
Applicable for the circle shape.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### connectorDefaults?


</td>
<td type class="table-cell-type">


<code>


[ShapeConnectorDefaults]({% slug api_diagram_shapeconnectordefaults %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the default options for the shape connectors.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### connectors?


</td>
<td type class="table-cell-type">


<code>


[ShapeConnector]({% slug api_diagram_shapeconnector %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the connectors the shape owns.
A connector is the point in the shape where a connection between this shape and another one can originate from or end.
You can define your own custom connectors or use the predefined types.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### content?


</td>
<td type class="table-cell-type">


<code>


[ShapeContent]({% slug api_diagram_shapecontent %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the default shapes content settings.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### cornerRadius?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


0


</code>


</td>
<td class="table-cell-comment">


Defines the corner radius of the shape.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItem?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the shape dataItem.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### editable?


</td>
<td type class="table-cell-type">


<code>


boolean | [ShapeEditable]({% slug api_diagram_shapeeditable %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the shape editable options.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fill?


</td>
<td type class="table-cell-type">


<code>


string | [ShapeFill]({% slug api_diagram_shapefill %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the fill options of the shape.
Use these settings to apply a single-color or a gradient background to all shapes in the Diagram.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### height?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


100


</code>


</td>
<td class="table-cell-comment">


Defines the default height of shapes in the Diagram.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### hover?


</td>
<td type class="table-cell-type">


<code>


[ShapeHover]({% slug api_diagram_shapehover %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the hover configuration for the shape.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### id?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The unique identifier for a Shape.
The id value is used to identify shapes in connection configurations.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### minHeight?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


20


</code>


</td>
<td class="table-cell-comment">


Defines the minimum height the shape can have.
Use this setting to apply a lower limit to the height of shapes when users resize them.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### minWidth?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


20


</code>


</td>
<td class="table-cell-comment">


Defines the minimum width the shape can have.
Use this setting to apply a lower limit to the width of shapes when users resize them.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### path?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The path option of a Shape is a description of a custom geometry.
The format follows the standard SVG format.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### radius?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the radius of the shape.
Applicable for the circle shape.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rotation?


</td>
<td type class="table-cell-type">


<code>


[ShapeRotation]({% slug api_diagram_shaperotation %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the rotation of the shape.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectable?


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


Specifies if Diagram shapes can be selected.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### source?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The path/URL to the shape image. Applicable when the type is set to "image".


</td>
</tr>
<tr>
<td class="table-cell-name">


#### stroke?


</td>
<td type class="table-cell-type">


<code>


[Stroke]({% slug api_diagram_stroke %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the configuration of the border around Diagram shapes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tooltip?


</td>
<td type class="table-cell-type">


<code>


[TooltipOptions]({% slug api_diagram_tooltipoptions %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the tooltip that displays when you hover over the shape.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tooltipText?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the text content displayed in the tooltip.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### type?


</td>
<td type class="table-cell-type">


<code>


[ShapeType]({% slug api_diagram_shapetype %}) | [FlowchartShapeType]({% slug api_diagram_flowchartshapetype %})


</code>


</td>
<td class="table-cell-default">


<code>


"rectangle"


</code>


</td>
<td class="table-cell-comment">


Specifies the type of the Shape using any of the built-in shape type.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### visual?


</td>
<td type class="table-cell-type">


<code>


(data: any) => any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A function that returns a visual element to render for a given shape.


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


<code>


100


</code>


</td>
<td class="table-cell-comment">


Defines the default width of shapes in the Diagram.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### x?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


0


</code>


</td>
<td class="table-cell-comment">


Defines the x-coordinate of shapes added to the Diagram.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### y?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


0


</code>


</td>
<td class="table-cell-comment">


Defines the y-coordinate of shapes added to the Diagram.





</td>
</tr>
</tbody>
</table>



