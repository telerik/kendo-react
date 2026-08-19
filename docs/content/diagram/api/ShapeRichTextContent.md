---
title: ShapeRichTextContent
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the ShapeRichTextContent."
api_reference: true
type: inner_api
slug: api_diagram_shaperichtextcontent
---

# ShapeRichTextContent
Defines the rich text content of the shape.
Rich text content allows you to define multiple paragraphs with different styling and formatting, as well as include images and line breaks.


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


#### align?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The alignment of the text inside the shape.
You can do combinations between "top", "middle" and "bottom" for vertical align and "right", "center" and "left" for horizontal align. For example, "top right", "middle left", "bottom center", and so on.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### blocks?


</td>
<td type class="table-cell-type">


<code>


Paragraph[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the rich text content of the shape label.


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


The color of the shape content text.


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


<code>


"sans-serif"


</code>


</td>
<td class="table-cell-comment">


The font family of the shape content text.





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


<code>


15


</code>


</td>
<td class="table-cell-comment">


The font size in pixels of the shape content text.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### margin?


</td>
<td type class="table-cell-type">


<code>


number | ParagraphMargin


</code>


</td>
<td class="table-cell-default">


<code>


{ top: fontSize, bottom: fontSize }


</code>


</td>
<td class="table-cell-comment">


Defines the margin of the paragraphs in the shape content.
Defaults to the value of `fontSize` for the shape content.





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


0


</code>


</td>
<td class="table-cell-comment">


The padding of the shape content in pixels.





</td>
</tr>
</tbody>
</table>



