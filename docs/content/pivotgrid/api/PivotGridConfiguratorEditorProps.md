---
title: PivotGridConfiguratorEditorProps
description: "Learn how to build custom functionality when working with the React PivotGrid by Kendo UI with the help of the PivotGridConfiguratorEditorProps."
api_reference: true
type: inner_api
slug: api_pivotgrid_pivotgridconfiguratoreditorprops
---

# PivotGridConfiguratorEditorProps
Represents the props of the [KendoReact PivotGridConfiguratorEditor component](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridconfiguratoreditor).


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


#### columnAxesEditor?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;[PivotGridAxesEditorProps]({% slug api_pivotgrid_pivotgridaxeseditorprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `columnAxesEditor` component.

The default component is: [PivotGridAxesEditor](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridaxeseditor).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnAxesLabel?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;FieldProps [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with LabelProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `columnAxesLabel` component.

The default component is: [KendoReactLabel](https://www.telerik.com/kendo-react-ui/components/labels/api/label).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### data


</td>
<td type class="table-cell-type">


<code>


PivotGridField[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `data` of the PivotGridConfiguratorEditor.

The `data` represents all fields available in the configurator.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### errors


</td>
<td type class="table-cell-type">


<code>


KeyValue&lt;string&gt;


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


#### fieldsEditor?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;[PivotGridFieldsEditorProps]({% slug api_pivotgrid_pivotgridfieldseditorprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `fieldsEditor` component.

The default component is: [PivotGridFieldsEditor](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridfieldseditor).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fieldsLabel?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;FieldProps [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with LabelProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `fieldsLabel` component.

The default component is: [KendoReactLabel](https://www.telerik.com/kendo-react-ui/components/labels/api/label).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### horizontal?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


Renders the PivotGridConfiguratorEditor in `horizontal` orientation.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### measureAxesEditor?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;[PivotGridAxesEditorProps]({% slug api_pivotgrid_pivotgridaxeseditorprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `measureAxesEditor` component.

The default component is: [PivotGridAxesEditor](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridaxeseditor).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### measureAxesLabel?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;FieldProps [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with LabelProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `measureAxesLabel` component.

The default component is: [KendoReactLabel](https://www.telerik.com/kendo-react-ui/components/labels/api/label).


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


#### onAxisFilterFieldExpand?


</td>
<td type class="table-cell-type">


<code>


(event: [PivotGridAxisFilterFieldExpandEvent]({% slug api_pivotgrid_pivotgridaxisfilterfieldexpandevent %}) [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with { currentTarget: [PivotGridConfiguratorEditorHandle]({% slug api_pivotgrid_pivotgridconfiguratoreditorhandle %}); }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback, fired whenever an `AxisFilterField` is expanded.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onAxisFilterFieldsExpandChange?


</td>
<td type class="table-cell-type">


<code>


(event: [PivotGridAxisFilterFieldsExpandChangeEvent]({% slug api_pivotgrid_pivotgridaxisfilterfieldsexpandchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback, fired whenever `expanded` state of the AxisFilterFields is changed.


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


#### onFieldsEditorFieldCheck?


</td>
<td type class="table-cell-type">


<code>


(event: PivotGridFieldsEditorFieldCheckEvent [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with { currentTarget: [PivotGridConfiguratorEditorHandle]({% slug api_pivotgrid_pivotgridconfiguratoreditorhandle %}); }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback, fired whenever a `FieldEditorField` is checked.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFieldsEditorFieldExpand?


</td>
<td type class="table-cell-type">


<code>


(event: PivotGridFieldsEditorFieldExpandEvent [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with { currentTarget: [PivotGridConfiguratorEditorHandle]({% slug api_pivotgrid_pivotgridconfiguratoreditorhandle %}); }) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A callback, fired whenever a `FieldEditorField` is expanded.


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


#### rowAxesEditor?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;[PivotGridAxesEditorProps]({% slug api_pivotgrid_pivotgridaxeseditorprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `rowAxesEditor` component.

The default component is: [PivotGridAxesEditor](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridaxeseditor).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rowAxesLabel?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;FieldProps [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with LabelProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `rowAxesLabel` component.

The default component is: [KendoReactLabel](https://www.telerik.com/kendo-react-ui/components/labels/api/label).


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



