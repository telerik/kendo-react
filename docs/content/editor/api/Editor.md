---
title: Editor
description: "Learn how to build custom functionality when working with the React Editor by Kendo UI with the help of the Editor."
api_reference: true
type: inner_api
slug: api_editor_editor
---

# Editor
Represents the [KendoReact Editor component](https://www.telerik.com/kendo-react-ui/components/editor).

```jsx
const App = () => {
   return (
       <Editor
           defaultContent="<p>Hello World</p>"
           tools={[
              [ EditorTools.Bold, EditorTools.Italic ]
           ]}
       />
   );
}
```



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


#### contentElement


</td>
<td type class="table-cell-type">


<code>


"null" | HTMLDivElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Returns the content-editable DOM element of the Editor.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### element


</td>
<td type class="table-cell-type">


<code>


"null" | HTMLElement


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Returns the DOM element of the Editor.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### props


</td>
<td type class="table-cell-type">


<code>


Readonly&lt;[EditorProps]({% slug api_editor_editorprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the Editor component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


string | Node


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The value of the Editor.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### view


</td>
<td type class="table-cell-type">


<code>


undefined | EditorView


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Returns the `view` object of the Editor.


</td>
</tr>
</tbody>
</table>



