---
title: SchedulerFormEditorProps
description: "Learn how to build custom functionality when working with the React Scheduler by Kendo UI with the help of the SchedulerFormEditorProps."
api_reference: true
type: inner_api
slug: api_scheduler_schedulerformeditorprops
---

# SchedulerFormEditorProps
Represents the props of the KendoReact `SchedulerFormEditor` component.


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


#### allDayEditor?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;TargetlessChangeEvent&lt;CheckboxProps [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with FieldProps&gt;&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `allDay` field editor.
The [KendoReact Checkbox](https://www.telerik.com/kendo-react-ui/components/inputs/checkbox) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### allDayLabel?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;LabelProps [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with FieldProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `allDay` field label.
The [KendoReact Label](https://www.telerik.com/kendo-react-ui/components/labels/label) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


</td>
</tr>
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


#### descriptionEditor?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;TargetlessChangeEvent&lt;TextAreaProps [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with FieldProps&gt;&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `description` field editor.
The [KendoReact TextArea](https://www.telerik.com/kendo-react-ui/components/inputs/textarea) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### descriptionError?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;ErrorProps [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with FieldProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `description` field error.
The [KendoReact Error](https://www.telerik.com/kendo-react-ui/components/labels/error) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### descriptionLabel?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;LabelProps [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with FieldProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `description` field label.
The [KendoReact Label](https://www.telerik.com/kendo-react-ui/components/labels/label) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endEditor?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;TargetlessChangeEvent&lt;Omit&lt;DatePickerProps | DateTimePickerProps&gt; [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with { as?: ComponentType&lt;DatePickerProps | DateTimePickerProps&gt;; onChange?: (args: { value: "null" | Date; }) => void; onClose?: (args: DatePickerCloseEvent | DateTimePickerCloseEvent) => void; onOpen?: (args: DatePickerOpenEvent | DateTimePickerOpenEvent) => void; } [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with FieldProps&gt;&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `end` field editor.
The [KendoReact DatePicker](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker) or [KendoReact DateTimePicker](https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker) component is used by default depending on the `allDay` field value.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endError?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;ErrorProps [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with FieldProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `end` field error.
The [KendoReact Error](https://www.telerik.com/kendo-react-ui/components/labels/error) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endLabel?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;LabelProps [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with FieldProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `end` field label.
The [KendoReact Label](https://www.telerik.com/kendo-react-ui/components/labels/label) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endTimezoneCheckedEditor?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;TargetlessChangeEvent&lt;CheckboxProps&gt;&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `end timezone checked` editor.
The [KendoReact Checkbox](https://www.telerik.com/kendo-react-ui/components/inputs/checkbox) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endTimezoneCheckedLabel?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;LabelProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `start timezone checked` label.
The [KendoReact Label](https://www.telerik.com/kendo-react-ui/components/labels/label) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endTimezoneEditor?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;TargetlessChangeEvent&lt;ComboBoxProps&gt;&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `end timezone` field editor.
An extended [KendoReact ComboBox](https://www.telerik.com/kendo-react-ui/components/dropdowns/combobox) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endTimezoneError?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;ErrorProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `end timezone` field error.
The [KendoReact Error](https://www.telerik.com/kendo-react-ui/components/labels/error) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endTimezoneLabel?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;LabelProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `end timezone` field label.
The [KendoReact Label](https://www.telerik.com/kendo-react-ui/components/labels/label) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


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


Specifies the `id` attribute of the root element.


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


#### recurrenceEditor?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;TargetlessChangeEvent&lt;FieldProps&gt;&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `recurrenceRule` field editor.
A custom made RecurrenceEditor component is used, by default.

> We're planing on releasing the `RecurrenceEditor` as a standalone component in the future.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### resourceEditor?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;TargetlessChangeEvent&lt;Object&gt;&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing each `resource` field editor.
An extended KendoReact [MultiSelect](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect) or [DropDownList](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdownlist) component is used by default, depending on the `multiple` field of each individual `resource`.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### resourceLabel?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;LabelProps [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with FieldProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `start timezone checked` field label.
The [KendoReact Label](https://www.telerik.com/kendo-react-ui/components/labels/label) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### resourcesError?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;ErrorProps [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with FieldProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing each `resources` field error.
The [KendoReact Error](https://www.telerik.com/kendo-react-ui/components/labels/error) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startEditor?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;TargetlessChangeEvent&lt;Omit&lt;DatePickerProps | DateTimePickerProps&gt; [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with { as?: ComponentType&lt;DatePickerProps | DateTimePickerProps&gt;; onChange?: (args: { value: "null" | Date; }) => void; onClose?: (args: DatePickerCloseEvent | DateTimePickerCloseEvent) => void; onOpen?: (args: DatePickerOpenEvent | DateTimePickerOpenEvent) => void; } [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with FieldProps&gt;&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `start` field editor.
The [KendoReact DatePicker](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker) or [KendoReact DateTimePicker](https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker) component is used by default depending on the `allDay` field value.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startError?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;ErrorProps [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with FieldProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `start` field error.
The [KendoReact Error](https://www.telerik.com/kendo-react-ui/components/labels/error) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startLabel?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;LabelProps [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with FieldProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `start` field label.
The [KendoReact Label](https://www.telerik.com/kendo-react-ui/components/labels/label) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startTimezoneCheckedEditor?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;TargetlessChangeEvent&lt;CheckboxProps&gt;&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `start timezone checked` editor.
The [KendoReact Checkbox](https://www.telerik.com/kendo-react-ui/components/inputs/checkbox) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startTimezoneCheckedLabel?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;LabelProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `start timezone checked` label.
The [KendoReact Label](https://www.telerik.com/kendo-react-ui/components/labels/label) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startTimezoneEditor?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;TargetlessChangeEvent&lt;ComboBoxProps [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with FieldProps&gt;&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `start timezone` field editor.
An extended [KendoReact ComboBox](https://www.telerik.com/kendo-react-ui/components/dropdowns/combobox) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startTimezoneError?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;ErrorProps [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with FieldProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `start timezone` field error.
The [KendoReact Error](https://www.telerik.com/kendo-react-ui/components/labels/error) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startTimezoneLabel?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;LabelProps [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with FieldProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `start timezone` field label.
The [KendoReact Label](https://www.telerik.com/kendo-react-ui/components/labels/label) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


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


#### tabIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `tabIndex` attribute of the root element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### titleEditor?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;TargetlessChangeEvent&lt;InputProps [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with FieldProps&gt;&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `title` field editor.
The [KendoReact Input](https://www.telerik.com/kendo-react-ui/components/inputs/input) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### titleError?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;LabelProps [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with FieldProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `title` field error.
The [KendoReact Error](https://www.telerik.com/kendo-react-ui/components/labels/error) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### titleLabel?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;LabelProps [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with FieldProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the component used for visualizing the `title` field label.
The [KendoReact Label](https://www.telerik.com/kendo-react-ui/components/labels/label) component is used, by default.

For more information, please refer to the [`Scheduler Form Editor Customization`](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/form/editor) article.


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



