---
title: PivotGridAxesEditorProps
description: "Learn how to build custom functionality when working with the React PivotGrid by Kendo UI with the help of the PivotGridAxesEditorProps."
api_reference: true
type: inner_api
slug: api_pivotgrid_pivotgridaxeseditorprops
---

# PivotGridAxesEditorProps
Represents the props of the [KendoReact PivotGridAxesEditor component](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridaxeseditor).


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


#### chipList?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;ChipListProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `chipList` component.

The default component is: [KendoReactChipList](https://www.telerik.com/kendo-react-ui/components/buttons/api/chiplist).


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


Sets the `className` props of the ClipList component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### colSpan?


</td>
<td type class="table-cell-type">


<code>


number | ResponsiveFormBreakPoint[]


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


#### field


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates which of the three available axes are represented by the editor:
- columnAxes
- rowAxes
- measureAxes


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


FieldValidatorType | FieldValidatorType[]


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
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


[PivotGridAxis]({% slug api_pivotgrid_pivotgridaxis %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `value` of the AxesEditor.

The `value` is an array of [PivotGridAxis](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridaxis)


</td>
</tr>
</tbody>
</table>



