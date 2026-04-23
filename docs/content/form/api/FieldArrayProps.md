---
title: FieldArrayProps
description: "Learn how to build custom functionality when working with the React Form by Kendo UI with the help of the FieldArrayProps."
api_reference: true
type: inner_api
slug: api_form_fieldarrayprops
---

# FieldArrayProps
Contains the props for the FieldArray component that you use inside forms.


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


Provides child elements that are passed to the rendered component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### component


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Can be set to a React component.
[`FieldArrayRenderProps`](https://www.telerik.com/kendo-react-ui/components/form/api/fieldarrayrenderprops).


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


Sets the field name in the form state.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### validator?


</td>
<td type class="table-cell-type">


<code>


[FieldValidatorType]({% slug api_form_fieldvalidatortype %}) | [FieldValidatorType]({% slug api_form_fieldvalidatortype %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Validates the field array and returns error messages.
Only synchronous functions are supported.


</td>
</tr>
</tbody>
</table>



