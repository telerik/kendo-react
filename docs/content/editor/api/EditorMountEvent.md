---
title: EditorMountEvent
description: "Learn how to build custom functionality when working with the React Editor by Kendo UI with the help of the EditorMountEvent."
api_reference: true
type: inner_api
slug: api_editor_editormountevent
---

# EditorMountEvent
Represents the object of the `onMount` Editor event.


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


#### dom


</td>
<td type class="table-cell-type">


<code>


HTMLDivElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The content-editable DOM element of the Editor.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### plugins


</td>
<td type class="table-cell-type">


<code>


Plugin&lt;any&gt;[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default plugins collection of the Editor.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### shortcuts


</td>
<td type class="table-cell-type">


<code>


Shortcuts


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default key bindings of the Editor.


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


#### viewProps


</td>
<td type class="table-cell-type">


<code>


{[key: string]: any}


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default [viewProps](https://prosemirror.net/docs/ref/#view.DirectEditorProps) object of the Editor.


</td>
</tr>
</tbody>
</table>



