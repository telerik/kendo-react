---
title: FormComponentValidity
description: "Learn how to build custom functionality when working with the React Date Inputs by Kendo UI with the help of the FormComponentValidity."
api_reference: true
type: inner_api
slug: api_dateinputs_formcomponentvalidity
---

# FormComponentValidity
Represents the `validity` state of the KendoReact form components.

For runnable examples on forms support, refer to the documentation of the respective form component:
* [DateInput](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/forms)
* [DatePicker](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/forms)
* [TimePicker](https://www.telerik.com/kendo-react-ui/components/dateinputs/timepicker/forms)
* [DateTimePicker](https://www.telerik.com/kendo-react-ui/components/dateinputs/timepicker/forms)
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


#### badInput?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates whether the user has provided input in the user interface element that the user agent is unable to convert.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### customError


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates whether the element has a custom error.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### patternMismatch?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates whether the value does not match the specified pattern.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rangeOverflow?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates whether the value is greater than the maximum specified by the max attribute.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rangeUnderflow?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates whether the value is less than the minimum specified by the min attribute.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### stepMismatch?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates whether the value does not fit the rules determined by the step attribute.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tooLong?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates whether the value exceeds the specified maxlength.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### tooShort?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates whether the value fails to meet the specified minlength.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### typeMismatch?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates whether the value is not in the correct syntax when type is email or url.


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


Indicates whether the element meets all constraint validations and is therefore considered valid.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### valueMissing


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicates whether the element has no value but is a required field.


</td>
</tr>
</tbody>
</table>



