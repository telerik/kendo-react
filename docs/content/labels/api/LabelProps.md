---
title: LabelProps
description: "Learn how to build custom functionality when working with the React Labels by Kendo UI with the help of the LabelProps."
api_reference: true
type: inner_api
slug: api_labels_labelprops
---

# LabelProps
Represents the props of the KendoReact Label component.


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


#### children?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The text that will be rendered inside the label element.
Can be omitted for editors without label to keep form layout.


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


Sets a class of the Label DOM element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### editorDisabled?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the editor is disabled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### editorId?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The id of the editor.
Represent the [`htmlFor`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement/htmlFor) property, which will be set to the `label` element.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### editorRef?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An optional React ref to the editor.
Used to redirect the click event to the editor when it does not contain native form element.
To be able to work, the editor should have `focus` method or `actionElement` prop on it's ref.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### editorValid?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the validity of the editor. Used to define the editor is invalid.


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


Represents the id of the label element.
The value should be set to the editor `ariaLabelledBy` property.
Can be used when the editor is not containing native form element.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### optional?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If enabled marks the label as optional.


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


The styles that are applied to the Label.


</td>
</tr>
</tbody>
</table>



