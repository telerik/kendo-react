---
title: DatePickerProps
description: "Learn how to build custom functionality when working with the React Date Inputs by Kendo UI with the help of the DatePickerProps."
api_reference: true
type: inner_api
slug: api_dateinputs_datepickerprops
---

# DatePickerProps
Represents the props of the [KendoReact DatePicker component](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker).


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


Enable adaptive rendering of the popup based on viewport width.





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
If not set, the title matches the `label`.


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
Example usage of the `ariaDescribedBy` property:
```jsx
<DatePicker ariaDescribedBy="description-id" />
```





</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaLabel?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The accessible label of the component.
Example usage of the `ariaLabel` property:
```jsx
<DatePicker ariaLabel="Date Picker" />
```





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
Example usage of the `ariaLabelledBy` property:
```jsx
<DatePicker ariaLabelledBy="label-id" />
```





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


Autofill missing date parts with the current date on blur.





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


Apply the `autoFocus` attribute to the internal input element.








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


ComponentType&lt;[CalendarProps]({% slug api_dateinputs_calendarprops %})&lt;any&gt;&gt; | ComponentType&lt;[MultiViewCalendarProps]({% slug api_dateinputs_multiviewcalendarprops %})&lt;any&gt;&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Allows you to customize or replace the default Calendar rendered by DatePicker.
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/custom-rendering#toc-customizing-the-calendar)).
Example usage of the `calendar` property:
```jsx
<DatePicker calendar={CustomCalendar} />
```


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


Sets the `className` of the DatePicker.
Example usage of the `className` property:
```jsx
<DatePicker className="custom-class" />
```


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


Allows you to customize or replace the default DateInput rendered by DatePicker.
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/custom-rendering#toc-customizing-the-dateinput)).
Example usage of the `dateInput` property:
```jsx
<DatePicker dateInput={CustomDateInput} />
```


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


Sets the default state of the DatePicker upon render ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/default-value)).
Example usage of the `defaultShow` property:
```jsx
<DatePicker defaultShow={true} />
```


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


Set the initial `value` when the component is uncontrolled ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/default-value)).


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


Determines whether the DatePicker is disabled ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/disabled-state)).
Example usage of the `disabled` property:
```jsx
<DatePicker disabled={true} />
```


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


/**
 * Enable mouse wheel to increment or decrement segments.
 *
 *





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


Control the `fillMode` (background) of the DatePicker.

The available options are:
- solid
- outline
- flat




```tsx
<DatePicker fillMode="outline" />
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


Specifies the focused date of the DatePicker ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/date)).
Example usage of the `focusedDate` property:
```jsx
<DatePicker focusedDate={new Date()} />
```


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


Specifies the date format that is used to display the input value ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/formats)).
Example usage of the `format` property:
```jsx
<DatePicker format="MM/dd/yyyy" />
```


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


Defines the descriptions of the format sections in the input field ([more information and examples](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/placeholders)).
Example usage of the `formatPlaceholder` property:
```jsx
<DatePicker formatPlaceholder="Enter date" />
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


Specifies the `id` of the DatePicker.
Example usage of the `id` property:
```jsx
<DatePicker id="datepicker-id" />
```


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


Pass HTML attributes to the internal focusable input element.
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


Renders a floating label for the DatePicker.
Example usage of the `label` property:
```jsx
<DatePicker label="Date Picker Label" />
```


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


Specifies the greatest valid date ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/date-ranges)).
Example usage of the `max` property:
```jsx
<DatePicker max={new Date(2099, 11, 31)} />
```


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


Specifies the smallest valid date ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/date-ranges)).
Example usage of the `min` property:
```jsx
<DatePicker min={new Date(1900, 0, 1)} />
```


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
Example usage of the `name` property:
```jsx
<DatePicker name="datepicker-name" />
```


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


Fires each time any of the DatePicker elements gets blurred.
Example usage of the `onBlur` property:
```jsx
<DatePicker onBlur={(event) => console.log('Blur event:', event)} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [DatePickerChangeEvent]({% slug api_dateinputs_datepickerchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user selects a new `value` ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/controlled-state#toc-controlling-the-date-value)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: [DatePickerCloseEvent]({% slug api_dateinputs_datepickercloseevent %})) => void


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


(event: FocusEvent&lt;HTMLDivElement | HTMLSpanElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user focuses any of the DatePicker elements.
Example usage of the `onFocus` property:
```jsx
<DatePicker onFocus={(event) => console.log('Focus event:', event)} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOpen?


</td>
<td type class="table-cell-type">


<code>


(event: [DatePickerOpenEvent]({% slug api_dateinputs_datepickeropenevent %})) => void


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
[placeholders](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/placeholders).
Example usage of the `placeholder` property:
```jsx
<DatePicker placeholder="Enter a date" />
```


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


Allows you to customize or replace the default Popup rendered by DatePicker.
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/custom-rendering#toc-customizing-the-popup)).
Example usage of the `popup` property:
```jsx
<DatePicker popup={CustomPopup} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### popupSettings?


</td>
<td type class="table-cell-type">


<code>


[DateInputsPopupSettings]({% slug api_dateinputs_dateinputspopupsettings %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the popup options of the DatePicker.

The available options are:
- `animate: Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
- `appendTo`: &mdash; Defines the container to which the Popup will be appended. Defaults to [`body`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body).
- `popupClass: String`&mdash;Specifies a list of CSS classes that are used to style the popup.
Example usage of the `popupSettings` property:
```jsx
<DatePicker popupSettings={{ animate: true, popupClass: 'custom-popup' }} />
```


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


Control the corner `rounded` style of the DatePicker.

The available options are:
- small
- medium
- large
- full
- none




```tsx
<DatePicker rounded="full" />
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


Specifies if the calendar will be displayed ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/controlled-state#toc-controlling-the-popup-state)).
Example usage of the `show` property:
```jsx
<DatePicker show={true} />
```


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


</code>


</td>
<td class="table-cell-comment">


Control the `size` of the DatePicker.

The available options are:
- small
- medium
- large




```tsx
<DatePicker size="large" />
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


Sets the `tabIndex` property of the DatePicker.
Example usage of the `tabIndex` property:
```jsx
<DatePicker tabIndex={0} />
```





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


Sets the title of the `input` element of the DatePicker.
Example usage of the `title` property:
```jsx
<DatePicker title="Date Picker Title" />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### toggleButton?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[ToggleButtonProps]({% slug api_dateinputs_togglebuttonprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Allows you to customize or replace the default Toggle button rendered by DatePicker.
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/custom-rendering#toc-customizing-the-toggle-button)).
Example usage of the `toggleButton` property:
```jsx
<DatePicker toggleButton={CustomToggleButton} />
```


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


/**
 * Set the upper threshold for interpreting a two-digit year as part of the current century ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/formats#toc-two---digit-year-max)).
 * Values smaller than (`twoDigitYearMax` + 1) map to 20xx. Larger map to 19xx.
 *
 *





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


Set the current `value` ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/controlled-state#toc-controlling-the-date-value)).
Provide a valid [JavaScript `Date`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date) instance or `null`.


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


Determines whether to display a week number column in the `month` view of the Calendar ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/week-num-column)).
Example usage of the `weekNumber` property:
```jsx
<DatePicker weekNumber={true} />
```


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


Specifies the width of the DatePicker.
Example usage of the `width` property:
```jsx
<DatePicker width="300px" />
```


</td>
</tr>
</tbody>
</table>



