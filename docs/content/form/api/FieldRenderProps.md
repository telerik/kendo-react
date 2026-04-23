---
title: FieldRenderProps
description: "Learn how to build custom functionality when working with the React Form by Kendo UI with the help of the FieldRenderProps."
api_reference: true
type: inner_api
slug: api_form_fieldrenderprops
---

# FieldRenderProps
Contains props that are passed to components rendered inside Field components.


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


Represents the children that are passed to the Field.


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


Indicates if the field is modified.
The modified state is set to `true` when the `onChange` callback for the current field is called for first time.


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


The name of the field in the Form state.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback you have to call when the rendered component is blurred.
Responsible for setting the touched state of the Field.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange


</td>
<td type class="table-cell-type">


<code>


(event: { target?: any; value?: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback you have to call when the value of the rendered component is changed
([see example](https://www.telerik.com/kendo-react-ui/components/form/advanced-scenarios#toc-changing-the-field-value)).
The `value` property of the event takes precedence over `target.value`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback you have to call when the rendered component is focused.
Responsible for setting the visited state of the Field.


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


Indicates if the field is touched.
The touched state is set to `true` when the `onBlur` callback is called.


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


A calculated property based on whether `validationMessage` is present and the `touched` state is set to `true`.


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


Represents the error message that is returned by the validator.
The Field is considered valid if the `validationMessage` field is empty.


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


Represents the current value of the Field
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


Indicates if the field is visited.
The visited state is set to `true` when the `onFocus` callback is called.


</td>
</tr>
</tbody>
</table>



