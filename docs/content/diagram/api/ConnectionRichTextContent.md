---
title: ConnectionRichTextContent
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the ConnectionRichTextContent."
api_reference: true
type: inner_api
slug: api_diagram_connectionrichtextcontent
---

# ConnectionRichTextContent
Defines the rich text content of a connection label.
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


Defines the rich text content of the connection label.


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


<code>


"sans-serif"


</code>


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


<code>


15


</code>


</td>
<td class="table-cell-comment">


The font size in pixels of the connection content text.





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


{ top: 0, bottom: 0 }


</code>


</td>
<td class="table-cell-comment">


Defines the top and bottom margin for the paragraphs in the connection label.





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



