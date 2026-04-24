---
title: FormHandle
description: "Learn how to build custom functionality when working with the React Form by Kendo UI with the help of the FormHandle."
api_reference: true
type: inner_api
slug: api_form_formhandle
---

# FormHandle
Represent the `ref` of the Form component.


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


#### errors


</td>
<td type class="table-cell-type">


<code>


[KeyValue]({% slug api_form_keyvalue %})&lt;string&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">





</td>
</tr>
<tr>
<td class="table-cell-name">


#### fields


</td>
<td type class="table-cell-type">


<code>


string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">





</td>
</tr>
<tr>
<td class="table-cell-name">


#### formErrors


</td>
<td type class="table-cell-type">


<code>


undefined | [KeyValue]({% slug api_form_keyvalue %})&lt;string&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">





</td>
</tr>
<tr>
<td class="table-cell-name">


#### modified


</td>
<td type class="table-cell-type">


<code>


[KeyValue]({% slug api_form_keyvalue %})&lt;boolean&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">





</td>
</tr>
<tr>
<td class="table-cell-name">


#### props


</td>
<td type class="table-cell-type">


<code>


Readonly&lt;[FormProps]({% slug api_form_formprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the FormHandle component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### touched


</td>
<td type class="table-cell-type">


<code>


[KeyValue]({% slug api_form_keyvalue %})&lt;boolean&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">





</td>
</tr>
<tr>
<td class="table-cell-name">


#### validatorsByField


</td>
<td type class="table-cell-type">


<code>


[KeyValue]({% slug api_form_keyvalue %})&lt;undefined | [FieldValidatorType]({% slug api_form_fieldvalidatortype %}) | [FieldValidatorType]({% slug api_form_fieldvalidatortype %})[][]&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">





</td>
</tr>
<tr>
<td class="table-cell-name">


#### values


</td>
<td type class="table-cell-type">


<code>


[KeyValue]({% slug api_form_keyvalue %})&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">





</td>
</tr>
<tr>
<td class="table-cell-name">


#### visited


</td>
<td type class="table-cell-type">


<code>


[KeyValue]({% slug api_form_keyvalue %})&lt;boolean&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">





</td>
</tr>
</tbody>
</table>



## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### onChange


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Method for emiting changes to a specific field outside the form component.

> Use `onChange` only if you cannot achieve the desired behavior through the Field component by FormRenderProps.


</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


name


</td>
<td type>


<code>


string


</code>


</td>
<td>





</td>
</tr>
<tr>
<td>


options


</td>
<td type>


<code>


{ value: any; }


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>

</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### onReset


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Method for resetting the form state outside the form component.

> Use `onReset` only if you cannot achieve the desired behavior through the Field component or by FormRenderProps.


</td>
</tr>

</tbody>
</table>



