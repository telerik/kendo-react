---
title: EditorChangeEvent
description: "Learn how to build custom functionality when working with the React Editor by Kendo UI with the help of the EditorChangeEvent."
api_reference: true
type: inner_api
slug: api_editor_editorchangeevent
---

# EditorChangeEvent
Represents the object of the `onChange` Editor event.


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


#### html


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A getter of the Editor HTML content.
Once called, it will convert the Editor document into HTML string.
Note that, since onChange event is triggered on every key while typing,
this conversion may not be suitable if the Editor is dealing with large amount of content.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### schema


</td>
<td type class="table-cell-type">


<code>


Schema&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Editor Schema object.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### target


</td>
<td type class="table-cell-type">


<code>


[Editor]({% slug api_editor_editor %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An event target.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### transaction


</td>
<td type class="table-cell-type">


<code>


Transaction


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Transaction which causes the change.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


Node


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the [Editor document](https://prosemirror.net/docs/guide/#doc).


</td>
</tr>
</tbody>
</table>



