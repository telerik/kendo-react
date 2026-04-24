---
title: ConnectionContent
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the ConnectionContent."
api_reference: true
type: inner_api
slug: api_diagram_connectioncontent
---

# ConnectionContent
Defines the label displayed on the connection path.


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


The background color of the connection label. Accepts valid CSS colors.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### border?


</td>
<td type class="table-cell-type">


<code>


[Stroke]({% slug api_diagram_stroke %})


</code>


</td>
<td class="table-cell-default">


<code>


null


</code>


</td>
<td class="table-cell-comment">


The border options of the connection label.





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


The color of the connection content text.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fontFamily?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The font family of the connection content text.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fontSize?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The font size of the connection content text.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fontStyle?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The font style of the connection content text.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fontWeight?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The font weight of the connection content text.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### offset?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


5


</code>


</td>
<td class="table-cell-comment">


Defines the distance (in pixels) between the label and the connection path.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### padding?


</td>
<td type class="table-cell-type">


<code>


number | Padding


</code>


</td>
<td class="table-cell-default">


<code>


{ left: 4, right: 4, top: 2, bottom: 2 }


</code>


</td>
<td class="table-cell-comment">


The padding options of the connection label. Applicable when background or border is set.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### position?


</td>
<td type class="table-cell-type">


<code>


"inline" | ConnectionLabelPosition


</code>


</td>
<td class="table-cell-default">


<code>


{ vertical: 'top', horizontal: 'right' }


</code>


</td>
<td class="table-cell-comment">


Defines the position of the label relative to the connection path.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### template?


</td>
<td type class="table-cell-type">


<code>


(data: any) => string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The template which renders the labels.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### text?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The static text displayed on the connection.


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


A function returning a visual element to render for the content of a connection.


</td>
</tr>
</tbody>
</table>



