---
title: FormComponentProps
description: "Learn how to build custom functionality when working with the React Common by Kendo UI with the help of the FormComponentProps."
api_reference: true
type: inner_api
slug: api_common_formcomponentprops
---

# FormComponentProps
Represents the basic props of the KendoReact form components.

For runnable examples on forms support, refer to the documentation of the respective form component:
* [DateInput](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/forms)
* [DatePicker](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/forms)
* [TimePicker](https://www.telerik.com/kendo-react-ui/components/dateinputs/timepicker/forms)
* [DateTimePicker](https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/forms)
* [AutoComplete](https://www.telerik.com/kendo-react-ui/components/dropdowns/autocomplete/forms)
* [ComboBox](https://www.telerik.com/kendo-react-ui/components/dropdowns/combobox/forms)
* [DropDownList](https://www.telerik.com/kendo-react-ui/components/dropdowns/dropdownlist/forms)
* [MultiSelect](https://www.telerik.com/kendo-react-ui/components/dropdowns/multiselect/forms)
* [Input](https://www.telerik.com/kendo-react-ui/components/inputs/input/forms)
* [MaskedTextBox](https://www.telerik.com/kendo-react-ui/components/inputs/maskedtextbox/forms)
* [NumericTextBox](https://www.telerik.com/kendo-react-ui/components/inputs/numerictextbox/forms)
* [Checkbox](https://www.telerik.com/kendo-react-ui/components/inputs/checkbox/forms-support)
* [Switch](https://www.telerik.com/kendo-react-ui/components/inputs/switch/forms-support)


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


#### name?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `name` property of the `input` DOM element.

This property is part of the [FormComponentProps](https://www.telerik.com/kendo-react-ui/components/common/api/formcomponentprops) interface.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### required?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if `null` is a valid value for the component.

This property is part of the [FormComponentProps](https://www.telerik.com/kendo-react-ui/components/common/api/formcomponentprops) interface.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### valid?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the validity state of the component.
If `valid` is set, the `required` property will be ignored.

This property is part of the [FormComponentProps](https://www.telerik.com/kendo-react-ui/components/common/api/formcomponentprops) interface.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### validationMessage?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls the form error message of the component. If set to an empty string, no error will be thrown.

This property is part of the [FormComponentProps](https://www.telerik.com/kendo-react-ui/components/common/api/formcomponentprops) interface.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### validityStyles?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `false`, no visual representation of the invalid state of the component will be applied.

This property is part of the [FormComponentProps](https://www.telerik.com/kendo-react-ui/components/common/api/formcomponentprops) interface.


</td>
</tr>
</tbody>
</table>



