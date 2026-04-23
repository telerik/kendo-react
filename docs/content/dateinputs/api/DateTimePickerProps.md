---
title: DateTimePickerProps
description: "Learn how to build custom functionality when working with the React Date Inputs by Kendo UI with the help of the DateTimePickerProps."
api_reference: true
type: inner_api
slug: api_dateinputs_datetimepickerprops
---

# DateTimePickerProps
Represents the props of the [KendoReact DateTimePicker component](https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker).


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


Enable adaptive popup rendering based on viewport width.





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


Set the subtitle text in the adaptive popup (action sheet). Use only when `adaptive` is `true`.


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


Set the title text in the adaptive popup (action sheet). Use only when `adaptive` is `true`.
If not set, it matches the `label`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### allowCaretMode?


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


Determines if the users should see a blinking caret inside the Date Input when possible.





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


#### autoCorrectParts?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


`true`


</code>


</td>
<td class="table-cell-comment">


Determines whether to autocorrect invalid segments automatically.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### autoFill?


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


Autofill missing date or time parts with the current date/time on blur.





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


</code>


</td>
<td class="table-cell-comment">


Apply the `autoFocus` attribute to the internal input.








</td>
</tr>
<tr>
<td class="table-cell-name">


#### autoSwitchKeys?


</td>
<td type class="table-cell-type">


<code>


string[]


</code>


</td>
<td class="table-cell-default">


<code>


`[]`


</code>


</td>
<td class="table-cell-comment">


A string array representing custom keys, which will move the focus to the next date format segment.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### autoSwitchParts?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


`true`


</code>


</td>
<td class="table-cell-comment">


Determines whether to automatically move to the next segment after the user completes the current one.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### calendar?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[CalendarProps]({% slug api_dateinputs_calendarprops %})&lt;any&gt;&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the customization or the override of the default Calendar which is rendered by the DateTimePicker
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/custom-rendering#toc-customizing-the-calendar)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### cancelButton?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines whether to display the **Cancel** button in the popup.


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


Sets the `className` of the DateTimePicker.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dateInput?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[DateInputProps]({% slug api_dateinputs_dateinputprops %})&lt;any&gt;&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the customization or the override of the default DateInput which is rendered by the DateTimePicker
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/custom-rendering#toc-customizing-the-dateinput)).


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


Sets if the calendar popup is opened upon initial render.
For more information, refer to the article on
[uncontrolled components in React](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultValue?


</td>
<td type class="table-cell-type">


<code>


"null" | Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Set the initial `value` when uncontrolled ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/default-value)).
See also [uncontrolled components](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components).


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


Determines whether the DateTimePicker is disabled
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/disabled-state)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### enableMouseWheel?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


`true`


</code>


</td>
<td class="table-cell-comment">


Enable mouse wheel to increment or decrement segments.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### fillMode?


</td>
<td type class="table-cell-type">


<code>


"flat" | "solid" | "outline"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Control the `fillMode` (background) of the DateTimePicker.

The available options are:
- solid
- outline
- flat




```tsx
<DateTimePicker fillMode="outline" />
```



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


Specifies the initial focusedDate of the Calendar inside the DateTimePicker
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/date)).


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


Specifies the date format that is used to display the input value
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/formats)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### formatPlaceholder?


</td>
<td type class="table-cell-type">


<code>


[DateInputFormatPlaceholder]({% slug api_dateinputs_dateinputformatplaceholder %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the descriptions of the format sections in the input field
([more information and examples](https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/placeholders)).


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


Specifies the `id` of the DateTimePicker.


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


Pass HTML attributes to the internal focusable input.
Attributes required for core logic are ignored.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### label?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Renders a floating label for the DateTimePicker.


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


Specifies the greatest valid date
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/date-ranges)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### maxTime?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the greatest valid time within the day ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/date-ranges)).


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


Specifies the smallest valid date
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/date-ranges)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### minTime?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the smallest valid time within the day ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/date-ranges)).


</td>
</tr>
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


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: FocusEvent&lt;HTMLDivElement | HTMLSpanElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time any of the DateTimePicker elements gets blurred.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [DateTimePickerChangeEvent]({% slug api_dateinputs_datetimepickerchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


/**
 * Fires when the user selects a new `value` ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/controlled-state#toc-controlling-the-date-value)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: [DateTimePickerCloseEvent]({% slug api_dateinputs_datetimepickercloseevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


/**
 * Fires when the popup closes.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: FocusEvent&lt;HTMLDivElement | HTMLSpanElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user focuses any of the DateTimePicker elements.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOpen?


</td>
<td type class="table-cell-type">


<code>


(event: [DateTimePickerOpenEvent]({% slug api_dateinputs_datetimepickeropenevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


/**
 * Fires when the popup opens.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### placeholder?


</td>
<td type class="table-cell-type">


<code>


"null" | string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the hint the DateInput displays when its value is `null` or there is no partial selection.
For more information, refer to the article on
[placeholders](https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/placeholders).


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


Enables the customization or the override of the default Popup which is rendered by the DateTimePicker
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/custom-rendering#toc-customizing-the-popup)).


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


#### rounded?


</td>
<td type class="table-cell-type">


<code>


"small" | "none" | "medium" | "large" | "full"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Control the corner `rounded` style of the DateTimePicker.

The available options are:
- small
- medium
- large
- full
- none




```tsx
<DateTimePicker rounded="full" />
```



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


Specifies if the popup will be displayed
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/controlled-state#toc-controlling-the-popup-state)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)
 *
 *


</code>


</td>
<td class="table-cell-comment">


/**
 * Control the `size` of the DateTimePicker.
 *
 * The available options are:
 * - small
 * - medium
 * - large
 *
 *




* ```tsx
 * <DateTimePicker size="large" />
 * ```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### steps?


</td>
<td type class="table-cell-type">


<code>


[DateInputIncrementalSteps]({% slug api_dateinputs_dateinputincrementalsteps %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the incremental steps of the `DateInput` and the internal `TimePart` ([see examples](https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/incremental-steps)).

The available options are:
- `year: Number`&mdash;Controls the incremental step of the year value.
- `month: Number`&mdash;Controls the incremental step of the month value.
- `day: Number`&mdash;Controls the incremental step of the day value.
- `hour: Number`&mdash;Controls the incremental step of the hour value.
- `minute: Number`&mdash;Controls the incremental step of the minute value.
- `second: Number`&mdash;Controls the incremental step of the second value.


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


Sets the `tabIndex` property of the DateTimePicker.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the title of the `input` element of the DateTimePicker.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### twoDigitYearMax?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


`68`


</code>


</td>
<td class="table-cell-comment">


Set the upper threshold for interpreting a two-digit year as part of the current century ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/formats#toc-two---digit-year-max)).
Values smaller than (`twoDigitYearMax` + 1) map to 20xx. Larger map to 19xx.





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
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


"null" | Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


/**
 * Set the current `value` ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datetimepicker/controlled-state#toc-controlling-the-date-value)).
 * Provide a valid `Date` or `null`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### weekNumber?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines whether to display a week number column of the Calendar inside the DateTimePicker
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/calendar/weeks-numbers)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### width?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the width of the DateTimePicker.


</td>
</tr>
</tbody>
</table>



