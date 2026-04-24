---
title: FormRenderProps
description: "Learn how to build custom functionality when working with the React Form by Kendo UI with the help of the FormRenderProps."
api_reference: true
type: inner_api
slug: api_form_formrenderprops
---

# FormRenderProps
Contains props that are passed to the form's render function.


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


#### allowSubmit


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Shows whether the form can be submitted.
When true and form is valid, you can submit. When true and form is invalid, you can show all validation errors.

Use this to control the disabled state of Submit buttons.

```jsx
console.log(props.allowSubmit);
```



</td>
</tr>
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


Contains current validation errors organized by field path.

```jsx
console.log(props.errors);
```



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


Shows whether any field value has changed from its initial value.
Becomes true when any field value changes for the first time.

```jsx
console.log(props.modified);
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange


</td>
<td type class="table-cell-type">


<code>


(name: string, options: { value: any; }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback for emitting changes to a specific field without using the Field component
([see example](https://www.telerik.com/kendo-react-ui/components/form/advanced-scenarios#toc-changing-the-field-value)).

> Use `onChange` only if you cannot achieve the desired behavior through the Field component.

```jsx
props.onChange("user.name", { value: "John Doe" });
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFormReset


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Resets the form to its initial state.

```jsx
<Button onClick={props.onFormReset}>Reset</Button>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSubmit


</td>
<td type class="table-cell-type">


<code>


(event: SyntheticEvent&lt;any&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Submits the form when called.
Use this with the onClick property of Submit buttons.

```jsx
const handleSubmit = event => console.log("Form submitted");
<Button onClick={props.onSubmit}>Submit</Button>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### submitted


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Shows whether the form has been successfully submitted.
Use this to detect if the user is leaving before saving changes.

```jsx
console.log(props.submitted);
```



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


Shows whether the user has interacted with any field.
Becomes true when any field loses focus or the user tries to submit.

```jsx
console.log(props.touched);
```



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


Shows whether the form passes all validation rules.
Becomes false if any field fails validation.

```jsx
console.log(props.valid);
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### valueGetter


</td>
<td type class="table-cell-type">


<code>


(name: string) => any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback for getting the value of a field without using the Field component
([see example](https://www.telerik.com/kendo-react-ui/components/form/advanced-scenarios#toc-reading-the-field-state)).
Useful for creating and modifying the UI based on the field values.

```jsx
const value = props.valueGetter("user.name");
console.log(value);
```



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


Shows whether the user has focused on any field.
Becomes true when any field receives focus or the user tries to submit.

```jsx
console.log(props.visited);
```



</td>
</tr>
</tbody>
</table>



