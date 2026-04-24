---
title: DateRangePickerProps
description: "Learn how to build custom functionality when working with the React Date Inputs by Kendo UI with the help of the DateRangePickerProps."
api_reference: true
type: inner_api
slug: api_dateinputs_daterangepickerprops
---

# DateRangePickerProps
Represents the props of the [KendoReact DateRangePicker component](https://www.telerik.com/kendo-react-ui/components/dateinputs/daterangepicker).


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


#### adaptive?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


`false`


</code>


</td>
<td class="table-cell-comment">


/**
 * Enable adaptive popup rendering based on viewport width.
 *
 *





</td>
</tr>
<tr>
<td class="table-cell-name">


#### adaptiveSubtitle?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


/**
 * Set the subtitle text in the adaptive popup (action sheet).
 * Use only when `adaptive` is `true`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### adaptiveTitle?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


/**
 * Set the title text in the adaptive popup (action sheet).
 * Use only when `adaptive` is `true`.
 * If not set, it matches the `label`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### allowReverse?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If `allowReverse` is set to `true`, the component skips the validation of whether the `from` value is after the `to` value ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/daterangepicker/reverse)).

> If the [`calendarSettings`](#toc-calendarsettings) property is set, its `allowReverse` will take precedence.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaDescribedBy?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Identifies the element(s) which will describe the component, similar to [HTML aria-describedby attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute).
For example these elements could contain error or hint message.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaLabelledBy?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Identifies the element(s) which will label the component.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### autoFocus?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


`false` 
 *
 *


</code>


</td>
<td class="table-cell-comment">


/**
 * Apply the `autoFocus` attribute to the first input.
 *
 *








</td>
</tr>
<tr>
<td class="table-cell-name">


#### calendar?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[MultiViewCalendarProps]({% slug api_dateinputs_multiviewcalendarprops %})&lt;any&gt;&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the customization or the override of the default Calendar which is rendered by the DateRangePicker.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### calendarSettings?


</td>
<td type class="table-cell-type">


<code>


[DateRangePickerCalendarSettings]({% slug api_dateinputs_daterangepickercalendarsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the additional props that can be passed to the [MultiViewCalendar](https://www.telerik.com/kendo-react-ui/components/dateinputs/multiviewcalendar) inside the DateRangePicker ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/daterangepicker/child-settings#toc-configuring-the-multiviewcalendar)).


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


Sets the `className` of the DateRangePicker.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### clearButton?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


/**
 * Show a clear button for start and end inputs. Clicking resets the range and fires `onChange`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultShow?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the default state of the DateRangePicker upon render ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/daterangepicker/default-value)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultValue?


</td>
<td type class="table-cell-type">


<code>


[SelectionRange]({% slug api_dateinputs_selectionrange %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Set the initial `value` when uncontrolled ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/daterangepicker/default-value)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### disabled?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines whether the DateRangePicker is disabled ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/daterangepicker/disabled-state)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endDateInput?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[DateInputProps]({% slug api_dateinputs_dateinputprops %})&lt;any&gt;&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the customization or the override of the default end DateInput which is rendered by the DateRangePicker
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/daterangepicker/custom-rendering#toc-customizing-the-calendar)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### endDateInputSettings?


</td>
<td type class="table-cell-type">


<code>


[DateRangePickerDateInputSettings]({% slug api_dateinputs_daterangepickerdateinputsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the additional props that can be passed to the end-date [DateInput](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput) inside the DateRangePicker ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/daterangepicker/child-settings#toc-configuring-dateinputs)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### focusedDate?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the focused date of the DateRangePicker ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/daterangepicker/focused-date)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### format?


</td>
<td type class="table-cell-type">


<code>


string | DateFormatOptions


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `date` format which is used for formatting the value of the DateInput ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/formats)).

> If [`startDateInputSettings`](#toc-startdateinputsettings) or [`endDateInputSettings`](#toc-enddateinputsettings) are set, their `format` will take precedence.


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


Specifies the `id` of the DateRangePicker.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### inputAttributes?


</td>
<td type class="table-cell-type">


<code>


React.InputHTMLAttributes&lt;HTMLInputElement&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Pass HTML attributes to the internal focusable input elements.
Attributes required for core logic are ignored.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### max?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the greatest valid date ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/daterangepicker/date-ranges)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### min?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the smallest valid date ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/daterangepicker/date-ranges)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: FocusEvent&lt;any&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time any of the DateRangePicker elements gets blurred.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCancel?


</td>
<td type class="table-cell-type">


<code>


(event: MouseEvent&lt;HTMLButtonElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the popup is about to cancel in ([adaptive mode](https://www.telerik.com/kendo-react-ui/components/dateinputs/daterangepicker/adaptive-rendering)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [DateRangePickerChangeEvent]({% slug api_dateinputs_daterangepickerchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user changes part of the range ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/daterangepicker/controlled-state#toc-controlling-the-value)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: [DateRangePickerCloseEvent]({% slug api_dateinputs_daterangepickercloseevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the popup closes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: FocusEvent&lt;any&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user focuses any of the DateRangePicker elements.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOpen?


</td>
<td type class="table-cell-type">


<code>


(event: [DateRangePickerOpenEvent]({% slug api_dateinputs_daterangepickeropenevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the popup opens.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### popup?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;PopupProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the customization or the override of the default Popup which is rendered by the DateRangePicker
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/daterangepicker/custom-rendering#toc-customizing-the-popup)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### popupSettings?


</td>
<td type class="table-cell-type">


<code>


[DateRangePickerPopupSettings]({% slug api_dateinputs_daterangepickerpopupsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the additional props that will be passed to the [Popup](https://www.telerik.com/kendo-react-ui/components/popup) inside the DateRangePicker ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/daterangepicker/child-settings#toc-configuring-the-popup)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### show?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the calendar will be displayed ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/daterangepicker/controlled-state#toc-controlling-the-popup-state)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startDateInput?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[DateInputProps]({% slug api_dateinputs_dateinputprops %})&lt;any&gt;&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the customization or the override of the default start DateInput which is rendered by the DateRangePicker
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/daterangepicker/custom-rendering#toc-customizing-the-dateinputs)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### startDateInputSettings?


</td>
<td type class="table-cell-type">


<code>


[DateRangePickerDateInputSettings]({% slug api_dateinputs_daterangepickerdateinputsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the additional props that will be passed to the start-date [DateInput](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput) inside the DateRangePicker ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/daterangepicker/child-settings#toc-configuring-dateinputs)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### style?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the additional styles that will be applied to the wrapping DateRangePicker element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### swapButton?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines whether the DateRangePicker will display a **Swap Value** button ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/daterangepicker/reverse#toc-swapping-start-and-end-dates-in-ranges)).

> The DateRangePicker will display the swap button only if the [`allowReverse`](#toc-allowreverse) property is also set to `true`.


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


Sets the `tabIndex` property of the DatePicker.





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


Override the validity state.
If `valid` is set, ignore `required`.
Part of [FormComponentProps](https://www.telerik.com/kendo-react-ui/components/common/api/formcomponentprops).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


[SelectionRange]({% slug api_dateinputs_selectionrange %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Set the selected range ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/daterangepicker/controlled-state#toc-controlling-the-value)).
Provide `start` and `end` valid `Date` values or `null`.


</td>
</tr>
</tbody>
</table>



