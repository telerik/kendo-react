---
title: ConnectionDefaults
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the ConnectionDefaults."
api_reference: true
type: inner_api
slug: api_diagram_connectiondefaults
---

# ConnectionDefaults
Defines the default configuration options for all connections in the `Diagram`.
These settings apply to connections unless overridden by individual connection options.


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


Defines accessibility options for the connection.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### content?


</td>
<td type class="table-cell-type">


<code>


[ConnectionContent]({% slug api_diagram_connectioncontent %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the label displayed on the connection path.


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


Defines the corner radius of the connection.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### editable?


</td>
<td type class="table-cell-type">


<code>


boolean | [ConnectionDefaultsEditable]({% slug api_diagram_connectiondefaultseditable %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the editing behavior of the connections.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endCap?


</td>
<td type class="table-cell-type">


<code>


string | [ConnectionCap]({% slug api_diagram_connectioncap %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The connections end cap configuration.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fromConnector?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the name of the source shape connector that should be used by default.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### hover?


</td>
<td type class="table-cell-type">


<code>


{ stroke?: { color?: string; }; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the default styling that is applied when the user hovers over a connection.


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




</td>
<td class="table-cell-comment">


Specifies if connections can be selected.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selection?


</td>
<td type class="table-cell-type">


<code>


{ handles?: { fill?: string | { color?: string; }; height?: number; stroke?: { color?: string; }; width?: number; }; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the connections selection configuration.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startCap?


</td>
<td type class="table-cell-type">


<code>


string | [ConnectionCap]({% slug api_diagram_connectioncap %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The connection start cap configuration or type name.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### stroke?


</td>
<td type class="table-cell-type">


<code>


string | [Stroke]({% slug api_diagram_stroke %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the connection line configuration.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### toConnector?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the name of the target shape connector that should be used by default.


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


Configures the default tooltip settings for all connections.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### type?


</td>
<td type class="table-cell-type">


<code>


"polyline" | "cascading"


</code>


</td>
<td class="table-cell-default">


<code>


"cascading"


</code>


</td>
<td class="table-cell-comment">


Specifies the connections type. The supported values are:
- "polyline": connects the defined intermediate points.
- "cascading": discards given points and defines a cascading path between the endpoints.





</td>
</tr>
</tbody>
</table>



