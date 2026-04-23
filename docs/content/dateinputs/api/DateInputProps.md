---
title: DateInputProps
description: "Learn how to build custom functionality when working with the React Date Inputs by Kendo UI with the help of the DateInputProps."
api_reference: true
type: inner_api
slug: api_dateinputs_dateinputprops
---

# DateInputProps
Represents the props of the [KendoReact DateInput component](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput). The generic argument is passed to the `onChange` property and is used as a target in the [`DateInputChangeEvent`](https://www.telerik.com/kendo-react-ui/components/dateinputs/api/dateinputchangeevent) interface.


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


#### ariaControls?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Reference the id of the element that the DateInput controls via ARIA.





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


#### ariaExpanded?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Indicate whether the popup content is expanded.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaHasPopup?


</td>
<td type class="table-cell-type">


<code>


boolean | "dialog" | "grid"


</code>


</td>
<td class="table-cell-default">


<code>


`grid`


</code>


</td>
<td class="table-cell-comment">


Define the interactive popup type for assistive tech.
Use `grid` (default) or `dialog` based on context.








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


#### ariaRole?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Set the ARIA role of the DateInput root element.


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


Autofill missing parts with the current date on blur.





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


Set a custom CSS class on the DateInput DOM element.


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


Show a clear button that sets `value` to `null` and fires `onChange`.


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


Set the initial `value` when the component is uncontrolled.
If `value` is not set, the component uses this as its starting value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dir?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `dir` HTML attribute.


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


Determines whether the DateInput is disabled ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/disabled-state)).


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


Indicates whether the mouse scroll can be used to increase/decrease the date segments values.





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


Control the `fillMode` (background) of the DateInput.

The available options are:
- solid
- outline
- flat




```tsx
<DateInput fillMode="outline" />
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


Specifies the `date` format which is used for formatting the value ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/formats)). If not set, the default format will be used.


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


Specifies the descriptions of the format sections in the input field ([more information and example](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/placeholders)).


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


Sets the `id` of the `input` DOM element.


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


Renders a floating label for the DateInput.


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


Specifies the greatest date that is valid ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/date-ranges)).


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


Specifies the greatest time that is valid ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/date-ranges#toc-limiting-the-time-range)).


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


Specifies the smallest date that is valid ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/date-ranges)).


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


Specifies the smallest time that is valid ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/date-ranges#toc-limiting-the-time-range)).


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

This property is part of the [FormComponentProps](https://www.telerik.com/kendo-react-ui/components/common/api/formcomponentprops) interface.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [DateInputChangeEvent]({% slug api_dateinputs_dateinputchangeevent %})&lt;T&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user edits the `value` ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/date-ranges)).


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
[placeholders](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/placeholders).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### readonly?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Put the component in read-only mode.


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


Control the corner `rounded` style of the DateInput.

The available options are:
- small
- medium
- large
- full
- none




```tsx
<DateInput rounded="full" />
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


Control the `size` of the DateInput.

The available options are:
- small
- medium
- large




```tsx
<DateInput size="large" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### spinners?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies whether the **Up** and **Down** spin buttons will be rendered ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/spin-buttons)).


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


Specifies the incremental steps of the DateInput ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/incremental-steps)).

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


Sets the `tabIndex` property of the DateInput.





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


Sets the title of the `input` element of the DateInput.


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


The maximum year to assume to be from the current century when typing two-digit year value ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/formats#toc-two---digit-year-max)).
The default value of 68, indicating that typing any value less than 69 will be assumed to be 20xx, while 69 and larger will be assumed to be 19xx.





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


Set the `value` of the DateInput.


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


Specifies the width of the DateInput.


</td>
</tr>
</tbody>
</table>



