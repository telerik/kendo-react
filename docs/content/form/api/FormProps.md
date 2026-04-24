---
title: FormProps
description: "Learn how to build custom functionality when working with the React Form by Kendo UI with the help of the FormProps."
api_reference: true
type: inner_api
slug: api_form_formprops
---

# FormProps
Contains the props for the KendoReact Form component.


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


#### errors?


</td>
<td type class="table-cell-type">


<code>


{[name: string]: string}


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Validation errors that override field and form validators.

Provides validation errors directly as an object, unlike the validator prop which expects a callback.
When both validator and errors exist for a field, the errors prop takes precedence.

```jsx
const [errors, setErrors] = useState({});
const handleSubmit = async (data) => {
    const response = await submitToServer(data);
    if (response.errors) {
        setErrors(response.errors);
    }
};
<Form errors={errors} onSubmit={handleSubmit} render={props => <FormElement>form content</FormElement>} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### ignoreModified?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Allows the form to submit even when no fields have been modified.

```jsx
<Form ignoreModified={true} render={props => <form>form content </form>} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### initialValues?


</td>
<td type class="table-cell-type">


<code>


{[name: string]: any}


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the starting values for form fields.

Set initial values to prevent errors when switching from uncontrolled to controlled mode.

```jsx
const initialValues = { user: { name: '', age: 0 } };
<Form initialValues={initialValues} render={props => <form>form content</form>} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(fieldName: string, value: any, valueGetter: (name: string) => any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time any field value changes.

The third parameter `valueGetter` allows accessing other field values, useful for cross-field validation or clearing related errors.

```jsx
const handleChange = (fieldName, value, valueGetter) => {
    // For nested fields like 'user.name', access related fields like 'user.email'
    if (fieldName === 'user.name') {
        const email = valueGetter('user.email');
        console.log('Name changed:', value, 'Email is:', email);
    }
    // Clear error for the changed field
    if (formErrors[fieldName]) {
        setFormErrors(prev => ({ ...prev, [fieldName]: '' }));
    }
};
<Form errors={formErrors} onChange={handleChange} render={props => <FormElement>form content</FormElement>} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSubmit?


</td>
<td type class="table-cell-type">


<code>


(values: {[name: string]: any}, event?: SyntheticEvent&lt;any&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Handles form submission when validation passes and fields are modified.

Fires when at least one field is modified, the user clicks Submit, and validation passes.

```jsx
const handleSubmit = (values, event) => console.log(values);
<Form onSubmit={handleSubmit} render={props => <form> form content </form>} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSubmitClick?


</td>
<td type class="table-cell-type">


<code>


(event: [FormSubmitClickEvent]({% slug api_form_formsubmitclickevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Handles every submit button click, even when the form is invalid or unchanged.

Use this for advanced scenarios where you need to handle all submit events.

```jsx
const handleSubmitClick = event => console.log(event);
<Form onSubmitClick={handleSubmitClick} render={props => <form> form content </form>} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### render


</td>
<td type class="table-cell-type">


<code>


(props: [FormRenderProps]({% slug api_form_formrenderprops %})) => any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Renders the form content using the provided render function.

```jsx
const renderForm = props => <form> form content </form>;
<Form render={renderForm} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### validator?


</td>
<td type class="table-cell-type">


<code>


[FormValidatorType]({% slug api_form_formvalidatortype %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Validates the entire form and returns error messages.

Return a key-value pair where the key is the field path and the value is the error message.
You can validate nested fields like 'users[0].name'.
Only synchronous functions are supported.

```jsx
const validator = values => ({ user: { name: values.user.name ? "" : "Name is required." } });
<Form validator={validator} render={props => <form> form content </form>} />
```



</td>
</tr>
</tbody>
</table>



