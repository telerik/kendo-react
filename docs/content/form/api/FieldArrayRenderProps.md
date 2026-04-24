---
title: FieldArrayRenderProps
description: "Learn how to build custom functionality when working with the React Form by Kendo UI with the help of the FieldArrayRenderProps."
api_reference: true
type: inner_api
slug: api_form_fieldarrayrenderprops
---

# FieldArrayRenderProps
Contains props that are passed to components rendered inside FieldArray components.


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


#### children


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Contains child elements that are passed to the FieldArray.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### modified


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Shows whether the field value has changed from its initial value.
Becomes true when the field value changes for the first time.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### name


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Contains the field name in the form state.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onInsert


</td>
<td type class="table-cell-type">


<code>


(options: { index: number; value: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Inserts a value at a specific position in the array.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMove


</td>
<td type class="table-cell-type">


<code>


(options: { nextIndex: number; prevIndex: number; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Moves a value from one position to another in the array.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPop


</td>
<td type class="table-cell-type">


<code>


() => any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Removes and returns the last value from the array.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPush


</td>
<td type class="table-cell-type">


<code>


(options: { value: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Adds a value to the end of the array.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRemove


</td>
<td type class="table-cell-type">


<code>


(options: { index: number; }) => any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Removes a value at a specific position in the array.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onReplace


</td>
<td type class="table-cell-type">


<code>


(options: { index: number; value: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Replaces a value at a specific position in the array.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onUnshift


</td>
<td type class="table-cell-type">


<code>


(options: { value: any; }) => number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Adds a value to the beginning of the array.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### touched


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Shows whether the user has interacted with the field.
Becomes true when the field loses focus.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### valid


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Shows whether the field passes validation and has been touched.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### validationMessage


</td>
<td type class="table-cell-type">


<code>


"null" | string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Contains the error message from validation.
The field is valid when this is empty.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the current value of the FieldArray
([see example](https://www.telerik.com/kendo-react-ui/components/form/custom-components#toc-using-basic-properties)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### visited


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Shows whether the user has focused on the field.
Becomes true when the field receives focus.


</td>
</tr>
</tbody>
</table>



