---
title: FieldProps
description: "Learn how to build custom functionality when working with the React Form by Kendo UI with the help of the FieldProps."
api_reference: true
type: inner_api
slug: api_form_fieldprops
---

# FieldProps
Contains the props for the Field component that you use inside forms.


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

```jsx
<Field name="user.name" component="input">
  <span>Additional content</span>
</Field>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### colSpan?


</td>
<td type class="table-cell-type">


<code>


number | [ResponsiveFormBreakPoint]({% slug api_form_responsiveformbreakpoint %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets how many columns the field spans in the form layout.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### component


</td>
<td type class="table-cell-type">


<code>


string | ComponentType&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Can be set to a React component or to the name of an HTML element,
for example, `input`, `select`, and `textarea`.
The props that are passed to the component are the
[`FieldRenderProps`](https://www.telerik.com/kendo-react-ui/components/form/api/fieldrenderprops).

```jsx
<Field name="user.name" component="input" />
```



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
You can use nested fields like `user.age` and `users[0].name`.

```jsx
<Field name="user.age" component="input" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Handles changes to the field value.

Use this to update related fields. The Form automatically updates its state when this fires.

```jsx
const handleChange = event => console.log(event);
<Field name="user.name" component="input" onChange={handleChange} />
```



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


Validates the field value and returns error messages.

Only synchronous functions are supported.
Use `useMemo` to avoid infinite loops when using an array of validators.

```jsx
const validator = value => value ? "" : "This field is required.";
<Field name="user.email" component="input" validator={validator} />
```



</td>
</tr>
</tbody>
</table>



