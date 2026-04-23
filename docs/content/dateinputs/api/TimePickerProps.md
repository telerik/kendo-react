---
title: TimePickerProps
description: "Learn how to build custom functionality when working with the React Date Inputs by Kendo UI with the help of the TimePickerProps."
api_reference: true
type: inner_api
slug: api_dateinputs_timepickerprops
---

# TimePickerProps
Represents the props of the [KendoReact TimePicker component](https://www.telerik.com/kendo-react-ui/components/dateinputs/timepicker).


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


Providing different rendering of the popup element based on the screen dimensions.





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


Specifies the text that is rendered as subtitle in the adaptive popup(action sheet).
Applicable only when `adaptive` is set to `true`.


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


Specifies the text that is rendered as title in the adaptive popup(action sheet).
Applicable only when `adaptive` is set to `true`.
If not provided, the title will be the same as the label.


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


Sets the `className` of the TimePicker.


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


Enables the customization or the override of the default DateInput which is rendered by the TimePicker
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/timepicker/custom-rendering#toc-customizing-the-dateinput)).


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


Sets the default state of the popup upon render ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/timepicker/default-value#toc-setting-the-default-popup-state)).


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


Sets the default value of the TimePicker ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/timepicker/default-value#toc-setting-the-default-value)).


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


Determines whether the TimePicker is disabled ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/timepicker/disabled-state)).


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


Indicates whether the mouse scroll can be used to increase/decrease the time segments values.





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


Configures the `fillMode` of the TimePicker.

The available options are:
- solid
- outline
- flat




```tsx
<TimePicker fillMode="outline" />
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


Specifies the date format that is used to display the input value ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/timepicker/formats)).


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


Defines the descriptions of the format sections in the input field ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/timepicker/placeholders)).


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


Specifies the `id` of the TimePicker.


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


Sets the HTML attributes of the inner focusable input element.
Attributes which are essential for certain component functionalities cannot be changed.





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


Renders a floating label for the TimePicker.


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


Specifies the greatest valid time ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/timepicker/time-ranges)).


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


Specifies the smallest valid time ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/timepicker/time-ranges)).


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


#### nowButton?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines whether to display the **Now** button in the popup.

> If the current time is out of range or the incremental step is greater than `1`, the **Now** button will be hidden.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: FocusEvent&lt;HTMLDivElement&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time any of the TimePicker elements gets blurred.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [TimePickerChangeEvent]({% slug api_dateinputs_timepickerchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the user selects a new value ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/timepicker/controlled-state#toc-controlling-the-date-value)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: [TimePickerCloseEvent]({% slug api_dateinputs_timepickercloseevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the popup is closed.


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


Fires each time the user focuses any of the TimePicker elements.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOpen?


</td>
<td type class="table-cell-type">


<code>


(event: [TimePickerOpenEvent]({% slug api_dateinputs_timepickeropenevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the popup is opened.


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
[placeholders](https://www.telerik.com/kendo-react-ui/components/dateinputs/timepicker/placeholders).


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


Enables the customization or the override of the default Popup which is rendered by the TimePicker
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/timepicker/custom-rendering#toc-customizing-the-popup)).


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


Configures the popup options of the TimePicker.

The available options are:
- `animate: Boolean`&mdash;Controls the popup animation. By default, the open and close animations are enabled.
- `appendTo:`&mdash; Defines the container to which the Popup will be appended. Defaults to [`body`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body).
- `popupClass: String`&mdash;Specifies a list of CSS classes that are used to style the popup.


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


Configures the `roundness` of the TimePicker.

The available options are:
- small
- medium
- large
- full
- none




```tsx
<TimePicker rounded="full" />
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


Specifies if a time selector will be displayed ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/timepicker/controlled-state#toc-controlling-the-popup-state)).


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


Configures the `size` of the TimePicker.

The available options are:
- small
- medium
- large




```tsx
<TimePicker size="large" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### smoothScroll?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Toggles the smooth scroll animation on time click. By default, the animation is enabled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### steps?


</td>
<td type class="table-cell-type">


<code>


[TimePickerIncrementalSteps]({% slug api_dateinputs_timepickerincrementalsteps %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the incremental steps of the TimePicker ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/timepicker/incremental-steps)).

> If the incremental step is greater than `1`, the **Now** button will be hidden.


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


Sets the `tabIndex` property of the TimePicker.





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


Sets the title of the `input` element of the TimePicker.


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


Specifies the value of the TimePicker ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/timepicker/controlled-state#toc-controlling-the-date-value)).

> The `value` has to be a valid [JavaScript `Date`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date) instance.


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


Specifies the width of the TimePicker.


</td>
</tr>
</tbody>
</table>



